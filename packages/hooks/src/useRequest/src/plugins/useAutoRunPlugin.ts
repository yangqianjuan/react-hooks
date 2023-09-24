import { useRef, useEffect } from 'react';
import { Plugin } from '../types';

// support refreshDeps & ready
const useAutoRunPlugin: Plugin<any, any[]> = (
  fetchInstance,
  {
    manual,
    ready = true,
    defaultParams = [],
    refreshDeps = [],
    refreshDepsAction,
  },
) => {
  const hasAutoRun = useRef(false);
  hasAutoRun.current = false;

  useEffect(() => {
    if (!manual && ready) {
      hasAutoRun.current = true;
      fetchInstance.run(...defaultParams);
    }
  }, [ready]);

  useEffect(() => {
    if (hasAutoRun.current) {
      return;
    }
    if (!manual) {
      hasAutoRun.current = true;
      if (refreshDepsAction) {
        refreshDepsAction();
      } else {
        fetchInstance.refresh(...defaultParams);
      }
    }
  }, [...refreshDeps]);

  return {
    onBefore: (p) => {
      console.log('ready>>>>>', p, ready);
      if (!ready) {
        return {
          stopNow: true,
        };
      }
    },
  };
};

useAutoRunPlugin.onInit = ({ ready = true, manual, defaultParams = [] }) => {
  return {
    loading: !manual && ready,
    params: defaultParams,
  };
};

export default useAutoRunPlugin;
