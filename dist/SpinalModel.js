"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystem = exports.BindProcess = exports.Process = exports.TypedArray_Float64 = exports.TypedArray_Int32 = exports.TypedArray = exports.Choice = exports.Ptr = exports.File = exports.Path = exports.Vec = exports.Directory = exports.Lst = exports.Val = exports.Bool = exports.Str = exports.Model = exports.spinalCore = exports.Pbr = void 0;
__exportStar(require("spinal-core-connectorjs"), exports);
const spinal_core_connectorjs_1 = require("spinal-core-connectorjs");
Object.defineProperty(exports, "spinalCore", { enumerable: true, get: function () { return spinal_core_connectorjs_1.spinalCore; } });
exports.default = spinal_core_connectorjs_1.spinalCore;
// following is old spinalcorejs compatibility
const spinal_core_connectorjs_2 = require("spinal-core-connectorjs");
const Model = spinal_core_connectorjs_2.Model ? spinal_core_connectorjs_2.Model : spinal_core_connectorjs_1.spinalCore._def.Model;
exports.Model = Model;
const Str = spinal_core_connectorjs_2.Str ? spinal_core_connectorjs_2.Str : spinal_core_connectorjs_1.spinalCore._def.Str;
exports.Str = Str;
const Bool = spinal_core_connectorjs_2.Bool ? spinal_core_connectorjs_2.Bool : spinal_core_connectorjs_1.spinalCore._def.Bool;
exports.Bool = Bool;
const Val = spinal_core_connectorjs_2.Val ? spinal_core_connectorjs_2.Val : spinal_core_connectorjs_1.spinalCore._def.Val;
exports.Val = Val;
const Lst = spinal_core_connectorjs_2.Lst ? spinal_core_connectorjs_2.Lst : spinal_core_connectorjs_1.spinalCore._def.Lst;
exports.Lst = Lst;
const Directory = spinal_core_connectorjs_2.Directory
    ? spinal_core_connectorjs_2.Directory
    : spinal_core_connectorjs_1.spinalCore._def.Directory;
exports.Directory = Directory;
const Vec = spinal_core_connectorjs_2.Vec ? spinal_core_connectorjs_2.Vec : spinal_core_connectorjs_1.spinalCore._def.Vec;
exports.Vec = Vec;
const Path = spinal_core_connectorjs_2.Path ? spinal_core_connectorjs_2.Path : spinal_core_connectorjs_1.spinalCore._def.Path;
exports.Path = Path;
const File = spinal_core_connectorjs_2.File ? spinal_core_connectorjs_2.File : spinal_core_connectorjs_1.spinalCore._def.File;
exports.File = File;
const Ptr = spinal_core_connectorjs_2.Ptr ? spinal_core_connectorjs_2.Ptr : spinal_core_connectorjs_1.spinalCore._def.Ptr;
exports.Ptr = Ptr;
const Pbr = spinal_core_connectorjs_2.Pbr ? spinal_core_connectorjs_2.Pbr : spinal_core_connectorjs_1.spinalCore._def.Pbr;
exports.Pbr = Pbr;
const Choice = spinal_core_connectorjs_2.Choice ? spinal_core_connectorjs_2.Choice : spinal_core_connectorjs_1.spinalCore._def.Choice;
exports.Choice = Choice;
const TypedArray = spinal_core_connectorjs_2.TypedArray
    ? spinal_core_connectorjs_2.TypedArray
    : spinal_core_connectorjs_1.spinalCore._def.TypedArray;
exports.TypedArray = TypedArray;
const TypedArray_Int32 = spinal_core_connectorjs_2.TypedArray_Int32
    ? spinal_core_connectorjs_2.TypedArray_Int32
    : spinal_core_connectorjs_1.spinalCore._def.TypedArray_Int32;
exports.TypedArray_Int32 = TypedArray_Int32;
const TypedArray_Float64 = spinal_core_connectorjs_2.TypedArray_Float64
    ? spinal_core_connectorjs_2.TypedArray_Float64
    : spinal_core_connectorjs_1.spinalCore._def.TypedArray_Float64;
exports.TypedArray_Float64 = TypedArray_Float64;
const Process = spinal_core_connectorjs_2.Process ? spinal_core_connectorjs_2.Process : spinal_core_connectorjs_1.spinalCore._def.Process;
exports.Process = Process;
const BindProcess = spinal_core_connectorjs_2.BindProcess
    ? spinal_core_connectorjs_2.BindProcess
    : spinal_core_connectorjs_1.spinalCore._def.BindProcess;
exports.BindProcess = BindProcess;
const FileSystem = spinal_core_connectorjs_2.FileSystem
    ? spinal_core_connectorjs_2.FileSystem
    : spinal_core_connectorjs_1.spinalCore._def.FileSystem;
exports.FileSystem = FileSystem;
//# sourceMappingURL=SpinalModel.js.map