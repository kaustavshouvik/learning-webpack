### Code Splitting

1. Using multiple entry points will output multiple bundle files.
   1. Duplicate shared dep -> If FileA imports '\_' and FileB imports '\_', '\_' will be included in both outputs.
2. Using `optimization.splitChunks` resolves dependencies and outputs a separate bundle which is shared.
   1. Need to read more -> https://www.chrisclaxton.me.uk/chris-claxtons-blog/webpack-chunksplitting-deepdive.
   2. This optimization examines the dependencies and if a dep meets certain conditions it chooses
      to create a separate chunk for it.
      - For example, putting `optimization.splitChunks.minSize` to higher value
        will not generate a separate chunk for lodash dependency.
