const gulp = require('gulp');
const fg = require('fast-glob'); //fs的升级版
const fse = require('fs-extra');
const gy = require('gray-matter'); //能够获取页面的信息格式
const commonConfig = require('../../gulpfile');

const generateDesc = function (path) {
  if (!fse.existsSync(path)) {
    return;
  }

  const mdFile = fse.readFileSync(path, 'utf-8');
  const { content } = gy(mdFile);
  let description =
    (content
      .replace(/\r\n/g, '\n')
      .match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || '';
  description = description.trim();
  description = description.charAt(0).toLowerCase() + description.slice(1);

  return description;
};
const generateDoc = async function () {
  const metaData = { functions: [] };
  const hooks = fg
    .sync('src/use*', {
      onlyDirectories: true,
    })
    .map((path) => path.replace('src/', ''));

  await Promise.allSettled(
    hooks.map(async (hook) => {
      const description = await generateDesc(`src/${hook}/index.md`);
      return {
        name: hook,
        description,
      };
    }),
  ).then((res) => {
    metaData.functions = res.map((item) => {
      if (item.status === 'fulfilled') {
        return item.value;
      }
      return null;
    });
  });

  return metaData;
};

gulp.task('metaData', async function () {
  const metaData = await generateDoc();
  await fse.writeJson('metadata.json', metaData, { spaces: 2 });
});

exports.default = gulp.series(commonConfig.default, 'metaData');
