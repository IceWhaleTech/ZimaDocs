/*
 * @Author: Jerryk jerry@icewhale.org
 * @Date: 2022-09-15 10:26:32
 * @LastEditors: Jerryk jerry@icewhale.org
 * @LastEditTime: 2022-09-22 18:18:27
 * @FilePath: \zima-docs\scripts\validate.js
 * @Description: 
 * 
 * Copyright (c) 2022 by IceWhale, All Rights Reserved. 
 */
/* global hexo */

'use strict';

const { join } = require('path');

const { listDir } = require('hexo-fs');
const sharp = require('sharp');

function difference(setA, setB) {
  const diff = new Set(setA);
  for (const elem of setB) {
    diff.delete(elem);
  }
  return diff;
}

