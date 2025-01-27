/**
 * Copyright 2020 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ChunkTransform } from '../../transform';
import { OutputOptions } from 'rollup';
/**
 * This Transform will apply only if the Rollup configuration is for a cjs output.
 *
 * In order to preserve the __esModules boolean on an Object, this typedef needs to be present.
 */
export default class CJSTransform extends ChunkTransform {
  name: string;
  extern(options: OutputOptions): string | null;
}
