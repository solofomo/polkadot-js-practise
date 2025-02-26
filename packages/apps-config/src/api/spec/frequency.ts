// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Not used/included in index.ts as of https://github.com/polkadot-js/apps/pull/9243

import type { OverrideBundleDefinition } from '@polkadot/types/types';

import { rpc, runtime, signedExtensions, types } from '@frequency-chain/api-augment';

export default {
  rpc,
  runtime,
  signedExtensions,
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types
    }
  ]
} as OverrideBundleDefinition;
