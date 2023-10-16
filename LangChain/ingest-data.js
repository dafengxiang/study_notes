/*
 * @Description: 数据摄取
 * @Author: wangfengxiang
 * @Date: 2023-10-14 22:42:42
 * @LastEditTime: 2023-10-16 09:59:16
 * @LastEditors: wangfengxiang
 */

import { UnstructuredLoader } from 'langchain/document_loaders/fs/unstructured'
console.log('UnstructuredLoader: ', UnstructuredLoader);
const unstructuredLoader = new UnstructuredLoader('./vue3.md')
console.log('unstructuredLoader: ', unstructuredLoader);
const docs = await unstructuredLoader.load()
console.log('docs: ', docs);