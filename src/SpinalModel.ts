/*
 * Copyright 2018 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */

export * from 'spinal-core-connectorjs';
import { spinalCore } from 'spinal-core-connectorjs';
export default spinalCore;

// following is old spinalcorejs compatibility

import {
  Model as _Model,
  Str as _Str,
  Bool as _Bool,
  Val as _Val,
  Lst as _Lst,
  Directory as _Directory,
  Vec as _Vec,
  Path as _Path,
  File as _File,
  Ptr as _Ptr,
  Choice as _Choice,
  TypedArray as _TypedArray,
  TypedArray_Int32 as _TypedArray_Int32,
  TypedArray_Float64 as _TypedArray_Float64,
  Process as _Process,
  BindProcess as _BindProcess,
  FileSystem as _FileSystem,
  Pbr as _Pbr,
} from 'spinal-core-connectorjs';

const Model: typeof _Model = _Model ? _Model : spinalCore._def.Model;

const Str: typeof _Str = _Str ? _Str : spinalCore._def.Str;

const Bool: typeof _Bool = _Bool ? _Bool : spinalCore._def.Bool;

const Val: typeof _Val = _Val ? _Val : spinalCore._def.Val;

const Lst: typeof _Lst = _Lst ? _Lst : spinalCore._def.Lst;
const Directory: typeof _Directory = _Directory
  ? _Directory
  : spinalCore._def.Directory;

const Vec: typeof _Vec = _Vec ? _Vec : spinalCore._def.Vec;

const Path: typeof _Path = _Path ? _Path : spinalCore._def.Path;

const File: typeof _File = _File ? _File : spinalCore._def.File;

const Ptr: typeof _Ptr = _Ptr ? _Ptr : spinalCore._def.Ptr;

const Pbr: typeof _Pbr = _Pbr ? _Pbr : spinalCore._def.Pbr;

const Choice: typeof _Choice = _Choice ? _Choice : spinalCore._def.Choice;
const TypedArray: typeof _TypedArray = _TypedArray
  ? _TypedArray
  : spinalCore._def.TypedArray;
const TypedArray_Int32: typeof _TypedArray_Int32 = _TypedArray_Int32
  ? _TypedArray_Int32
  : spinalCore._def.TypedArray_Int32;
const TypedArray_Float64: typeof _TypedArray_Float64 = _TypedArray_Float64
  ? _TypedArray_Float64
  : spinalCore._def.TypedArray_Float64;

const Process: typeof _Process = _Process ? _Process : spinalCore._def.Process;
const BindProcess: typeof _BindProcess = _BindProcess
  ? _BindProcess
  : spinalCore._def.BindProcess;
const FileSystem: typeof _FileSystem = _FileSystem
  ? _FileSystem
  : spinalCore._def.FileSystem;

export { Pbr };
export { spinalCore };
export { Model };
export { Str };
export { Bool };
export { Val };
export { Lst };
export { Directory };
export { Vec };
export { Path };
export { File };
export { Ptr };
export { Choice };
export { TypedArray };
export { TypedArray_Int32 };
export { TypedArray_Float64 };
export { Process };
export { BindProcess };
export { FileSystem };
