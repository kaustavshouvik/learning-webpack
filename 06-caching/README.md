1. Runtime chunk -> Every chunk has a runtime chunk.
   - It handles how the chunk is loaded.
2. `optimization.runtimeChunk: 'single'`: Creates a single runtime chunk.
   - Which would handle loading of all chunks.
3. Changing the content in 'index.js' and running again re-builds dependencies too.
4. To emit 'node_modules' things as a separate bundle -> 'venders.js'.
   - We use 'cacheGroups'.
5. According to docs, updating 'index.js' should regenerate vendors again.
   Which is not the case with the version of webpack used in this repo.
   - Docs says we need to do `moduleIds: 'deterministic'`.
   - My best guess is, webpack's smarter now and 'moduleIds' doesn't make a difference.
