/*
 * @Description: 数据摄取
 * @Author: wangfengxiang
 * @Date: 2023-10-14 22:42:42
 * @LastEditTime: 2023-10-14 22:49:44
 * @LastEditors: wangfengxiang
 */
import {UnstructuredLoader} from 'langchain/document_loaders/fs/unstructured'
const unstructuredLoader = new UnstructuredLoader()