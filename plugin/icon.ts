import { readFileSync, readdirSync } from 'fs'; //////草

let idPerfix = ''; //图标id标识符
const svgTitle = /<svg([^>+].*?)>/;
const clearHeightWidth = /(width|height)="([^>+].*?)"/g;
const hasViewBox = /(viewBox="[^>+].*?")/g;
const clearReturn = /(\r)|(\n)/g;
const clearFill = /(fill=")([^"]+)(")/;

// 查找svg文件
function svgFind(e: any): any {
  const arr = []; //数组，存储处理过的svg
  const dirents = readdirSync(e, { withFileTypes: true }); //获取目录下的文件及文件夹
  for (const dirent of dirents) {
    if (dirent.isDirectory()) {
      //如果目标是文件夹
      arr.push(...svgFind(e + dirent.name + '/'));
    } else {
      //加载文件内容并进行处理
      const svg = readFileSync(e + dirent.name)
        .toString()
        .replace(clearReturn, '')
        .replace(svgTitle, ($1: any, $2: any) => {
          let width = 0,
            height = 0,
            content = $2.replace(
              clearHeightWidth,
              (s1: any, s2: any, s3: any) => {
                if (s2 === 'width') width = s3;
                else if (s2 === 'height') height = s3;
                return '';
              }
            );
          if (!hasViewBox.test($2))
            content += `viewBox="0 0 ${width} ${height}"`;
          return `<symbol id="${idPerfix}-${dirent.name.replace(
            '.svg',
            ''
          )}" ${content}>`;
        })
        .replace('</svg>', '</symbol>')
        .replace(clearFill, '');
      //处理结果丢进数组
      arr.push(svg);
    }
  }
  return arr;
}

// 生成svg
export const createSvg = (path: any, perfix = 'icon') => {
  if (path === '') {
    // 如果路径为空
    return;
  }
  idPerfix = perfix; //图标id标识符 默认==icon
  const res = svgFind(path);
  return {
    name: 'svg-transform',
    transformIndexHtml(dom: String) {
      return dom.replace(
        '<body>',
        `<body><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">${res.join(
          ''
        )}</svg>`
      );
    },
  };
};
