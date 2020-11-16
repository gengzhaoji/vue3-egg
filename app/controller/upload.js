// const Controller = require('egg').Controller;
// const fs = require('mz/fs');

// module.exports = class extends Controller {
//     async upload() {
//         const { ctx } = this;
//         const file = ctx.request.files[0];
//         const name = 'egg-multipart-test/' + path.basename(file.filename);
//         let result;
//         try {
//             // 处理文件，比如上传到云端
//             result = await ctx.oss.put(name, file.filepath);
//         } finally {
//             // 需要删除临时文件
//             await fs.unlink(file.filepath);
//         }

//         ctx.body = {
//             url: result.url,
//             // 获取所有的字段值
//             requestBody: ctx.request.body,
//         };
//     }
// };

// const Controller = require('egg').Controller;
// const fs = require('mz/fs');

// module.exports = class extends Controller {
//   async upload() {
//     const { ctx } = this;
//     console.log(ctx.request.body);
//     console.log('got %d files', ctx.request.files.length);
//     for (const file of ctx.request.files) {
//       console.log('field: ' + file.fieldname);
//       console.log('filename: ' + file.filename);
//       console.log('encoding: ' + file.encoding);
//       console.log('mime: ' + file.mime);
//       console.log('tmp filepath: ' + file.filepath);
//       let result;
//       try {
//         // 处理文件，比如上传到云端
//         result = await ctx.oss.put('egg-multipart-test/' + file.filename, file.filepath);
//       } finally {
//         // 需要删除临时文件
//         await fs.unlink(file.filepath);
//       }
//       console.log(result);
//     }
//   }
// };