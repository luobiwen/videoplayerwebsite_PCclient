import { myPost } from './userClient'
/**
 * [uploadFile] - 上传切片参数
 * @param fileHash 文件hash，String
 * @param fileSize 文件大小，Number
 * @param fileName 文件名称，String
 * @param index 多文件上传中的所在index，number
 * @param chunkFile 切片文件本身，File || Blob || void
 * @param chunkHash 切片文件hash，String
 * @param chunkSize 分片大小，Number
 * @param chunkNumber 切片总数量，Number
 * @param finish 是否上传完成，可选参数，Boolean
 */

// 上传单个切片
export function uploadFile(data, onCancel) {
  // const request = myPost('/upload', data, true)
  const request = myPost('/videos/chunk', data, true);
  return request;
}

/**
 * [mergeChunk] - 合并切片
 * @param chunkSize 分片大小，Number
 * @param fileName 文件名称，String
 * @param fileSize 文件大小，Number
 */

// 合并所有切片
export function mergeChunk(data) {
  // return myPost('/upload', data, true);//调试
  return myPost('/videos/complete', data, true); 
}

/**
 * [checkFile] - 检查文件是否存在
 * @param fileHash 文件hash，String
 * @param fileName 文件名称，String
 */

// 检查文件是否存在
// export function checkFile(data) {
  // return myPost('/check', data, true);
// }