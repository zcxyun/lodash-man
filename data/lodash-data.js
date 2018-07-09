var local_database = {
  Array: {
    '_.chunk': {
      description: '将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。',
      introduced: '3.0.0',
      params: [
        'array (Array): 需要处理的数组',
        '[size=1] (number) 每个数组区块的长度'
      ],
      returnValue: '(Array) 返回一个包含拆分区块的新数组（相当于一个二维数组）。',
      demo: `_.chunk(['a', 'b', 'c', 'd'], 2);
            // => [['a', 'b'], ['c', 'd']]

            _.chunk(['a', 'b', 'c', 'd'], 3);
            // => [['a', 'b', 'c'], ['d']]'`
    },
    '_.compact': {
      description: '创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。',
      introduced: '0.1.0',
      params: [ 'array(Array): 待处理的数组' ],
      returnValue: '(Array): 返回过滤掉假值的新数组。',
      demo: `_.compact([0, 1, false, 2, '', 3]);
            // => [1, 2, 3]`
    },
    '_.concat': {
      description: '创建一个新数组，将array与任何数组 或 值连接在一起。',
      introduced: '4.0.0',
      params: [
        'array (Array): 被连接的数组。',
        '[values] (...*): 连接的值。'
      ],
      returnValue: '(Array): 返回连接后的新数组。',
      demo: ` var array = [1];
              var other = _.concat(array, 2, [3], [[4]]);

              console.log(other);
              // => [1, 2, 3, [4]]

              console.log(array);
              // => [1]`
    },
    '_.difference': {
      description: '创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。',
      note: '注意: 不像 _.pullAll，这个方法会返回一个新数组。',
      introduced: '0.1.0',
      params: [
        'array (Array): 要检查的数组。',
        '[values] (...Array): 排除的值。'
      ],
      returnValue: '(Array): 返回一个过滤值后的新数组。',
      demo: `_.difference([3, 2, 1], [4, 2]);
            // => [3, 1]`
    },
    '_.differenceBy': {
      description: '这个方法类似_.difference ，除了它接受一个 iteratee（ 迭代器 ）， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（ 首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值 ）。',
      note: '注意: 不像 _.pullAllBy，这个方法会返回一个新数组。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要检查的数组。',
        '[values] (...Array): 排除的值。',
        '[iteratee=_.identity] (Array|Function|Object|string): iteratee 调用每个元素。'
      ],
      returnValue: '(Array): 返回一个过滤值后的新数组。',
      demo: `_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
            // => [3.1, 1.3]

            // The '_.property' iteratee shorthand.
            _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
            // => [{ 'x': 2 }]`
    },
    '_.differenceWith': {
      description: '这个方法类似_.difference ，除了它接受一个 comparator （比较器），它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。',
      note: '注意: 不像 _.pullAllWith, 这个方法会返回一个新数组。',
      introduced: '4.0.0',
      params:[
        'array (Array): 要检查的数组。',
        '[values] (...Array): 排除的值。',
        '[comparator] (Function): comparator 调用每个元素。'
      ],
      returnValue: '(Array): 返回一个过滤值后的新数组。',
      demo: ` var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

              _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
              // => [{ 'x': 2, 'y': 1 }]`
    },
    '_.drop': {
      description: '创建一个切片数组，去除array前面的n个元素。（n默认值为1。）',
      introduced: '0.5.0',
      params: [
        'array (Array): 要查询的数组。',
        '[n=1] (number): 要去除的元素个数。'
      ],
      returnValue: '(Array): 返回array剩余切片。',
      demo: `_.drop([1, 2, 3]);
            // => [2, 3]

            _.drop([1, 2, 3], 2);
            // => [3]

            _.drop([1, 2, 3], 5);
            // => []

            _.drop([1, 2, 3], 0);
            // => [1, 2, 3]`
    },
    '_.dropRight': {
      description: '创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）',
      introduced: '3.0.0',
      params: [
        'array (Array): 要查询的数组。',
        '[n=1] (number): 要去除的元素个数。'
      ],
      returnValue: '(Array): 返回array剩余切片。',
      demo: ` _.dropRight([1, 2, 3]);
              // => [1, 2]

              _.dropRight([1, 2, 3], 2);
              // => [1]

              _.dropRight([1, 2, 3], 5);
              // => []

              _.dropRight([1, 2, 3], 0);
              // => [1, 2, 3]`
    },
    '_.dropRightWhile': {
      description: '创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。',
      introduced: '3.0.0',
      params: [
        'array (Array): 要查询的数组。',
        '[predicate=_.identity] (Function): 这个函数会在每一次迭代调用。'
      ],
      returnValue: '(Array): 返回array剩余切片。',
      demo: `var users = [
                { 'user': 'barney',  'active': true },
                { 'user': 'fred',    'active': false },
                { 'user': 'pebbles', 'active': false }
              ];

              _.dropRightWhile(users, function(o) { return !o.active; });
              // => objects for ['barney']

              // The '_.matches' iteratee shorthand.
              _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
              // => objects for ['barney', 'fred']

              // The '_.matchesProperty' iteratee shorthand.
              _.dropRightWhile(users, ['active', false]);
              // => objects for ['barney']

              // The '_.property' iteratee shorthand.
              _.dropRightWhile(users, 'active');
              // => objects for ['barney', 'fred', 'pebbles']`
    },
    '_.dropWhile': {
      description: '创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分。predicate 会传入3个参数： (value, index, array)。',
      introduced: '3.0.0',
      params: [
        'array (Array): 要查询的数组。',
        '[predicate=_.identity] (Function): 这个函数会在每一次迭代调用。'
      ],
      returnValue: '(Array): 返回array剩余切片。',
      demo: `var users = [
                { 'user': 'barney',  'active': false },
                { 'user': 'fred',    'active': false },
                { 'user': 'pebbles', 'active': true }
              ];

              _.dropWhile(users, function(o) { return !o.active; });
              // => objects for ['pebbles']

              // The '_.matches' iteratee shorthand.
              _.dropWhile(users, { 'user': 'barney', 'active': false });
              // => objects for ['fred', 'pebbles']

              // The '_.matchesProperty' iteratee shorthand.
              _.dropWhile(users, ['active', false]);
              // => objects for ['pebbles']

              // The '_.property' iteratee shorthand.
              _.dropWhile(users, 'active');
              // => objects for ['barney', 'fred', 'pebbles']`
    },
    '_.fill': {
      description: '使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。',
      note: '注意：这个方法会改变 array（不是创建新数组）。',
      introduced: '3.2.0',
      params: [
        'array (Array): 要填充改变的数组。',
        'value (*): 填充给 array 的值。',
        '[start=0] (number): 开始位置（默认0）。',
        '[end=array.length] (number):结束位置（默认array.length）。'
      ],
      returnValue: '(Array): 返回 array。',
      demo: ` var array = [1, 2, 3];

              _.fill(array, 'a');
              console.log(array);
              // => ['a', 'a', 'a']

              _.fill(Array(3), 2);
              // => [2, 2, 2]

              _.fill([4, 6, 8, 10], '*', 1, 3);
              // => [4, '*', '*', 10]`
    },
    '_.findIndex': {
      description: '该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。',
      introduced: '1.1.0',
      params: [
        'array (Array): 要搜索的数组。',
        '[predicate=_.identity] (Array|Function|Object|string): 这个函数会在每一次迭代调用。',
        '[fromIndex=0] (number): The index to search from.'
      ],
      returnValue: '(number): 返回找到元素的 索引值（index），否则返回 -1。',
      demo: ` var users = [
                { 'user': 'barney',  'active': false },
                { 'user': 'fred',    'active': false },
                { 'user': 'pebbles', 'active': true }
              ];

              _.findIndex(users, function(o) { return o.user == 'barney'; });
              // => 0

              // The '_.matches' iteratee shorthand.
              _.findIndex(users, { 'user': 'fred', 'active': false });
              // => 1

              // The '_.matchesProperty' iteratee shorthand.
              _.findIndex(users, ['active', false]);
              // => 0

              // The '_.property' iteratee shorthand.
              _.findIndex(users, 'active');
              // => 2`
    },
    '_.findLastIndex': {
      description: '这个方式类似 _.findIndex， 区别是它是从右到左的迭代集合array中的元素。',
      introduced: '2.0.0',
      params: [
        'array (Array): 要搜索的数组。',
        '[predicate=_.identity] (Array|Function|Object|string): 这个函数会在每一次迭代调用。',
        '[fromIndex=array.length-1] (number): The index to search from.'
      ],
      returnValue: '(number): 返回找到元素的 索引值（index），否则返回 -1。',
      demo: ` var users = [
                { 'user': 'barney',  'active': true },
                { 'user': 'fred',    'active': false },
                { 'user': 'pebbles', 'active': false }
              ];

              _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
              // => 2

              // The '_.matches' iteratee shorthand.
              _.findLastIndex(users, { 'user': 'barney', 'active': true });
              // => 0

              // The '_.matchesProperty' iteratee shorthand.
              _.findLastIndex(users, ['active', false]);
              // => 2

              // The '_.property' iteratee shorthand.
              _.findLastIndex(users, 'active');
              // => 0`
    },
    '_.flatten': {
      description: '减少一级array嵌套深度。',
      introduced: '0.1.0',
      params: [
        'array (Array): 需要减少嵌套层级的数组。'
      ],
      returnValue: '(Array): 返回减少嵌套层级后的新数组。',
      demo: ` _.flatten([1, [2, [3, [4]], 5]]);
              // => [1, 2, [3, [4]], 5]`
    },
    '_.flattenDeep': {
      description: '将array递归为一维数组。',
      introduced: '3.0.0',
      params: [
        'array (Array): 需要处理的数组。'
      ],
      returnValue: '(Array): 返回一个的新一维数组。',
      demo: ` _.flattenDeep([1, [2, [3, [4]], 5]]);
              // => [1, 2, 3, 4, 5]`
    },
    '_.flattenDepth': {
      description: '根据 depth 递归减少 array 的嵌套层级',
      introduced: '4.4.0',
      params: [
        'array (Array): 需要减少嵌套层级的数组。',
        '[depth=1] (number):最多减少的嵌套层级数。'
      ],
      returnValue: '(Array): 返回减少嵌套层级后的新数组。',
      demo: ` var array = [1, [2, [3, [4]], 5]];

              _.flattenDepth(array, 1);
              // => [1, 2, [3, [4]], 5]

              _.flattenDepth(array, 2);
              // => [1, 2, 3, [4], 5]`
    },
    '_.fromPairs': {
      description: '与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。',
      introduced: '4.0.0',
      params: [
        'pairs (Array): 键值对pairs。'
      ],
      returnValue: '(Object): 返回一个新对象。',
      demo: ` _.fromPairs([['fred', 30], ['barney', 40]]);
              // => { 'fred': 30, 'barney': 40 }`
    },
    '_.head': {
      description: '获取数组 array 的第一个元素。',
      introduced: '0.1.0',
      aliases: '_.first',
      params: [
        'array (Array): 要查询的数组。'
      ],
      returnValue: '(*): 返回数组 array的第一个元素。',
      demo: ` _.head([1, 2, 3]);
              // => 1

              _.head([]);
              // => undefined`
    },
    '_.indexOf': {
      description: '使用 SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。',
      introduced: '0.1.0',
      params: [
        'array (Array): 需要查找的数组。',
        'value (*): 需要查找的值。',
        '[fromIndex=0] (number): 开始查询的位置。'
      ],
      returnValue: '(number): 返回 值value在数组中的索引位置, 没有找到为返回-1。',
      demo: ` _.indexOf([1, 2, 1, 2], 2);
              // => 1

              // Search from the 'fromIndex'.
              _.indexOf([1, 2, 1, 2], 2, 2);
              // => 3`
    },
    '_.initial': {
      description: '获取数组array中除了最后一个元素之外的所有元素（去除数组array中的最后一个元素）。',
      introduced: '0.1.0',
      params: [
        'array (Array): 要查询的数组。'
      ],
      returnValue: '(Array): 返回截取后的数组array。',
      demo: ` _.initial([1, 2, 3]);
              // => [1, 2]`
    },
    '_.intersection': {
      description: '创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用 SameValueZero进行相等性比较。（愚人码头注：可以理解为给定数组的交集）',
      introduced: '0.1.0',
      params: [
        '[arrays] (...Array): 待检查的数组。'
      ],
      returnValue: '(Array): 返回一个包含所有传入数组交集元素的新数组。',
      demo: ` _.intersection([2, 1], [4, 2], [1, 2]);
              // => [2]`
    },
    '_.intersectionBy': {
      description: '这个方法类似 _.intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择。iteratee 会传入一个参数：(value)。',
      introduced: '4.0.0',
      params: [
        '[arrays] (...Array): 待检查的数组。',
        '[iteratee=_.identity] (Array|Function|Object|string): iteratee（迭代器）调用每个元素。'
      ],
      returnValue: '(Array): 返回一个包含所有传入数组交集元素的新数组。',
      demo: ` _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
              // => [2.1]

              // The '_.property' iteratee shorthand.
              _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
              // => [{ 'x': 1 }]`
    },
    '_.intersectionWith': {
      description: '这个方法类似 _.intersection，区别是它接受一个 comparator 调用比较arrays中的元素。结果值是从第一数组中选择。comparator 会传入两个参数：(arrVal, othVal)。',
      introduced: '4.0.0',
      params: [
        '[arrays] (...Array): 待检查的数组。',
        '[comparator] (Function): comparator（比较器）调用每个元素。'
      ],
      returnValue: '(Array): 返回一个包含所有传入数组交集元素的新数组。',
      demo: ` var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
              var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

              _.intersectionWith(objects, others, _.isEqual);
              // => [{ 'x': 1, 'y': 2 }]`
    },
    '_.join': {
      description: '将 array 中的所有元素转换为由 separator 分隔的字符串。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要转换的数组。',
        '[separator=','] (string): 分隔元素。'
      ],
      returnValue: '(string): 返回连接字符串。',
      demo: ` _.join(['a', 'b', 'c'], '~');
              // => 'a~b~c'`
    },
    '_.last': {
      description: '获取array中的最后一个元素。',
      introduced: '0.1.0',
      params: [
        'array (Array): 要检索的数组。'
      ],
      returnValue: '返回array中的最后一个元素',
      demo: ` _.last([1, 2, 3]);
              // => 3`
    },
    '_.lastIndexOf': {
      description: '这个方法类似 _.indexOf ，区别是它是从右到左遍历array的元素。',
      introduced: '0.1.0',
      params: [
        'array (Array): 要搜索的数组。',
        'value (*): 要搜索的值。',
        '[fromIndex=array.length-1] (number): 开始搜索的索引值。'
      ],
      returnValue: '(number): 返回匹配值的索引值，否则返回 -1。',
      demo: ` _.lastIndexOf([1, 2, 1, 2], 2);
              // => 3

              // Search from the 'fromIndex'.
              _.lastIndexOf([1, 2, 1, 2], 2, 2);
              // => 1`
    },
    '_.nth': {
      description: '获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。',
      introduced: '4.11.0',
      params: [
        'array (Array): 要查询的数组。',
        '[n=0] (number): 要返回元素的索引值。'
      ],
      returnValue: '获取array数组的第n个元素。',
      demo: ` var array = ['a', 'b', 'c', 'd'];

              _.nth(array, 1);
              // => 'b'

              _.nth(array, -2);
              // => 'c';`
    },
    '_.pull': {
      description: '移除数组array中所有和给定值相等的元素，使用 SameValueZero 进行全等比较。',
      note: '注意： 和 _.without 方法不同，这个方法会改变数组。使用 _.remove 从一个数组中移除元素。',
      introduced: '2.0.0',
      params: [
        'array (Array): 要修改的数组。',
        '[values] (...*): 要删除的值。'
      ],
      returnValue: '(Array): 返回 array.',
      demo: ` var array = [1, 2, 3, 1, 2, 3];

              _.pull(array, 2, 3);
              console.log(array);
              // => [1, 1]`
    },
    '_.pullAll': {
      description: '这个方法类似_.pull，区别是这个方法接收一个要移除值的数组。',
      note: '注意：不同于 _.difference, 这个方法会改变数组 array。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要修改的数组。',
        'values (Array): 要移除值的数组。'
      ],
      returnValue: '(Array): 返回 array。',
      demo: ` var array = [1, 2, 3, 1, 2, 3];

              _.pullAll(array, [2, 3]);
              console.log(array);
              // => [1, 1]`
    },
    '_.pullAllBy': {
      description: '这个方法类似于_.pullAll ，区别是这个方法接受一个 iteratee（迭代函数） 调用 array 和 values的每个值以产生一个值，通过产生的值进行了比较。iteratee 会传入一个参数： (value)。',
      note: '注意：不同于 _.differenceBy, 这个方法会改变数组 array。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要修改的数组。',
        'values (Array): 要移除值的数组。',
        '[iteratee=_.identity] (Array|Function|Object|string): iteratee（迭代器）调用每个元素。'
      ],
      returnValue: '(Array): 返回 array.',
      demo: ` var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

              _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
              console.log(array);
              // => [{ 'x': 2 }]`
    },
    '_.pullAllWith': {
      description: '这个方法类似于 _.pullAll，区别是这个方法接受 comparator 调用array中的元素和values比较。comparator 会传入两个参数：(arrVal, othVal)。',
      note: '注意: 和 _.differenceWith 不同, 这个方法会改变数组 array。',
      introduced: '4.6.0',
      params: [
        'array (Array): 要修改的数组。',
        'values (Array): 要移除值的数组。',
        '[comparator] (Function): comparator（比较器）调用每个元素。'
      ],
      returnValue: '(Array): 返回 array。',
      demo: ` var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];

              _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
              console.log(array);
              // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]`
    },
    '_.pullAt': {
      description: '根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组。',
      note: '注意：和 _.at不同, 这个方法会改变数组 array。',
      introduced: '3.0.0',
      params: [
        'array (Array): 要修改的数组。',
        '[indexes] (...(number|number[])): 要移除元素的索引。'
      ],
      returnValue: '(Array): 返回移除元素组成的新数组。',
      demo: ` var array = [5, 10, 15, 20];
              var evens = _.pullAt(array, 1, 3);

              console.log(array);
              // => [5, 15]

              console.log(evens);
              // => [10, 20]`
    },
    '_.remove': {
      description: '移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组。predicate（断言） 会传入3个参数： (value, index, array)。',
      note: '注意：和 _.filter不同, 这个方法会改变数组 array。使用_.pull来根据提供的value值从数组中移除元素。',
      introduced: '2.0.0',
      params: [
        'array (Array): 要修改的数组。',
        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。'
      ],
      returnValue: '(Array): 返回移除元素组成的新数组。',
      demo: ` var array = [1, 2, 3, 4];
              var evens = _.remove(array, function(n) {
                return n % 2 == 0;
              });

              console.log(array);
              // => [1, 3]

              console.log(evens);
              // => [2, 4]`
    },
    '_.reverse': {
      description: '反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。',
      note: '注意：这个方法会改变原数组 array，基于 Array#reverse.',
      introduced: '4.0.0',
      params: [
        'array (Array): 要修改的数组。'
      ],
      returnValue: '(Array): 返回 array.',
      demo: ` var array = [1, 2, 3];

              _.reverse(array);
              // => [3, 2, 1]

              console.log(array);
              // => [3, 2, 1]`
    },
    '_.slice': {
      description: '裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置。',
      note: '注意：这个方法用于代替 Array#slice 来确保数组正确返回。',
      introduced: '3.0.0',
      params: [
        'array (Array): 要裁剪数组。',
        '[start=0] (number): 开始位置。',
        '[end=array.length] (number): 结束位置。'
      ],
      returnValue: '(Array): 返回 数组array 裁剪部分的新数组。',
      demo: ''
    },
    '_.sortedIndex': {
      description: '使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序。',
      introduced: '0.1.0',
      params: [
        'array (Array): 要检查的排序数组。',
        'value (*): 要评估的值。'
      ],
      returnValue: '(number): 返回 value值 应该在数组array中插入的索引位置 index。',
      demo: ` _.sortedIndex([30, 50], 40);
              // => 1`
    },
    '_.sortedIndexBy': {
      description: '这个方法类似 _.sortedIndex ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value)。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要检查的排序数组。',
        'value (*): 要评估的值。',
        '[iteratee=_.identity] (Array|Function|Object|string): 迭代函数，调用每个元素。'
      ],
      returnValue: '(number): 返回 value值 应该在数组array中插入的索引位置 index。',
      demo: ` var objects = [{ 'x': 4 }, { 'x': 5 }];

              _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
              // => 0

              // The '_.property' iteratee shorthand.
              _.sortedIndexBy(objects, { 'x': 4 }, 'x');
              // => 0`
    },
    '_.sortedIndexOf': {
      description: '这个方法类似 _.indexOf，除了它是在已经排序的数组array上执行二进制检索。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要搜索的数组。',
        'value (*): 搜索的值。'
      ],
      returnValue: '(number): 返回匹配值的索引位置，否则返回 -1。',
      demo: ` _.sortedIndexOf([4, 5, 5, 5, 6], 5);
              // => 1`
    },
    '_.sortedLastIndex': {
      description: '此方法类似于_.sortedIndex，除了 它返回 value值 在 array 中尽可能大的索引位置（index）。',
      introduced: '3.0.0',
      params: [
        'array (Array): 要检查的排序数组。',
        'value (*): 要评估的值。'
      ],
      returnValue: '(number): 返回 value值 应该在数组array中插入的索引位置 index。',
      demo: ` _.sortedLastIndex([4, 5, 5, 5, 6], 5);
              // => 4`
    },
    '_.sortedLastIndexBy': {
      description: '这个方法类似 _.sortedLastIndex ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value)。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要检查的排序数组。',
        'value (*): 要评估的值。',
        '[iteratee=_.identity] (Array|Function|Object|string): 迭代函数，调用每个元素.'
      ],
      returnValue: '(number): 返回 value值 应该在数组array中插入的索引位置 index。',
      demo: ` var objects = [{ 'x': 4 }, { 'x': 5 }];

              _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
              // => 1

              // The '_.property' iteratee shorthand.
              _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
              // => 1`
    },
    '_.sortedLastIndexOf': {
      description: '这个方法类似 _.lastIndexOf，除了它是在已经排序的数组array上执行二进制检索。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要搜索的数组。',
        'value (*): 搜索的值。'
      ],
      returnValue: '(number): 返回匹配值的索引位置，否则返回 -1。',
      demo: ` _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
              // => 3`
    },
    '_.sortedUniq': {
      description: '这个方法类似 _.uniq，除了它会优化排序数组。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要检查的数组。'
      ],
      returnValue: '(Array): 返回一个新的不重复的数组。',
      demo: ` _.sortedUniq([1, 1, 2]);
              // => [1, 2]`
    },
    '_.sortedUniqBy': {
      description: '这个方法类似 _.uniqBy，除了它会优化排序数组。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要检查的数组。',
        '[iteratee] (Function): 迭代函数，调用每个元素。'
      ],
      returnValue: '(Array): 返回一个新的不重复的数组。',
      demo: ` _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
              // => [1.1, 2.3]`
    },
    '_.tail': {
      description: '获取除了array数组第一个元素以外的全部元素。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要检索的数组。'
      ],
      returnValue: '(Array): 返回 array 数组的切片（除了array数组第一个元素以外的全部元素）。',
      demo: ` _.tail([1, 2, 3]);
              // => [2, 3]`
    },
    '_.take': {
      description: '创建一个数组切片，从array数组的起始元素开始提取n个元素。',
      introduced: '0.1.0',
      params: [
        'array (Array): 要检索的数组。',
        '[n=1] (number): 要提取的元素个数。'
      ],
      returnValue: '(Array): 返回 array 数组的切片（从起始元素开始n个元素）。',
      demo: ` _.take([1, 2, 3]);
              // => [1]

              _.take([1, 2, 3], 2);
              // => [1, 2]

              _.take([1, 2, 3], 5);
              // => [1, 2, 3]

              _.take([1, 2, 3], 0);
              // => []`
    },
    '_.takeRight': {
      description: '创建一个数组切片，从array数组的最后一个元素开始提取n个元素。',
      introduced: '3.0.0',
      params: [
        'array (Array): 要检索的数组。',
        '[n=1] (number): 要提取的元素个数。'
      ],
      returnValue: '(Array): 返回 array 数组的切片（从结尾元素开始n个元素）。',
      demo: ` _.takeRight([1, 2, 3]);
              // => [3]

              _.takeRight([1, 2, 3], 2);
              // => [2, 3]

              _.takeRight([1, 2, 3], 5);
              // => [1, 2, 3]

              _.takeRight([1, 2, 3], 0);
              // => []`
    },
    '_.takeRightWhile': {
      description: '从array数组的最后一个元素开始提取元素，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。',
      introduced: '3.0.0',
      params: [
        'array (Array): 要检索的数组。',
        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。'
      ],
      returnValue: '(Array): 返回 array 数组的切片。',
      demo: ` var users = [
                { 'user': 'barney',  'active': true },
                { 'user': 'fred',    'active': false },
                { 'user': 'pebbles', 'active': false }
              ];

              _.takeRightWhile(users, function(o) { return !o.active; });
              // => objects for ['fred', 'pebbles']

              // The '_.matches' iteratee shorthand.
              _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
              // => objects for ['pebbles']

              // The '_.matchesProperty' iteratee shorthand.
              _.takeRightWhile(users, ['active', false]);
              // => objects for ['fred', 'pebbles']

              // The '_.property' iteratee shorthand.
              _.takeRightWhile(users, 'active');
              // => []`
    },
    '_.takeWhile': {
      description: '从array数组的起始元素开始提取元素，，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。',
      introduced: '3.0.0',
      params: [
        'array (Array): 需要处理的数组',
        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。'
      ],
      returnValue: '(Array): 返回 array 数组的切片。',
      demo: ` var users = [
                { 'user': 'barney',  'active': false },
                { 'user': 'fred',    'active': false},
                { 'user': 'pebbles', 'active': true }
              ];

              _.takeWhile(users, function(o) { return !o.active; });
              // => objects for ['barney', 'fred']

              // The '_.matches' iteratee shorthand.
              _.takeWhile(users, { 'user': 'barney', 'active': false });
              // => objects for ['barney']

              // The '_.matchesProperty' iteratee shorthand.
              _.takeWhile(users, ['active', false]);
              // => objects for ['barney', 'fred']

              // The '_.property' iteratee shorthand.
              _.takeWhile(users, 'active');
              // => []`
    },
    '_.union': {
      description: '创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用SameValueZero做等值比较。（愚人码头注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）',
      introduced: '0.1.0',
      params: [
        '[arrays] (...Array): 要检查的数组。'
      ],
      returnValue: '(Array): 返回一个新的联合数组。',
      demo: ` _.union([2], [1, 2]);
              // => [2, 1]`
    },
    '_.unionBy': {
      description: '这个方法类似 _.union ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 会传入一个参数：(value)。',
      introduced: '4.0.0',
      params: [
        '[arrays] (...Array): 要检查的数组。',
        '[iteratee=_.identity] (Array|Function|Object|string): 迭代函数，调用每个元素。'
      ],
      returnValue: '(Array): 返回一个新的联合数组。',
      demo: ` _.unionBy([2.1], [1.2, 2.3], Math.floor);
              // => [2.1, 1.2]

              // The '_.property' iteratee shorthand.
              _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
              // => [{ 'x': 1 }, { 'x': 2 }]`
    },
    '_.unionWith': {
      description: '这个方法类似 _.union， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。',
      introduced: '4.0.0',
      params: [
        '[arrays] (...Array): 要检查的数组。',
        '[comparator] (Function): 比较函数，调用每个元素。'
      ],
      returnValue: '(Array): 返回一个新的联合数组。',
      demo: ` var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
              var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

              _.unionWith(objects, others, _.isEqual);
              // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]`
    },
    '_.uniq': {
      description: '创建一个去重后的array数组副本。使用了 SameValueZero 做等值比较。只有第一次出现的元素才会被保留。',
      introduced: '0.1.0',
      params: [
        'array (Array): 要检查的数组。'
      ],
      returnValue: '(Array): 返回新的去重后的数组。',
      demo: ` _.uniq([2, 1, 2]);
              // => [2, 1]`
    },
    '_.uniqBy': {
      description: '这个方法类似 _.uniq ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 调用时会传入一个参数：(value)。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要检查的数组。',
        '[iteratee=_.identity] (Array|Function|Object|string): 迭代函数，调用每个元素。'
      ],
      returnValue: '(Array): 返回新的去重后的数组。',
      demo: ` _.uniqBy([2.1, 1.2, 2.3], Math.floor);
              // => [2.1, 1.2]

              // The '_.property' iteratee shorthand.
              _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
              // => [{ 'x': 1 }, { 'x': 2 }]`
    },
    '_.uniqWith': {
      description: '这个方法类似 _.uniq， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要检查的数组。',
        '[comparator] (Function): 比较函数，调用每个元素。'
      ],
      returnValue: '(Array): 返回新的去重后的数组。',
      demo: ` var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];

              _.uniqWith(objects, _.isEqual);
              // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]`
    },
    '_.unzip': {
      description: '这个方法类似于_.zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。（返回数组的第一个元素包含所有的输入数组的第一元素，第一个元素包含了所有的输入数组的第二元素，依此类推。）',
      introduced: '1.2.0',
      params: [
        'array (Array): 要处理的分组元素数组。'
      ],
      returnValue: '(Array): 返回重组元素的新数组。',
      demo: ` var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
              // => [['fred', 30, true], ['barney', 40, false]]

              _.unzip(zipped);
              // => [['fred', 'barney'], [30, 40], [true, false]]`
    },
    '_.unzipWith': {
      description: '此方法类似于_.unzip，除了它接受一个iteratee指定重组值应该如何被组合。iteratee 调用时会传入每个分组的值： (...group)。',
      introduced: '3.8.0',
      params: [
        'array (Array): 要处理的分组元素数组。',
        '[iteratee=_.identity] (Function): 这个函数用来组合重组的值。'
      ],
      returnValue: '(Array): 返回重组元素的新数组。',
      demo: ` var zipped = _.zip([1, 2], [10, 20], [100, 200]);
              // => [[1, 10, 100], [2, 20, 200]]

              _.unzipWith(zipped, _.add);
              // => [3, 30, 300]`
    },
    '_.without': {
      description: '创建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero做相等比较。',
      note: '注意: 不像 _.pull, 这个方法会返回一个新数组。',
      introduced: '0.1.0',
      params: [
        'array (Array): 要检查的数组。',
        '[values] (...*): 要剔除的值。'
      ],
      returnValue: '(Array): 返回过滤值后的新数组。',
      demo: ` _.without([2, 1, 2, 3], 1, 2);
              // => [3]`
    },
    '_.xor': {
      description: '创建一个给定数组唯一值的数组，使用symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。',
      introduced: '2.4.0',
      params: [
        '[arrays] (...Array): 要检查的数组。'
      ],
      returnValue: '(Array): 返回过滤值后的新数组。',
      demo: ` _.xor([2, 1], [2, 3]);
              // => [1, 3]`
    },
    '_.xorBy': {
      description: '这个方法类似 _.xor ，除了它接受 iteratee（迭代器），这个迭代器 调用每一个 arrays（数组）的每一个值，以生成比较的新值。iteratee 调用一个参数： (value).',
      introduced: '4.0.0',
      params: [
        '[arrays] (...Array): 要检查的数组。',
        '[iteratee=_.identity] (Array|Function|Object|string): 调用每一个元素的迭代函数。'
      ],
      returnValue: '(Array): 返回过滤值后的新数组。',
      demo: ` _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
              // => [1.2, 3.4]

              // The '_.property' iteratee shorthand.
              _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
              // => [{ 'x': 2 }]`
    },
    '_.xorWith': {
      description: '该方法是像 _.xor，除了它接受一个 comparator ，以调用比较数组的元素。 comparator 调用2个参数：(arrVal, othVal).',
      introduced: '4.0.0',
      params: [
        '[arrays] (...Array): 要检查的数组。',
        '[comparator] (Function): 调用每一个元素的比较函数。'
      ],
      returnValue: '(Array): 返回过滤值后的新数组。',
      demo: ` var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
              var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

              _.xorWith(objects, others, _.isEqual);
              // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]`
    },
    '_.zip': {
      description: '创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。',
      introduced: '0.1.0',
      params: [
        '[arrays] (...Array): 要处理的数组。'
      ],
      returnValue: '(Array): 返回分组元素的新数组。',
      demo: ` _.zip(['fred', 'barney'], [30, 40], [true, false]);
              // => [['fred', 30, true], ['barney', 40, false]]`
    },
    '_.zipObject': {
      description: '这个方法类似 _.fromPairs，除了它接受2个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。',
      introduced: '0.4.0',
      params: [
        '[props=[]] (Array): 属性标识符（属性名）',
        '[values=[]] (Array): 属性值。'
      ],
      returnValue: '(Object): 返回新对象。',
      demo: ` _.zipObject(['a', 'b'], [1, 2]);
              // => { 'a': 1, 'b': 2 }`
    },
    '_.zipObjectDeep': {
      description: '这个方法类似 _.zipObject，除了它支持属性路径。',
      introduced: '4.1.0',
      params: [
        '[props=[]] (Array): 属性标识符（属性名）。',
        '[values=[]] (Array): 属性值。'
      ],
      returnValue: '(Object): 返回新对象。',
      demo: ` _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
              // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }`
    },
    '_.zipWith': {
      description: '这个方法类似于_.zip，不同之处在于它接受一个 iteratee（迭代函数），来 指定分组的值应该如何被组合。 该iteratee调用每个组的元素： (...group).',
      introduced: '3.8.0',
      params: [
        '[arrays] (...Array): 要处理的数组。',
        '[iteratee=_.identity] (Function): 函数用来组合分组的值。'
      ],
      returnValue: '(Array): 返回分组元素的新数组。',
      demo: ` _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
                return a + b + c;
              });
              // => [111, 222]`
    }
  },
  Collection: {
    '_.countBy': {
      description: '创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理collection中每个元素后返回的结果，每个key（键）对应的值是 iteratee（迭代函数）返回该key（键）的次数（ 迭代次数 ）。 iteratee 调用一个参数：(value)。',
      introduced: '0.5.0',
      params: [
        'collection (Array|Object): 一个用来迭代的集合。',
        '[iteratee=_.identity] (Array|Function|Object|string): 一个迭代函数，用来转换key（键）。'
      ],
      returnValue: '(Object): 返回一个组成集合对象。',
      demo: ` _.countBy([6.1, 4.2, 6.3], Math.floor);
              // => { '4': 1, '6': 2 }

              // The '_.property' iteratee shorthand.
              _.countBy(['one', 'two', 'three'], 'length');
              // => { '3': 2, '5': 1 }`
    },
    '_.every': {
      description: '通过 predicate（断言函数） 检查 collection（集合）中的 所有 元素是否都返回真值。一旦 predicate（断言函数） 返回假值，迭代就马上停止。predicate（断言函数）调用三个参数： (value, index|key, collection)。',
      note: '注意: 这个方法对于对于空集合返回 true，因为空集合的任何元素都是 true 。',
      introduced: '0.1.0',
      params: [
        'collection (Array|Object): 一个用来迭代的集合。',
        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。'
      ],
      returnValue: '(boolean): 如果所有元素经 predicate（断言函数） 检查后都都返回真值，那么就返回true，否则返回 false 。',
      demo: ` _.every([true, 1, null, 'yes'], Boolean);
              // => false

              var users = [
                { 'user': 'barney', 'age': 36, 'active': false },
                { 'user': 'fred',   'age': 40, 'active': false }
              ];

              // The '_.matches' iteratee shorthand.
              _.every(users, { 'user': 'barney', 'active': false });
              // => false

              // The '_.matchesProperty' iteratee shorthand.
              _.every(users, ['active', false]);
              // => true

              // The '_.property' iteratee shorthand.
              _.every(users, 'active');
              // => false`
    },
    '_.filter': {
      description: '遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。 predicate（断言函数）调用三个参数：(value, index|key, collection)。',
      note: '注意：不像 _.remove 这个方法返回一个新的数组',
      introduced: '0.1.0',
      params: [
        'collection (Array|Object): 一个用来迭代的集合。',
        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。'
      ],
      returnValue: '(Array): 返回一个新的过滤后的数组。',
      demo: ` var users = [
                { 'user': 'barney', 'age': 36, 'active': true },
                { 'user': 'fred',   'age': 40, 'active': false }
              ];

              _.filter(users, function(o) { return !o.active; });
              // => objects for ['fred']

              // The '_.matches' iteratee shorthand.
              _.filter(users, { 'age': 36, 'active': true });
              // => objects for ['barney']

              // The '_.matchesProperty' iteratee shorthand.
              _.filter(users, ['active', false]);
              // => objects for ['fred']

              // The '_.property' iteratee shorthand.
              _.filter(users, 'active');
              // => objects for ['barney']`
    },
    '_.find': {
      description: '遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素。predicate（断言函数）调用3个参数： (value, index|key, collection)。',
      introduced: '0.1.0',
      params: [
        'collection (Array|Object): 一个用来迭代的集合。',
        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
        '[fromIndex=0] (number): 开始搜索的索引位置。'
      ],
      returnValue: '(*): 返回匹配元素，否则返回 undefined。',
      demo: ` var users = [
                { 'user': 'barney',  'age': 36, 'active': true },
                { 'user': 'fred',    'age': 40, 'active': false },
                { 'user': 'pebbles', 'age': 1,  'active': true }
              ];

              _.find(users, function(o) { return o.age < 40; });
              // => object for 'barney'

              // The '_.matches' iteratee shorthand.
              _.find(users, { 'age': 1, 'active': true });
              // => object for 'pebbles'

              // The '_.matchesProperty' iteratee shorthand.
              _.find(users, ['active', false]);
              // => object for 'fred'

              // The '_.property' iteratee shorthand.
              _.find(users, 'active');
              // => object for 'barney'`
    },
    '_.findLast': {
      description: '这个方法类似_.find ，不同之处在于，_.findLast是从右至左遍历collection （集合）元素的。',
      introduced: '2.0.0',
      params: [
        'collection (Array|Object): 一个用来迭代的集合。',
        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
        '[fromIndex=collection.length-1] (number): 开始搜索的索引位置。'
      ],
      returnValue: '(*): 返回匹配元素，否则返回 undefined。',
      demo: ` _.findLast([1, 2, 3, 4], function(n) {
                return n % 2 == 1;
              });
              // => 3`
    },
    '_.flatMap': {
      description: '创建一个扁平化（同阶数组）的数组，这个数组的值来自collection（集合）中的每一个值经过 iteratee（迭代函数） 处理后返回的结果，并且扁平化合并。 iteratee 调用三个参数： (value, index|key, collection)。',
      introduced: '4.0.0',
      params: [
        'collection (Array|Object): 一个用来迭代遍历的集合。',
        '[iteratee=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。'
      ],
      returnValue: '(Array): 返回新扁平化数组。',
      demo: ` function duplicate(n) {
                return [n, n];
              }

              _.flatMap([1, 2], duplicate);
              // => [1, 1, 2, 2]`
    },
    '_.flatMapDeep': {
      description: '这个方法类似 _.flatMap 不同之处在于，_.flatMapDeep 会继续扁平化递归映射的结果。',
      introduced: '4.7.0',
      params: [
        'collection (Array|Object): 一个用来迭代的集合。',
        '[iteratee=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。'
      ],
      returnValue: '(Array): 返回新扁平化数组。',
      demo: ` function duplicate(n) {
                return [[[n, n]]];
              }

              _.flatMapDeep([1, 2], duplicate);
              // => [1, 1, 2, 2]`
    },
    '_.flatMapDepth': {
      description: '该方法类似_.flatMap，不同之处在于，_.flatMapDepth 会根据指定的 depth（递归深度）继续扁平化递归映射结果。',
      introduced: '4.7.0',
      params: [
        'collection (Array|Object): 一个用来迭代的集合。',
        '[iteratee=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。',
        '[depth=1] (number): 最大递归深度。'
      ],
      returnValue: '(Array): 返回新扁平化数组。',
      demo: ` function duplicate(n) {
                return [[[n, n]]];
              }

              _.flatMapDepth([1, 2], duplicate, 2);
              // => [[1, 1], [2, 2]]`
    },
    '_.forEach': {
      description: '调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用3个参数： (value, index|key, collection)。 如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。',
      note: '注意: 与其他"集合"方法一样，类似于数组，对象的 "length" 属性也会被遍历。想避免这种情况，可以用 _.forIn 或者 _.forOwn 代替。',
      introduced: '0.1.0',
      aliases: '_.each',
      params: [
        'collection (Array|Object): 一个用来迭代的集合。',
        '[iteratee=_.identity] (Function): 每次迭代调用的函数。'
      ],
      returnValue: '(*): 返回集合 collection。',
      demo: ` _([1, 2]).forEach(function(value) {
                console.log(value);
              });
              // => Logs '1' then '2'.

              _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
                console.log(key);
              });
              // => Logs 'a' then 'b' (iteration order is not guaranteed).`
    },
    '_.forEachRight': {
      description: '这个方法类似 _.forEach，不同之处在于，_.forEachRight 是从右到左遍历集合中每一个元素的。',
      introduced: '2.0.0',
      aliases: '_.eachRight',
      params: [
        'collection (Array|Object): 一个用来迭代的集合。',
        '[iteratee=_.identity] (Function): 每次迭代调用的函数。'
      ],
      returnValue: '(*): 返回集合 collection。',
      demo: ` _.forEachRight([1, 2], function(value) {
                console.log(value);
              });
              // => Logs '2' then '1'.`
    },
    '_.groupBy': {
      description: '创建一个对象，key 是 iteratee 遍历 collection(集合) 中的每个元素返回的结果。 分组值的顺序是由他们出现在 collection(集合) 中的顺序确定的。每个键对应的值负责生成 key 的元素组成的数组。iteratee 调用 1 个参数： (value)。',
      introduced: '0.1.0',
      params: [
        'collection (Array|Object): 一个用来迭代的集合。',
        '[iteratee=_.identity] (Array|Function|Object|string): 这个迭代函数用来转换key。'
      ],
      returnValue: '(Object): 返回一个组成聚合的对象。',
      demo: ` _.groupBy([6.1, 4.2, 6.3], Math.floor);
              // => { '4': [4.2], '6': [6.1, 6.3] }

              // The '_.property' iteratee shorthand.
              _.groupBy(['one', 'two', 'three'], 'length');
              // => { '3': ['one', 'two'], '5': ['three'] }`
    },
    '_.includes': {
      description: '检查 value(值) 是否在 collection(集合) 中。如果 collection(集合)是一个字符串，那么检查 value（值，子字符串） 是否在字符串中， 否则使用 SameValueZero 做等值比较。 如果指定 fromIndex 是负数，那么从 collection(集合) 的结尾开始检索。',
      introduced: '0.1.0',
      params: [
        'collection (Array|Object|string): 要检索的集合。',
        'value (*): 要检索的值。',
        '[fromIndex=0] (number): 要检索的 索引位置。'
      ],
      returnValue: '(boolean): 如果找到 value 返回 true， 否则返回 false。',
      demo: ` _.includes([1, 2, 3], 1);
              // => true

              _.includes([1, 2, 3], 1, 2);
              // => false

              _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
              // => true

              _.includes('pebbles', 'eb');
              // => true`
    },
    '_.invokeMap': {
      description: '调用path（路径）上的方法处理 collection(集合)中的每个元素，返回一个数组，包含每次调用方法得到的结果。任何附加的参数提供给每个被调用的方法。如果methodName（方法名）是一个函数，每次调用函数时，内部的 this 指向集合中的每个元素。',
      introduced: '4.0.0',
      params: [
        'collection (Array|Object): 用来迭代的集合。',
        'path (Array|Function|string): 用来调用方法的路径 或 者每次迭代调用的函数。',
        '[args] (...*): 调用每个方法的参数。'
      ],
      returnValue: '(Array): 返回的结果数组。',
      demo: ` _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
              // => [[1, 5, 7], [1, 2, 3]]

              _.invokeMap([123, 456], String.prototype.split, '');
              // => [['1', '2', '3'], ['4', '5', '6']]`
    },
    '_.keyBy': {
      description: '创建一个对象组成， key（键） 是 collection（集合）中的每个元素经过 iteratee（迭代函数） 处理后返回的结果。 每个 key（键）对应的值是生成key（键）的最后一个元素。iteratee（迭代函数）调用1个参数：(value)。',
      introduced: '4.0.0',
      params: [
        'collection (Array|Object): 用来迭代的集合。',
        '[iteratee=_.identity] (Array|Function|Object|string): 这个迭代函数用来转换key。'
      ],
      returnValue: '(Object): 返回一个组成聚合的对象。',
      demo: ` var array = [
                { 'dir': 'left', 'code': 97 },
                { 'dir': 'right', 'code': 100 }
              ];

              _.keyBy(array, function(o) {
                return String.fromCharCode(o.code);
              });
              // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

              _.keyBy(array, 'dir');
              // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }`
    },
    '_.map': {
      description: `创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。

                    iteratee（迭代函数）调用3个参数： (value, index | key, collection).

                    lodash 中有许多方法是防止作为其他方法的迭代函数（即不能作为iteratee参数传递给其他方法），例如： _.every, _.filter, _.map, _.mapValues, _.reject, 和 _.some。

                    受保护的方法有（即这些方法不能使用_.every, _.filter, _.map, _.mapValues, _.reject, 和 _.some作为 iteratee 迭代函数参数） ：
                    ary, chunk, curry, curryRight, drop, dropRight, every, fill, invert, parseInt, random, range, rangeRight, repeat, sampleSize, slice, some, sortBy, split, take, takeRight, template, trim, trimEnd, trimStart, and words`,
      introduced: '0.1.0',
      params: [
        'collection (Array|Object): 用来迭代的集合。',
        '[iteratee=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。'
      ],
      returnValue: '(Array): 返回新的映射后数组。',
      demo: ` function square(n) {
                return n * n;
              }

              _.map([4, 8], square);
              // => [16, 64]

              _.map({ 'a': 4, 'b': 8 }, square);
              // => [16, 64] (iteration order is not guaranteed)

              var users = [
                { 'user': 'barney' },
                { 'user': 'fred' }
              ];

              // The '_.property' iteratee shorthand.
              _.map(users, 'user');
              // => ['barney', 'fred']`
    },
    '_.orderBy': {
      description: '此方法类似于_.sortBy，除了它允许指定 iteratee（迭代函数）结果如何排序。 如果没指定 orders（排序），所有值以升序排序。 否则，指定为"desc" 降序，或者指定为 "asc" 升序，排序对应值。',
      introduced: '4.0.0',
      params: [
        'collection (Array|Object): 用来迭代的集合。',
        '[iteratees=[_.identity]] (Array[]|Function[]|Object[]|string[]): 排序的迭代函数。',
        '[orders] (string[]): iteratees迭代函数的排序顺序。'
      ],
      returnValue: '(Array): 排序排序后的新数组。',
      demo: ` var users = [
                { 'user': 'fred',   'age': 48 },
                { 'user': 'barney', 'age': 34 },
                { 'user': 'fred',   'age': 40 },
                { 'user': 'barney', 'age': 36 }
              ];

              // 以 'user' 升序排序 再  'age' 以降序排序。
              _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
              // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]`
    },
    '_.partition': {
      description: '创建一个分成两组的元素数组，第一组包含predicate（断言函数）返回为 truthy（真值）的元素，第二组包含predicate（断言函数）返回为 falsey（假值）的元素。predicate 调用1个参数：(value)。',
      introduced: '3.0.0',
      params: [
        'collection (Array|Object): 用来迭代的集合。',
        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。'
      ],
      returnValue: '(Array): 返回元素分组后的数组。',
      demo: ` var users = [
                { 'user': 'barney',  'age': 36, 'active': false },
                { 'user': 'fred',    'age': 40, 'active': true },
                { 'user': 'pebbles', 'age': 1,  'active': false }
              ];

              _.partition(users, function(o) { return o.active; });
              // => objects for [['fred'], ['barney', 'pebbles']]

              // The '_.matches' iteratee shorthand.
              _.partition(users, { 'age': 1, 'active': false });
              // => objects for [['pebbles'], ['barney', 'fred']]

              // The '_.matchesProperty' iteratee shorthand.
              _.partition(users, ['active', false]);
              // => objects for [['barney', 'pebbles'], ['fred']]

              // The '_.property' iteratee shorthand.
              _.partition(users, 'active');
              // => objects for [['fred'], ['barney', 'pebbles']]`
    },
    '_.reduce': {
      description: `压缩 collection（集合）为一个值，通过 iteratee（迭代函数）遍历 collection（集合）中的每个元素，每次返回的值会作为下一次迭代使用(作为iteratee（迭代函数）的第一个参数使用)。 如果没有提供 accumulator，则 collection（集合）中的第一个元素作为初始值。(accumulator参数在第一次迭代的时候作为iteratee（迭代函数）第一个参数使用。) iteratee 调用4个参数：
                    (accumulator, value, index|key, collection).

                    lodash 中有许多方法是防止作为其他方法的迭代函数（即不能作为iteratee参数传递给其他方法），例如： _.reduce, _.reduceRight, 和 _.transform。

                    受保护的方法有（即这些方法不能使用 _.reduce, _.reduceRight, 和 _.transform作为 iteratee 迭代函数参数）：

                    assign, defaults, defaultsDeep, includes, merge, orderBy, 和 sortBy`,
      introduced: '0.1.0',
      params: [
        'collection (Array|Object): 用来迭代的集合。',
        '[iteratee=_.identity] (Function): 每次迭代调用的函数。',
        '[accumulator] (*): 初始值。'
      ],
      returnValue: '(*): 返回累加后的值。',
      demo: ` _.reduce([1, 2], function(sum, n) {
                return sum + n;
              }, 0);
              // => 3

              _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
                (result[value] || (result[value] = [])).push(key);
                return result;
              }, {});
              // => { '1': ['a', 'c'], '2': ['b'] } (无法保证遍历的顺序)`
    },
    '_.reduceRight': {
      description: '这个方法类似 _.reduce ，除了它是从右到左遍历collection（集合）中的元素的。',
      introduced: '0.1.0',
      params: [
        'collection (Array|Object): 用来迭代的集合。',
        '[iteratee=_.identity] (Function): 每次迭代调用的函数。',
        '[accumulator] (*): 初始值。'
      ],
      returnValue: '(*): 返回累加后的值。',
      demo: ` var array = [[0, 1], [2, 3], [4, 5]];

              _.reduceRight(array, function(flattened, other) {
                return flattened.concat(other);
              }, []);
              // => [4, 5, 2, 3, 0, 1]`
    },
    '_.reject': {
      description: '_.filter的反向方法;此方法 返回 predicate（断言函数） 不 返回 truthy（真值）的collection（集合）元素（非真）。',
      introduced: '0.1.0',
      params: [
        'collection (Array|Object): 用来迭代的集合。',
        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。'
      ],
      returnValue: '(Array): 返回过滤后的新数组',
      demo: ` var users = [
                { 'user': 'barney', 'age': 36, 'active': false },
                { 'user': 'fred',   'age': 40, 'active': true }
              ];

              _.reject(users, function(o) { return !o.active; });
              // => objects for ['fred']

              // '_.matches' 迭代简写
              _.reject(users, { 'age': 40, 'active': true });
              // => objects for ['barney']

              // '_.matchesProperty' 迭代简写
              _.reject(users, ['active', false]);
              // => objects for ['fred']

              // '_.property' 迭代简写
              _.reject(users, 'active');
              // => objects for ['barney']`
    },
    '_.sample': {
      description: '从collection（集合）中获得一个随机元素。',
      introduced: '2.0.0',
      params: [
        'collection (Array|Object): 要取样的集合。'
      ],
      returnValue: '(*): 返回随机元素。',
      demo: ` _.sample([1, 2, 3, 4]);
              // => 2`
    },
    '_.sampleSize': {
      description: '从collection（集合）中获得 n 个随机元素。',
      introduced: '4.0.0',
      params: [
        'collection (Array|Object): 要取样的集合。',
        '[n=1] (number): 取样的元素个数。'
      ],
      returnValue: '(Array): 返回随机元素。',
      demo: ` _.sampleSize([1, 2, 3], 2);
              // => [3, 1]

              _.sampleSize([1, 2, 3], 4);
              // => [2, 3, 1]`
    },
    '_.shuffle': {
      description: '创建一个被打乱值的集合。 使用 Fisher-Yates shuffle 版本。',
      introduced: '0.1.0',
      params: [
        'collection (Array|Object): 要打乱的集合。'
      ],
      returnValue: '(Array): 返回打乱的新数组。',
      demo: ` _.shuffle([1, 2, 3, 4]);
              // => [4, 1, 3, 2]`
    },
    '_.size': {
      description: '返回collection（集合）的长度，如果集合是类数组或字符串，返回其 length ；如果集合是对象，返回其可枚举属性的个数。',
      introduced: '0.1.0',
      params: [
        'collection (Array|Object): 要检查的集合'
      ],
      returnValue: '(number): 返回集合的长度。',
      demo: ` _.size([1, 2, 3]);
              // => 3

              _.size({ 'a': 1, 'b': 2 });
              // => 2

              _.size('pebbles');
              // => 7`
    },
    '_.some': {
      description: '通过 predicate（断言函数） 检查collection（集合）中的元素是否存在 任意 truthy（真值）的元素，一旦 predicate（断言函数） 返回 truthy（真值），遍历就停止。 predicate 调用3个参数：(value, index|key, collection)。',
      introduced: '0.1.0',
      params: [
        'collection (Array|Object): 用来迭代的集合。',
        '[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。'
      ],
      returnValue: '(boolean): 如果任意元素经 predicate 检查都为 truthy（真值），返回 true ，否则返回 false 。',
      demo: ` _.some([null, 0, 'yes', false], Boolean);
              // => true

              var users = [
                { 'user': 'barney', 'active': true },
                { 'user': 'fred',   'active': false }
              ];

              // The '_.matches' iteratee shorthand.
              _.some(users, { 'user': 'barney', 'active': false });
              // => false

              // The '_.matchesProperty' iteratee shorthand.
              _.some(users, ['active', false]);
              // => true

              // The '_.property' iteratee shorthand.
              _.some(users, 'active');
              // => true`
    },
    '_.sortBy': {
      description: '创建一个元素数组。 以 iteratee 处理的结果升序排序。 这个方法执行稳定排序，也就是说相同元素会保持原始排序。 iteratees 调用1个参数： (value)。',
      introduced: '0.1.0',
      params: [
        'collection (Array|Object): 用来迭代的集合。',
        '[iteratees=[_.identity]] (...(Array|Array[]|Function|Function[]|Object|Object[]|string|string[])): 这个函数决定排序。'
      ],
      returnValue: '(Array): 返回排序后的数组。',
      demo: ` var users = [
                { 'user': 'fred',   'age': 48 },
                { 'user': 'barney', 'age': 36 },
                { 'user': 'fred',   'age': 40 },
                { 'user': 'barney', 'age': 34 }
              ];

              _.sortBy(users, function(o) { return o.user; });
              // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

              _.sortBy(users, ['user', 'age']);
              // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]

              _.sortBy(users, 'user', function(o) {
                return Math.floor(o.age / 10);
              });
              // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]`
    }
  },
  Date: {
    '_.now': {
      description: '获得 Unix 纪元 (1 January 1970 00:00:00 UTC) 直到现在的毫秒数。',
      introduced: '2.4.0',
      returnValue: '(number): 返回时间戳。',
      demo: ` _.defer(function(stamp) {
                console.log(_.now() - stamp);
              }, _.now());
              // => 记录延迟函数调用的毫秒数`
    }
  },
  Function: {
    '_.after': {
      description: '_.before的反向函数;此方法创建一个函数，当他被调用n或更多次之后将马上触发func 。',
      introduced: '0.1.0',
      params: [
        'n (number): func 方法应该在调用多少次后才执行。',
        'func (Function): 用来限定的函数。'
      ],
      returnValue: '(Function): 返回新的限定函数。',
      demo: ` var saves = ['profile', 'settings'];

              var done = _.after(saves.length, function() {
                console.log('done saving!');
              });

              _.forEach(saves, function(type) {
                asyncSave({ 'type': type, 'complete': done });
              });
              // => Logs 'done saving!' after the two async saves have completed.`
    },
    '_.ary': {
      description: '创建一个调用func的函数。调用func时最多接受 n个参数，忽略多出的参数。',
      introduced: '3.0.0',
      params: [
        'func (Function): 需要被限制参数个数的函数。',
        '[n=func.length] (number): 限制的参数数量。'
      ],
      returnValue: '(Function): 返回新的覆盖函数。',
      demo: ` _.map(['6', '8', '10'], _.ary(parseInt, 1));
              // => [6, 8, 10]`
    },
    '_.before': {
      description: '创建一个调用func的函数，通过this绑定和创建函数的参数调用func，调用次数不超过 n 次。 之后再调用这个函数，将返回一次最后调用func的结果。',
      introduced: '3.0.0',
      params: [
        'n (number): 超过多少次不再调用func（愚人码头注：限制调用func 的次数）。',
        'func (Function): 限制执行的函数。'
      ],
      returnValue: '(Function): 返回新的限定函数。',
      demo: ` jQuery(element).on('click', _.before(5, addContactToList));
              // => allows adding up to 4 contacts to the list`
    },
    '_.bind': {
      description: `创建一个调用func的函数，thisArg绑定func函数中的 this (this的上下文为thisArg) ，并且func函数会接收partials附加参数。
                    _.bind.placeholder值，默认是以 _ 作为附加部分参数的占位符。 `,
      note: '注意: 不同于原生的 Function#bind，这个方法不会设置绑定函数的 "length" 属性。',
      introduced: '0.1.0',
      params: [
        'func (Function): 绑定的函数。',
        'thisArg (*): func 绑定的this对象。',
        '[partials] (...*): 附加的部分参数。'
      ],
      returnValue: '(Function): 返回新的绑定函数。',
      demo: ` var greet = function(greeting, punctuation) {
                return greeting + ' ' + this.user + punctuation;
              };

              var object = { 'user': 'fred' };

              var bound = _.bind(greet, object, 'hi');
              bound('!');
              // => 'hi fred!'

              // Bound with placeholders.
              var bound = _.bind(greet, object, _, '!');
              bound('hi');
              // => 'hi fred!'`
    },
    '_.bindKey': {
      description: `创建一个函数,在object[key]上通过接收partials附加参数，调用这个方法。

                    这个方法与 _.bind 的不同之处在于允许重新定义绑定函数即使它还不存在。 浏览 Peter Michaux's article 了解更多详情。

                    _.bind.placeholder值，默认是以 _ 作为附加部分参数的占位符。`,
      introduced: '0.10.0',
      params: [
        'object (Object): 需要绑定函数的对象。',
        'key (string): 需要绑定函数对象的键。',
        '[partials] (...*): 附加的部分参数。'
      ],
      returnValue: '(Function): 返回新的绑定函数。',
      demo: ` var object = {
                'user': 'fred',
                'greet': function(greeting, punctuation) {
                  return greeting + ' ' + this.user + punctuation;
                }
              };

              var bound = _.bindKey(object, 'greet', 'hi');
              bound('!');
              // => 'hi fred!'

              object.greet = function(greeting, punctuation) {
                return greeting + 'ya ' + this.user + punctuation;
              };

              bound('!');
              // => 'hiya fred!'

              // Bound with placeholders.
              var bound = _.bindKey(object, 'greet', _, '!');
              bound('hi');
              // => 'hiya fred!'`
    },
    '_.curry': {
      description: `创建一个函数，该函数接收 func 的参数，要么调用func返回的结果，如果 func 所需参数已经提供，则直接返回 func 所执行的结果。或返回一个函数，接受余下的func 参数的函数，可以使用 func.length 强制需要累积的参数个数。

                    _.curry.placeholder值，默认是以 _ 作为附加部分参数的占位符。`,
      note: '注意：这个方法不会设置 curried 函数的 "length" 属性。',
      introduced: '2.0.0',
      params: [
        'func (Function): 用来柯里化（curry）的函数。',
        '[arity=func.length] (number): 需要提供给 func 的参数数量。'
      ],
      returnValue: '(Function): 返回新的柯里化（curry）函数。',
      demo: ` var abc = function(a, b, c) {
                return [a, b, c];
              };

              var curried = _.curry(abc);

              curried(1)(2)(3);
              // => [1, 2, 3]

              curried(1, 2)(3);
              // => [1, 2, 3]

              curried(1, 2, 3);
              // => [1, 2, 3]

              // Curried with placeholders.
              curried(1)(_, 3)(2);
              // => [1, 2, 3]`
    },
    '_.curryRight': {
      description: `这个方法类似 _.curry。 除了它接受参数的方式用_.partialRight 代替了 _.partial。

                    _.curryRight.placeholder值，默认是以 _ 作为附加部分参数的占位符。`,
      note: '注意：这个方法不会设置 curried 函数的 "length" 属性。',
      introduced: '3.0.0',
      params: [
        'func (Function): 用来柯里化（curry）的函数。',
        '[arity=func.length] (number): 需要提供给 func 的参数数量。'
      ],
      returnValue: '(Function): 返回新的柯里化（curry）函数。',
      demo: ` var abc = function(a, b, c) {
                return [a, b, c];
              };

              var curried = _.curryRight(abc);

              curried(3)(2)(1);
              // => [1, 2, 3]

              curried(2, 3)(1);
              // => [1, 2, 3]

              curried(1, 2, 3);
              // => [1, 2, 3]

              // Curried with placeholders.
              curried(3)(1, _)(2);
              // => [1, 2, 3]`
    },
    '_.debounce': {
      description: '创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。 debounced（防抖动）函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。 可以提供一个 options（选项） 对象决定如何调用 func 方法，options.leading 与|或 options.trailing 决定延迟前后如何触发（愚人码头注：是 先调用后等待 还是 先等待后调用）。 func 调用时会传入最后一次提供给 debounced（防抖动）函数 的参数。 后续调用的 debounced（防抖动）函数返回是最后一次 func 调用的结果。',
      note: ` 注意: 如果 leading 和 trailing 选项为 true, 则 func 允许 trailing 方式调用的条件为: 在 wait 期间多次调用防抖方法。

              如果 wait 为 0 并且 leading 为 false, func调用将被推迟到下一个点，类似setTimeout为0的超时。

              See David Corbacho's article for details over the differences between _.debounce and _.throttle.`,
      introduced: '0.1.0',
      params: [
        'func (Function): 要防抖动的函数。',
        '[wait=0] (number): 需要延迟的毫秒数。',
        '[options={}] (Object): 选项对象。',
        '[options.leading=false] (boolean): 指定在延迟开始前调用。',
        '[options.maxWait] (number): 设置 func 允许被延迟的最大值。',
        '[options.trailing=true] (boolean): 指定在延迟结束后调用。'
      ],
      returnValue: '(Function): 返回新的 debounced（防抖动）函数。',
      demo: ` // 避免窗口在变动时出现昂贵的计算开销。
              jQuery(window).on('resize', _.debounce(calculateLayout, 150));

              // 当点击时 'sendMail' 随后就被调用。
              jQuery(element).on('click', _.debounce(sendMail, 300, {
                'leading': true,
                'trailing': false
              }));

              // 确保 'batchLog' 调用1次之后，1秒内会被触发。
              var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
              var source = new EventSource('/stream');
              jQuery(source).on('message', debounced);

              // 取消一个 trailing 的防抖动调用
              jQuery(window).on('popstate', debounced.cancel);`
    },
    '_.defer': {
      description: '推迟调用func，直到当前堆栈清理完毕。 调用时，任何附加的参数会传给func。',
      introduced: '0.1.0',
      params: [
        'func (Function): 要延迟的函数。',
        '[args] (...*): 会在调用时传给 func 的参数。'
      ],
      returnValue: '(number):返回计时器 id。',
      demo: ` _.defer(function(text) {
                console.log(text);
              }, 'deferred');
              // => 一毫秒或更久一些输出 'deferred'。`
    },
    '_.delay': {
      description: '延迟 wait 毫秒后调用 func。 调用时，任何附加的参数会传给func。',
      introduced: '0.1.0',
      params: [
        'func (Function): 要延迟的函数。',
        'wait (number): 要延迟的毫秒数。',
        '[args] (...*): 会在调用时传入到 func 的参数。'
      ],
      returnValue: '(number): 返回计时器 id',
      demo: ` _.delay(function(text) {
                console.log(text);
              }, 1000, 'later');
              // => 一秒后输出 'later'。`
    },
    '_.flip': {
      description: '创建一个函数，调用func时候接收翻转的参数。',
      introduced: '4.0.0',
      params: [
        'func (Function): 要翻转参数的函数。'
      ],
      returnValue: '(Function): 返回新的函数。',
      demo: ` var flipped = _.flip(function() {
                return _.toArray(arguments);
              });

              flipped('a', 'b', 'c', 'd');
              // => ['d', 'c', 'b', 'a']`
    },
    '_.memoize': {
      description: '创建一个会缓存 func 结果的函数。 如果提供了 resolver ，就用 resolver 的返回值作为 key 缓存函数的结果。 默认情况下用第一个参数作为缓存的 key。 func 在调用时 this 会绑定在缓存函数上。',
      note: '注意: 缓存会暴露在缓存函数的 cache 上。 它是可以定制的，只要替换了 _.memoize.Cache 构造函数，或实现了 Map 的 delete, get, has, 和 set方法。',
      introduced: '0.1.0',
      params: [
        'func (Function): 需要缓存化的函数.',
        '[resolver] (Function): 这个函数的返回值作为缓存的 key。'
      ],
      returnValue: '(Function): 返回缓存化后的函数。',
      demo: ` var object = { 'a': 1, 'b': 2 };
              var other = { 'c': 3, 'd': 4 };

              var values = _.memoize(_.values);
              values(object);
              // => [1, 2]

              values(other);
              // => [3, 4]

              object.a = 2;
              values(object);
              // => [1, 2]

              // 修改结果缓存。
              values.cache.set(object, ['a', 'b']);
              values(object);
              // => ['a', 'b']

              // 替换 '_.memoize.Cache'。
              _.memoize.Cache = WeakMap;`
    },
    '_.negate': {
      description: '创建一个针对断言函数 func 结果取反的函数。 func 断言函数被调用的时候，this 绑定到创建的函数，并传入对应参数。',
      introduced: '3.0.0',
      params: [
        'predicate (Function): 需要对结果取反的函数。'
      ],
      returnValue: '(Function): 返回一个新的取反函数。',
      demo: ` function isEven(n) {
                return n % 2 == 0;
              }

              _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
              // => [1, 3, 5]`
    },
    '_.once': {
      description: '创建一个只能调用 func 一次的函数。 重复调用返回第一次调用的结果。 func 调用时， this 绑定到创建的函数，并传入对应参数。',
      introduced: '0.1.0',
      params: [
        'func (Function): 指定的触发的函数。'
      ],
      returnValue: '(Function): 返回新的受限函数。',
      demo: ` var initialize = _.once(createApplication);
              initialize();
              initialize();
              // 'initialize' 只能调用 'createApplication' 一次。`
    },
    '_.overArgs': {
      description: '创建一个函数，调用func时参数为相对应的transforms的返回值。',
      introduced: '4.0.0',
      params: [
        'func (Function):要包裹的函数。'
      ],
      returnValue: '(Function): 返回新函数。',
      demo: ` function doubled(n) {
                return n * 2;
              }

              function square(n) {
                return n * n;
              }

              var func = _.overArgs(function(x, y) {
                return [x, y];
              }, [square, doubled]);

              func(9, 3);
              // => [81, 6]

              func(10, 5);
              // => [100, 10]`
    },
    '_.partial': {
      description: `创建一个函数。 该函数调用 func，并传入预设的 partials 参数。 这个方法类似 _.bind，除了它不会绑定 this。

                    这个 _.partial.placeholder 的值，默认是以 _ 作为附加部分参数的占位符。`,
      note: '注意: 这个方法不会设置 "length" 到函数上。',
      introduced: '0.2.0',
      params: [
        'func (Function): 需要预设的函数',
        '[partials] (...*): 预设的参数'
      ],
      returnValue: '(Function): 返回预设参数的函数。',
      demo: ` var greet = function(greeting, name) {
                return greeting + ' ' + name;
              };

              var sayHelloTo = _.partial(greet, 'hello');
              sayHelloTo('fred');
              // => 'hello fred'

              // 使用了占位符。
              var greetFred = _.partial(greet, _, 'fred');
              greetFred('hi');
              // => 'hi fred'`
    },
    '_.partialRight': {
      description: `这个函数类似 _.partial，除了预设参数被附加到接受参数的后面。

                    这个 _.partialRight.placeholder 的值，默认是以 _ 作为附加部分参数的占位符。`,
      note: '注意: 这个方法不会设置 "length" 到函数上。',
      introduced: '1.0.0',
      params: [
        'func (Function): 需要预设的函数。',
        '[partials] (...*): 预设的参数。'
      ],
      returnValue: '(Function):返回预设参数的函数。',
      demo: ` var greet = function(greeting, name) {
                return greeting + ' ' + name;
              };

              var greetFred = _.partialRight(greet, 'fred');
              greetFred('hi');
              // => 'hi fred'

              // 使用了占位符。
              var sayHelloTo = _.partialRight(greet, 'hello', _);
              sayHelloTo('fred');
              // => 'hello fred'`
    },
    '_.rearg': {
      description: '创建一个函数,调用func时，根据指定的 indexes 调整对应位置参数。其中第一个索引值是对应第一个参数，第二个索引值是作为第二个参数，依此类推。',
      introduced: '3.0.0',
      params: [
        'func (Function): 待调用的函数。',
        'indexes (...(number|number[])): 排列参数的位置。'
      ],
      returnValue: '(Function): 返回新的函数。',
      demo: ` var rearged = _.rearg(function(a, b, c) {
                return [a, b, c];
              }, [2, 0, 1]);

              rearged('b', 'c', 'a')
              // => ['a', 'b', 'c']`
    },
    '_.rest': {
      description: '创建一个函数，调用func时，this绑定到创建的新函数，并且start之后的参数作为数组传入。',
      note: '注意: 这个方法基于rest parameter。',
      introduced: '4.0.0',
      params: [
        'func (Function): 要应用的函数。',
        '[start=func.length-1] (number): rest 参数的开始位置。'
      ],
      returnValue: '(Function): 返回新的函数。',
      demo: ` var say = _.rest(function(what, names) {
                return what + ' ' + _.initial(names).join(', ') +
                  (_.size(names) > 1 ? ', & ' : '') + _.last(names);
              });

              say('hello', 'fred', 'barney', 'pebbles');
              // => 'hello fred, barney, & pebbles'`
    },
    '_.spread': {
      description: '创建一个函数，调用func时，this绑定到创建的新函数，把参数作为数组传入，类似于Function#apply. ',
      note: '注意: 这个方法基于 spread operator.',
      introduced: '3.2.0',
      params: [
        'func (Function): 要应用传播参数的函数。',
        '[start=0] (number): spread 参数的开始位置.'
      ],
      returnValue: '(Function): 返回新的函数。',
      demo: ` var say = _.spread(function(who, what) {
                return who + ' says ' + what;
              });

              say(['fred', 'hello']);
              // => 'fred says hello'

              var numbers = Promise.all([
                Promise.resolve(40),
                Promise.resolve(36)
              ]);

              numbers.then(_.spread(function(x, y) {
                return x + y;
              }));
              // => a Promise of 76`
    },
    '_.throttle': {
      description: '创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。 该函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。 可以提供一个 options 对象决定如何调用 func 方法， options.leading 与|或 options.trailing 决定 wait 前后如何触发。 func 会传入最后一次传入的参数给这个函数。 随后调用的函数返回是最后一次 func 调用的结果。',
      note: ` 注意: 如果 leading 和 trailing 都设定为 true 则 func 允许 trailing 方式调用的条件为: 在 wait 期间多次调用。

              如果 wait 为 0 并且 leading 为 false, func调用将被推迟到下一个点，类似setTimeout为0的超时。

              查看 David Corbacho's article 了解 _.throttle 与 _.debounce 的区别。`,
      introduced: '0.1.0',
      params: [
        'func (Function): 要节流的函数。',
        '[wait=0] (number): 需要节流的毫秒。',
        '[options={}] (Object): 选项对象。',
        '[options.leading=true] (boolean): 指定调用在节流开始前。',
        '[options.trailing=true] (boolean): 指定调用在节流结束后。'
      ],
      returnValue: '(Function): 返回节流的函数。',
      demo: ` // 避免在滚动时过分的更新定位
              jQuery(window).on('scroll', _.throttle(updatePosition, 100));

              // 点击后就调用 'renewToken'，但5分钟内超过1次。
              var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
              jQuery(element).on('click', throttled);

              // 取消一个 trailing 的节流调用。
              jQuery(window).on('popstate', throttled.cancel);`
    },
    '_.unary': {
      description: '创建一个最多接受一个参数的函数，忽略多余的参数。',
      introduced: '4.0.0',
      params: [
        'func (Function): 要处理的函数。'
      ],
      returnValue: '(Function): 返回新函数。',
      demo: ` _.map(['6', '8', '10'], _.unary(parseInt));
              // => [6, 8, 10]`
    },
    '_.wrap': {
      description: '创建一个函数。提供的 value 包装在 wrapper 函数的第一个参数里。 任何附加的参数都提供给 wrapper 函数。 被调用时 this 绑定在创建的函数上。',
      introduced: '0.1.0',
      params: [
        'value (*): 要包装的值。',
        '[wrapper=identity] (Function): 包装函数。'
      ],
      returnValue: '(Function): 返回新的函数。',
      demo: ` var p = _.wrap(_.escape, function(func, text) {
                return '<p>' + func(text) + '</p>';
              });

              p('fred, barney, & pebbles');
              // => '<p>fred, barney, &amp; pebbles</p>'`
    }
  },
  Lang: {
    '_.castArray': {
      description: '如果 value 不是数组, 那么强制转为数组。',
      introduced: '4.4.0',
      params: [
        'value (*): 要处理的值。'
      ],
      returnValue: '(Array): 返回转换后的数组。',
      demo: ` _.castArray(1);
              // => [1]

              _.castArray({ 'a': 1 });
              // => [{ 'a': 1 }]

              _.castArray('abc');
              // => ['abc']

              _.castArray(null);
              // => [null]

              _.castArray(undefined);
              // => [undefined]

              _.castArray();
              // => []

              var array = [1, 2, 3];
              console.log(_.castArray(array) === array);
              // => true`
    },
    '_.clone': {
      description: '创建一个 value 的浅拷贝。',
      note: '注意: 这个方法参考自 structured clone algorithm 以及支持 arrays、array buffers、 booleans、 date objects、maps、 numbers， Object 对象, regexes, sets, strings, symbols, 以及 typed arrays。 arguments对象的可枚举属性会拷贝为普通对象。 一些不可拷贝的对象，例如error objects、functions, DOM nodes, 以及 WeakMaps 会返回空对象。',
      introduced: '0.1.0',
      params: [
        'value (*): 要拷贝的值'
      ],
      returnValue: '(*): 返回拷贝后的值。',
      demo: ` var objects = [{ 'a': 1 }, { 'b': 2 }];

              var shallow = _.clone(objects);
              console.log(shallow[0] === objects[0]);
              // => true`
    },
    '_.cloneDeep': {
      description: '这个方法类似_.clone，除了它会递归拷贝 value。（也叫深拷贝）。',
      introduced: '1.0.0',
      params: [
        'value (*): 要深拷贝的值。'
      ],
      returnValue: '(*): 返回拷贝后的值。',
      demo: ` var objects = [{ 'a': 1 }, { 'b': 2 }];

              var deep = _.cloneDeep(objects);
              console.log(deep[0] === objects[0]);
              // => false`
    },
    '_.cloneDeepWith': {
      description: '这个方法类似 _.cloneWith，除了它会递归克隆 value。',
      introduced: '4.0.0',
      params: [
        'value (*): 用来递归克隆的值。',
        '[customizer] (Function): 用来自定义克隆的函数。'
      ],
      returnValue: '(*): 返回深度克隆后的值。',
      demo: ` function customizer(value) {
                if (_.isElement(value)) {
                  return value.cloneNode(true);
                }
              }

              var el = _.cloneDeepWith(document.body, customizer);

              console.log(el === document.body);
              // => false
              console.log(el.nodeName);
              // => 'BODY'
              console.log(el.childNodes.length);
              // => 20`
    },
    '_.cloneWith': {
      description: '这个方法类似 _.clone，除了它接受一个 customizer 定制返回的克隆值。 如果 customizer 返回 undefined 将会使用拷贝方法代替处理。 customizer 调用4个参数： (value [, index|key, object, stack])。',
      introduced: '4.0.0',
      params: [
        'value (*): 要克隆的值。',
        '[customizer] (Function): 用来自定义克隆的函数。'
      ],
      returnValue: '(*): 返回克隆值。',
      demo: ` function customizer(value) {
                if (_.isElement(value)) {
                  return value.cloneNode(false);
                }
              }

              var el = _.cloneWith(document.body, customizer);

              console.log(el === document.body);
              // => false
              console.log(el.nodeName);
              // => 'BODY'
              console.log(el.childNodes.length);
              // => 0`
    },
    '_.conformsTo': {
      description: '通过调用断言source的属性与 object 的相应属性值，检查 object是否符合 source。当source偏应用时，这种方法和 _.conforms函数是等价的。',
      note: '注意: 当source为偏应用时，这种方法等价于_.conforms。（关于偏应用大家可以自己到google上搜索一下）。',
      introduced: '4.14.0',
      params: [
        'object (Object): 要检查的对象。',
        'source (Object): 要断言属性是否符合的对象。'
      ],
      returnValue: '(boolean): 如果 object 符合，返回 true，否则 false。',
      demo: ` var object = { 'a': 1, 'b': 2 };

              _.conformsTo(object, { 'b': function(n) { return n > 1; } });
              // => true

              _.conformsTo(object, { 'b': function(n) { return n > 2; } });
              // => false`
    },
    '_.eq': {
      description: '执行 SameValueZero 比较两者的值，来确定它们是否相等。',
      introduced: '4.0.0',
      params: [
        'value (*): 要比较的值。',
        'other (*): 另一个要比较的值。'
      ],
      returnValue: '(boolean): 如果两个值相等返回 true ，否则返回 false 。',
      demo: ` var object = { 'a': 1 };
              var other = { 'a': 1 };

              _.eq(object, object);
              // => true

              _.eq(object, other);
              // => false

              _.eq('a', 'a');
              // => true

              _.eq('a', Object('a'));
              // => false

              _.eq(NaN, NaN);
              // => true`
    },
    '_.gt': {
      description: '检查 value是否大于 other。',
      introduced: '3.9.0',
      params: [
        'value (*): 要比较的值。',
        'other (*): 另一个要比较的值。'
      ],
      returnValue: '(boolean): 如果value 大于 other 返回 true，否则返回 false。',
      demo: ` _.gt(3, 1);
              // => true

              _.gt(3, 3);
              // => false

              _.gt(1, 3);
              // => false`
    },
    '_.gte': {
      description: '检查 value是否大于或者等于 other。',
      introduced: '3.9.0',
      params: [
        'value (*): 要比较的值。',
        'other (*): 另一个要比较的值。'
      ],
      returnValue: '(boolean): 如果value 大于或者等于 other 返回 true，否则返回 false。',
      demo: ` _.gte(3, 1);
              // => true

              _.gte(3, 3);
              // => true

              _.gte(1, 3);
              // => false`
    },
    '_.isArguments': {
      description: '检查 value 是否是一个类 arguments 对象。',
      introduced: '0.1.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果value是一个 arguments 对象 返回 true，否则返回 false。',
      demo: ` _.isArguments(function() { return arguments; }());
              // => true

              _.isArguments([1, 2, 3]);
              // => false`
    },
    '_.isArray': {
      description: '检查 value 是否是 Array 类对象。',
      introduced: '0.1.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果value是一个数组返回 true，否则返回 false。',
      demo: ` _.isArray([1, 2, 3]);
              // => true

              _.isArray(document.body.children);
              // => false

              _.isArray('abc');
              // => false

              _.isArray(_.noop);
              // => false`
    },
    '_.isArrayBuffer': {
      description: '检查 value 是否是 ArrayBuffer 对象。',
      introduced: '4.3.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果value是一个数组 buffer 返回 true，否则返回 false。',
      demo: ` _.isArrayBuffer(new ArrayBuffer(2));
              // => true

              _.isArrayBuffer(new Array(2));
              // => false`
    },
    '_.isArrayLike': {
      description: '检查 value 是否是类数组。 如果一个值被认为是类数组，那么它不是一个函数，并且value.length是个整数，大于等于 0，小于或等于 Number.MAX_SAFE_INTEGER。',
      introduced: '4.0.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果value是一个类数组，那么返回 true，否则返回 false。',
      demo: ` _.isArrayLike([1, 2, 3]);
              // => true

              _.isArrayLike(document.body.children);
              // => true

              _.isArrayLike('abc');
              // => true

              _.isArrayLike(_.noop);
              // => false`
    },
    '_.isArrayLikeObject': {
      description: '这个方法类似_.isArrayLike。除了它还检查value是否是个对象。',
      introduced: '4.0.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 是一个类数组对象，那么返回 true，否则返回 false。',
      demo: ` _.isArrayLikeObject([1, 2, 3]);
              // => true

              _.isArrayLikeObject(document.body.children);
              // => true

              _.isArrayLikeObject('abc');
              // => false

              _.isArrayLikeObject(_.noop);
              // => false`
    },
    '_.isBoolean': {
      description: '检查 value 是否是原始 boolean 类型或者对象。',
      introduced: '0.1.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 是一个布尔值，那么返回 true，否则返回 false。',
      demo: ` _.isBoolean(false);
              // => true

              _.isBoolean(null);
              // => false`
    },
    '_.isBuffer': {
      description: '检查 value 是否是个 buffer。',
      introduced: '4.3.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 是一个buffer，那么返回 true，否则返回 false。',
      demo: ` _.isBuffer(new Buffer(2));
              // => true

              _.isBuffer(new Uint8Array(2));
              // => false`
    },
    '_.isDate': {
      description: '检查 value 是否是 Date 对象。',
      introduced: '0.1.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 是一个日期对象，那么返回 true，否则返回 false。',
      demo: ` _.isDate(new Date);
              // => true

              _.isDate('Mon April 23 2012');
              // => false`
    },
    '_.isElement': {
      description: '检查 value 是否是可能是 DOM 元素。',
      introduced: '0.1.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 是一个DOM元素，那么返回 true，否则返回 false。',
      demo: ` _.isElement(document.body);
              // => true

              _.isElement('<body>');
              // => false`
    },
    '_.isEmpty': {
      description: `检查 value 是否为一个空对象，集合，映射或者set。 判断的依据是除非是有枚举属性的对象，length 大于 0 的 arguments object, array, string 或类jquery选择器。

                    对象如果被认为为空，那么他们没有自己的可枚举属性的对象。

                    类数组值，比如arguments对象，array，buffer，string或者类jQuery集合的length 为 0，被认为是空。类似的，map（映射）和set 的size 为 0，被认为是空。`,
      introduced: '0.1.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 为空，那么返回 true，否则返回 false。',
      demo: ` _.isEmpty(null);
              // => true

              _.isEmpty(true);
              // => true

              _.isEmpty(1);
              // => true

              _.isEmpty([1, 2, 3]);
              // => false

              _.isEmpty({ 'a': 1 });
              // => false`
    },
    '_.isEqual': {
      description: '执行深比较来确定两者的值是否相等。',
      note: '注意: 这个方法支持比较 arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, 以及 typed arrays. Object 对象值比较自身的属性，不包括继承的和可枚举的属性。 不支持函数和DOM节点比较。',
      introduced: '0.1.0',
      params: [
        'value (*): 用来比较的值。',
        'other (*): 另一个用来比较的值。'
      ],
      returnValue: '(boolean): 如果 两个值完全相同，那么返回 true，否则返回 false。',
      demo: ` var object = { 'a': 1 };
              var other = { 'a': 1 };

              _.isEqual(object, other);
              // => true

              object === other;
              // => false`
    },
    '_.isEqualWith': {
      description: '这个方法类似 _.isEqual。 除了它接受一个 customizer 用来定制比较值。 如果 customizer 返回 undefined 将会比较处理方法代替。 customizer 会传入6个参数：(objValue, othValue [, index|key, object, other, stack])',
      introduced: '4.0.0',
      params: [
        'value (*): 用来比较的值。',
        'other (*): 另一个用来比较的值。',
        '[customizer] (Function): 用来定制比较值的函数。'
      ],
      returnValue: '(boolean): 如果 两个值完全相同，那么返回 true，否则返回 false。',
      demo: ` function isGreeting(value) {
                return /^h(?:i|ello)$/.test(value);
              }

              function customizer(objValue, othValue) {
                if (isGreeting(objValue) && isGreeting(othValue)) {
                  return true;
                }
              }

              var array = ['hello', 'goodbye'];
              var other = ['hi', 'goodbye'];

              _.isEqualWith(array, other, customizer);
              // => true`
    },
    '_.isError': {
      description: '检查 value 是否是 Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, 或者 URIError对象。',
      introduced: '3.0.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 是一个错误（Error）对象，那么返回 true，否则返回 false。',
      demo: ` _.isError(new Error);
              // => true

              _.isError(Error);
              // => false`
    },
    '_.isFinite': {
      description: '检查 value 是否是原始有限数值。',
      note: '注意: 这个方法基于 Number.isFinite.',
      introduced: '0.1.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 是一个有限数值，那么返回 true，否则返回 false。',
      demo: ` _.isFinite(3);
              // => true

              _.isFinite(Number.MIN_VALUE);
              // => true

              _.isFinite(Infinity);
              // => false

              _.isFinite('3');
              // => false`
    },
    '_.isFunction': {
      description: '检查 value 是否是 Function 对象。',
      introduced: '0.1.0',
      params: [
        'value (*): 要检查的值'
      ],
      returnValue: '(boolean): 如果 value 是一个函数，那么返回 true，否则返回 false。',
      demo: ` _.isFunction(_);
              // => true

              _.isFunction(/abc/);
              // => false`
    },
    '_.isInteger': {
      description: '检查 value 是否为一个整数。',
      introduced: '4.0.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 是一个整数，那么返回 true，否则返回 false。',
      demo: ` _.isInteger(3);
              // => true

              _.isInteger(Number.MIN_VALUE);
              // => false

              _.isInteger(Infinity);
              // => false

              _.isInteger('3');
              // => false`
    },
    '_.isLength': {
      description: '检查 value 是否为有效的类数组长度。',
      introduced: '4.0.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 是一个有效长度，那么返回 true，否则返回 false。',
      demo: ` _.isLength(3);
              // => true

              _.isLength(Number.MIN_VALUE);
              // => false

              _.isLength(Infinity);
              // => false

              _.isLength('3');
              // => false`
    },
    '_.isMap': {
      description: '检查 value 是否为一个 Map 对象。',
      introduced: '4.3.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 是一个 Map 对象，那么返回 true，否则返回 false。',
      demo: ` _.isMap(new Map);
              // => true

              _.isMap(new WeakMap);
              // => false`
    },
    '_.isMatch': {
      description: '执行一个深度比较，来确定 object 是否含有和 source 完全相等的属性值。',
      note: ` 注意: 当source为偏应用时，这种方法等价于_.matches。（关于偏应用大家可以自己到google上搜索一下）。

              偏应用比较匹配空数组和空对象source值分别针对任何数组或对象的价值。在_.isEqual中查看支持的值比较列表。`,
      introduced: '3.0.0',
      params: [
        'object (Object): 要检查的对象。',
        'source (Object): 属性值相匹配的对象。'
      ],
      returnValue: '(boolean): 如果object匹配，那么返回 true，否则返回 false。',
      demo: ` var object = { 'a': 1, 'b': 2 };

              _.isMatch(object, { 'b': 2 });
              // => true

              _.isMatch(object, { 'b': 1 });
              // => false`
    },
    '_.isMatchWith': {
      description: '这个方法类似 _.isMatch。 除了它接受一个 customizer 定制比较的值。 如果 customizer 返回 undefined 将会比较处理方法代替。 customizer 会传入5个参数：(objValue, srcValue, index|key, object, source)。',
      introduced: '4.0.0',
      params: [
        'object (Object): 要检查的对象。',
        'source (Object): 属性值相匹配的对象。',
        '[customizer] (Function): 这个函数用来定制比较。'
      ],
      returnValue: '(boolean): 如果object匹配，那么返回 true，否则返回 false。',
      demo: ` function isGreeting(value) {
                return /^h(?:i|ello)$/.test(value);
              }

              function customizer(objValue, srcValue) {
                if (isGreeting(objValue) && isGreeting(srcValue)) {
                  return true;
                }
              }

              var object = { 'greeting': 'hello' };
              var source = { 'greeting': 'hi' };

              _.isMatchWith(object, source, customizer);
              // => true`
    },
    '_.isNaN': {
      description: '检查 value 是否是 NaN。',
      note: '注意: 这个方法基于Number.isNaN，和全局的 isNaN 不同之处在于，全局的 isNaN对 于 undefined 和其他非数字的值返回 true。',
      introduced: '0.1.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 是一个 NaN，那么返回 true，否则返回 false。',
      demo: ` _.isNaN(NaN);
              // => true

              _.isNaN(new Number(NaN));
              // => true

              isNaN(undefined);
              // => true

              _.isNaN(undefined);
              // => false`
    },
    '_.isNative': {
      description: '检查 value 是否是一个原生函数。',
      note: '注意： 这种方法不能可靠地检测在core-js包中存在的本地函数，因为 core-js 规避这种检测。尽管有多个请求，core-js 维护者已经明确表态：任何试图修复检测将受阻。这样一来，我们别无选择，只能抛出一个错误。不幸的是，这也影响其他的包，比如依赖于 core-js的babel-polyfill。',
      introduced: '3.0.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 是一个 原生函数，那么返回 true，否则返回 false。',
      demo: ` _.isNative(Array.prototype.push);
              // => true

              _.isNative(_);
              // => false`
    },
    '_.isNil': {
      description: '检查 value 是否是 null 或者 undefined。',
      introduced: '4.0.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 为null 或 undefined，那么返回 true，否则返回 false。',
      demo: ` _.isNil(null);
              // => true

              _.isNil(void 0);
              // => true

              _.isNil(NaN);
              // => false`
    },
    '_.isNull': {
      description: '检查 valuealue 是否是 null。',
      introduced: '0.1.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 为null，那么返回 true，否则返回 false。',
      demo: ` _.isNull(null);
              // => true

              _.isNull(void 0);
              // => false`
    },
    '_.isNumber': {
      description: '检查 value 是否是原始Number数值型 或者 对象。',
      note: '注意: 要排除 Infinity, -Infinity, 以及 NaN 数值类型，用 _.isFinite 方法。',
      introduced: '0.1.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 为一个数值，那么返回 true，否则返回 false。',
      demo: ` _.isNumber(3);
              // => true

              _.isNumber(Number.MIN_VALUE);
              // => true

              _.isNumber(Infinity);
              // => true

              _.isNumber('3');
              // => false`
    },
    '_.isObject': {
      description: '检查 value 是否为 Object 的 language type。 (例如： arrays, functions, objects, regexes,new Number(0), 以及 new String(""))',
      introduced: '0.1.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 为一个对象，那么返回 true，否则返回 false。',
      demo: ` _.isObject({});
              // => true

              _.isObject([1, 2, 3]);
              // => true

              _.isObject(_.noop);
              // => true

              _.isObject(null);
              // => false`
    },
    '_.isObjectLike': {
      description: '检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"。',
      introduced: '4.0.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 为一个类对象，那么返回 true，否则返回 false。',
      demo: ` _.isObjectLike({});
              // => true

              _.isObjectLike([1, 2, 3]);
              // => true

              _.isObjectLike(_.noop);
              // => false

              _.isObjectLike(null);
              // => false`
    },
    '_.isPlainObject': {
      description: '检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 [[Prototype]] 为 null 。',
      introduced: '0.8.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 为一个普通对象，那么返回 true，否则返回 false。',
      demo: ` function Foo() {
                this.a = 1;
              }

              _.isPlainObject(new Foo);
              // => false

              _.isPlainObject([1, 2, 3]);
              // => false

              _.isPlainObject({ 'x': 0, 'y': 0 });
              // => true

              _.isPlainObject(Object.create(null));
              // => true`
    },
    '_.isRegExp': {
      description: '检查 value 是否为RegExp对象。',
      introduced: '0.1.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 为一个正则表达式，那么返回 true，否则返回 false。',
      demo: ` _.isRegExp(/abc/);
              // => true

              _.isRegExp('/abc/');
              // => false`
    },
    '_.isSafeInteger': {
      description: '检查 value 是否是一个安全整数。 一个安全整数应该是符合 IEEE-754 标准的非双精度浮点数。',
      note: '注意: 这个方法基于 Number.isSafeInteger.',
      introduced: '4.0.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 为一个安全整数，那么返回 true，否则返回 false。',
      demo: ` _.isSafeInteger(3);
              // => true

              _.isSafeInteger(Number.MIN_VALUE);
              // => false

              _.isSafeInteger(Infinity);
              // => false

              _.isSafeInteger('3');
              // => false`
    },
    '_.isSet': {
      description: '检查 value 是否是一个Set对象。',
      introduced: '4.3.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 为一个 set 对象，那么返回 true，否则返回 false。',
      demo: ` _.isSet(new Set);
              // => true

              _.isSet(new WeakSet);
              // => false`
    },
    '_.isString': {
      description: '检查 value 是否是原始字符串String或者对象。',
      introduced: '0.1.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 为一个字符串，那么返回 true，否则返回 false。',
      demo: ` _.isString('abc');
              // => true

              _.isString(1);
              // => false`
    },
    '_.isSymbol': {
      description: '检查 value 是否是原始 Symbol 或者对象。',
      introduced: '4.0.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 为一个symbol，那么返回 true，否则返回 false。',
      demo: ` _.isSymbol(Symbol.iterator);
              // => true

              _.isSymbol('abc');
              // => false`
    },
    '_.isTypedArray': {
      description: '检查 value 是否是TypedArray。',
      introduced: '3.0.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 为一个typed array，那么返回 true，否则返回 false。',
      demo: ` _.isTypedArray(new Uint8Array);
              // => true

              _.isTypedArray([]);
              // => false`
    },
    '_.isUndefined': {
      description: '检查 value 是否是 undefined.',
      introduced: '0.1.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 是 undefined ，那么返回 true，否则返回 false。',
      demo: ` _.isUndefined(void 0);
              // => true

              _.isUndefined(null);
              // => false`
    },
    '_.isWeakMap': {
      description: '检查 value 是否是 WeakMap 对象。',
      introduced: '4.3.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 为一个 WeakMap 对象 ，那么返回 true，否则返回 false。',
      demo: ` _.isWeakMap(new WeakMap);
              // => true

              _.isWeakMap(new Map);
              // => false`
    },
    '_.isWeakSet': {
      description: '检查 value 是否是 WeakSet 对象。',
      introduced: '4.3.0',
      params: [
        'value (*): 要检查的值。'
      ],
      returnValue: '(boolean): 如果 value 为一个 WeakSet 对象 ，那么返回 true，否则返回 false。',
      demo: ` _.isWeakSet(new WeakSet);
              // => true

              _.isWeakSet(new Set);
              // => false`
    },
    '_.lt': {
      description: '检查 value 是否小于 other。',
      introduced: '3.9.0',
      params: [
        'value (*): 用来比较的值。',
        'other (*): 另一个用来比较的值。'
      ],
      returnValue: '(boolean): 如果value 小于 other 返回 true，否则返回 false。',
      demo: ` _.lt(1, 3);
              // => true

              _.lt(3, 3);
              // => false

              _.lt(3, 1);
              // => false`
    },
    '_.lte': {
      description: '检查 value 是否小于等于 other。',
      introduced: '3.9.0',
      params: [
        'value (*): 用来比较的值。',
        'other (*): 另一个用来比较的值。'
      ],
      returnValue: '(boolean): 如果value 小于等于 other 返回 true，否则返回 false。',
      demo: ` _.lte(1, 3);
              // => true

              _.lte(3, 3);
              // => true

              _.lte(3, 1);
              // => false`
    },
    '_.toArray': {
      description: '转换 value 为一个数组。',
      introduced: '0.1.0',
      params: [
        'value (*): 要转换的值。'
      ],
      returnValue: '(Array): 返回转换后的数组。',
      demo: ` _.toArray({ 'a': 1, 'b': 2 });
              // => [1, 2]

              _.toArray('abc');
              // => ['a', 'b', 'c']

              _.toArray(1);
              // => []

              _.toArray(null);
              // => []`
    },
    '_.toFinite': {
      description: '转换 value 为一个有限数字。',
      introduced: '4.12.0',
      params: [
        'value (*): 要转换的值。'
      ],
      returnValue: '(number): 返回转换后的数字。',
      demo: ` _.toFinite(3.2);
              // => 3.2

              _.toFinite(Number.MIN_VALUE);
              // => 5e-324

              _.toFinite(Infinity);
              // => 1.7976931348623157e+308

              _.toFinite('3.2');
              // => 3.2`
    },
    '_.toInteger': {
      description: '转换 value 为一个整数。',
      note: '注意: 这个方法基于 ToInteger.',
      introduced: '4.0.0',
      params: [
        'value (*): 要转换的值。'
      ],
      returnValue: '(number): 返回转换后的整数。',
      demo: ` _.toInteger(3.2);
              // => 3

              _.toInteger(Number.MIN_VALUE);
              // => 0

              _.toInteger(Infinity);
              // => 1.7976931348623157e+308

              _.toInteger('3.2');
              // => 3`
    },
    '_.toLength': {
      description: '转换 value 为用作类数组对象的长度整数。',
      note: '注意: 这个方法基于 ToLength.',
      introduced: '4.0.0',
      params: [
        'value (*): 要转换的值。'
      ],
      returnValue: '(number): 返回转换后的整数。',
      demo: ` _.toLength(3.2);
              // => 3

              _.toLength(Number.MIN_VALUE);
              // => 0

              _.toLength(Infinity);
              // => 4294967295

              _.toLength('3.2');
              // => 3`
    },
    '_.toNumber': {
      description: '转换 value 为一个数字。',
      introduced: '4.0.0',
      params: [
        'value (*): 要处理的值。'
      ],
      returnValue: '(number): 返回数字。',
      demo: ` _.toNumber(3.2);
              // => 3.2

              _.toNumber(Number.MIN_VALUE);
              // => 5e-324

              _.toNumber(Infinity);
              // => Infinity

              _.toNumber('3.2');
              // => 3.2`
    },
    '_.toPlainObject': {
      description: '转换 value 为普通对象。 包括继承的可枚举属性。',
      introduced: '3.0.0',
      params: [
        'value (*): 要转换的值。'
      ],
      returnValue: '(Object): 返回转换后的普通对象。',
      demo: ` function Foo() {
                this.b = 2;
              }

              Foo.prototype.c = 3;

              _.assign({ 'a': 1 }, new Foo);
              // => { 'a': 1, 'b': 2 }

              _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
              // => { 'a': 1, 'b': 2, 'c': 3 }`
    },
    '_.toSafeInteger': {
      description: '转换 value 为安全整数。 安全整数可以用于比较和准确的表示。',
      introduced: '4.0.0',
      params: [
        'value (*): 要转换的值。'
      ],
      returnValue: '(number): 返回转换后的整数。',
      demo: ` _.toSafeInteger(3.2);
              // => 3

              _.toSafeInteger(Number.MIN_VALUE);
              // => 0

              _.toSafeInteger(Infinity);
              // => 9007199254740991

              _.toSafeInteger('3.2');
              // => 3`
    },
    '_.toString': {
      description: '转换 value 为字符串。 null 和 undefined 将返回空字符串。-0 将被转换为字符串"-0"。',
      introduced: '4.0.0',
      params: [
        'value (*): 要处理的值。'
      ],
      returnValue: '(string): 返回字符串。',
      demo: ` _.toString(null);
              // => ''

              _.toString(-0);
              // => '-0'

              _.toString([1, 2, 3]);
              // => '1,2,3'`
    }
  },
  'Math': {
    '_.add': {
      description: '两个数相加。',
      introduced: '3.4.0',
      params: [
        'augend (number): 相加的第一个数。',
        'addend (number): 相加的第二个数。'
      ],
      returnValue: '(number): 返回总和。',
      demo: ` _.add(6, 4);
              // => 10`
    },
    '_.ceil': {
      description: '根据 precision（精度） 向上舍入 number。（ precision（精度）可以理解为保留几位小数。）',
      introduced: '3.10.0',
      params: [
        'number (number): 要向上舍入的值。',
        '[precision=0] (number): 向上舍入的的精度。'
      ],
      returnValue: '(number): 返回向上舍入的值。',
      demo: ` _.ceil(4.006);
              // => 5

              _.ceil(6.004, 2);
              // => 6.01

              _.ceil(6040, -2);
              // => 6100`
    },
    '_.divide': {
      description: '两个数相除。',
      introduced: '4.7.0',
      params: [
        'dividend (number): 相除的第一个数。',
        'divisor (number): 相除的第二个数。'
      ],
      returnValue: '(number): 返回商数。',
      demo: ` _.divide(6, 4);
              // => 1.5`
    },
    '_.floor': {
      description: '根据 precision（精度） 向下舍入 number。（precision（精度）可以理解为保留几位小数。）',
      introduced: '3.10.0',
      params: [
        'number (number): 要向下舍入的值。',
        '[precision=0] (number): 向下舍入的精度。'
      ],
      returnValue: '(number): 返回向下舍入的值。',
      demo: ` _.floor(4.006);
              // => 4

              _.floor(0.046, 2);
              // => 0.04

              _.floor(4060, -2);
              // => 4000`
    },
    '_.max': {
      description: '计算 array 中的最大值。 如果 array 是 空的或者假值将会返回 undefined。',
      introduced: '0.1.0',
      params: [
        'array (Array): 要迭代的数组。'
      ],
      returnValue: '(*): 返回最大的值。',
      demo: ` _.max([4, 2, 8, 6]);
              // => 8

              _.max([]);
              // => undefined`
    },
    '_.maxBy': {
      description: '这个方法类似 _.max 除了它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准。 iteratee 会调用1个参数: (value) 。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要迭代的数组。',
        '[iteratee=_.identity] (Function): 调用每个元素的迭代函数。'
      ],
      returnValue: '(*): 返回最大的值。',
      demo: ` var objects = [{ 'n': 1 }, { 'n': 2 }];

              _.maxBy(objects, function(o) { return o.n; });
              // => { 'n': 2 }

              // The '_.property' iteratee shorthand.
              _.maxBy(objects, 'n');
              // => { 'n': 2 }`
    },
    '_.mean': {
      description: '计算 array 的平均值。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要迭代的数组。'
      ],
      returnValue: '(number): 返回平均值。',
      demo: ` _.mean([4, 2, 8, 6]);
              // => 5`
    },
    '_.meanBy': {
      description: '这个方法类似 _.mean， 除了它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准。 iteratee 会调用1个参数: (value) 。',
      introduced: '4.7.0',
      params: [
        'array (Array): 要迭代的数组。',
        '[iteratee=_.identity] (Function): 调用每个元素的迭代函数。'
      ],
      returnValue: '(number): 返回平均值。',
      demo: ` var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

              _.meanBy(objects, function(o) { return o.n; });
              // => 5

              // The '_.property' iteratee shorthand.
              _.meanBy(objects, 'n');
              // => 5`
    },
    '_.min': {
      description: '计算 array 中的最小值。 如果 array 是 空的或者假值将会返回 undefined。',
      introduced: '0.1.0',
      params: [
        'array (Array): 要迭代的数组。'
      ],
      returnValue: '(*): 返回最小的值。',
      demo: ` _.min([4, 2, 8, 6]);
              // => 2

              _.min([]);
              // => undefined`
    },
    '_.minBy': {
      description: '这个方法类似 _.min 除了它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准。 iteratee 会调用1个参数: (value) 。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要迭代的数组。',
        '[iteratee=_.identity] (Function): 调用每个元素的迭代函数。'
      ],
      returnValue: '(*): 返回最小的值。',
      demo: ` var objects = [{ 'n': 1 }, { 'n': 2 }];

              _.minBy(objects, function(o) { return o.n; });
              // => { 'n': 1 }

              // The '_.property' iteratee shorthand.
              _.minBy(objects, 'n');
              // => { 'n': 1 }`
    },
    '_.multiply': {
      description: '两个数相乘。',
      introduced: '4.7.0',
      params: [
        'augend (number): 相乘的第一个数。',
        'addend (number): 相乘的第二个数。'
      ],
      returnValue: '(number): 返回乘积。',
      demo: ` _.multiply(6, 4);
              // => 24`
    },
    '_.round': {
      description: '根据 precision（精度） 四舍五入 number。',
      introduced: '3.10.0',
      params: [
        'number (number): 要四舍五入的数字。',
        '[precision=0] (number): 四舍五入的精度。'
      ],
      returnValue: '(number): 返回四舍五入的数字。',
      demo: ` _.round(4.006);
              // => 4

              _.round(4.006, 2);
              // => 4.01

              _.round(4060, -2);
              // => 4100`
    },
    '_.subtract': {
      description: '两数相减。',
      introduced: '4.0.0',
      params: [
        'minuend (number): 相减的第一个数。',
        'subtrahend (number): 相减的第二个数。'
      ],
      returnValue: '(number): 返回差。',
      demo: ` _.subtract(6, 4);
              // => 2`
    },
    '_.sum': {
      description: '计算 array 中值的总和.',
      introduced: '3.4.0',
      params: [
        'array (Array): 要迭代的数组。'
      ],
      returnValue: '(number): 返回总和。',
      demo: ` _.sum([4, 2, 8, 6]);
              // => 20`
    },
    '_.sumBy': {
      description: '这个方法类似 _.summin 除了它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准。 iteratee 会调用1个参数: (value) 。',
      introduced: '4.0.0',
      params: [
        'array (Array): 要迭代的数组。',
        '[iteratee=_.identity] (Function): 调用每个元素的迭代函数。'
      ],
      returnValue: '(number): 返回总和。',
      demo: ` var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

              _.sumBy(objects, function(o) { return o.n; });
              // => 20

              // The '_.property' iteratee shorthand.
              _.sumBy(objects, 'n');
              // => 20`
    }
  },
  'Number': {
    '_.clamp': {
      description: '返回限制在 lower 和 upper 之间的值。',
      introduced: '4.0.0',
      params: [
        'number (number): 被限制的值。',
        '[lower] (number): 下限。',
        'upper (number): 上限。'
      ],
      returnValue: '(number): 返回被限制的值。',
      demo: ` _.clamp(-10, -5, 5);
              // => -5

              _.clamp(10, -5, 5);
              // => 5`
    },
    '_.inRange': {
      description: '检查 n 是否在 start 与 end 之间，但不包括 end。 如果 end 没有指定，那么 start 设置为0。 如果 start 大于 end，那么参数会交换以便支持负范围。',
      introduced: '3.3.0',
      params: [
        'number (number): 要检查的值。',
        '[start=0] (number): 开始范围。',
        'end (number): 结束范围。'
      ],
      returnValue: '(boolean): 如果number在范围内 ，那么返回true，否则返回 false。',
      demo: ` _.inRange(3, 2, 4);
              // => true

              _.inRange(4, 8);
              // => true

              _.inRange(4, 2);
              // => false

              _.inRange(2, 2);
              // => false

              _.inRange(1.2, 2);
              // => true

              _.inRange(5.2, 4);
              // => false

              _.inRange(-3, -2, -6);
              // => true`
    },
    '_.random': {
      description: '产生一个包括 lower 与 upper 之间的数。 如果只提供一个参数返回一个0到提供数之间的数。 如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。',
      note: '注意: JavaScript 遵循 IEEE-754 标准处理无法预料的浮点数结果。',
      introduced: '0.7.0',
      params: [
        '[lower=0] (number): 下限。',
        '[upper=1] (number): 上限。',
        '[floating] (boolean): 指定是否返回浮点数。'
      ],
      returnValue: '(number): 返回随机数。',
      demo: ` _.random(0, 5);
              // => an integer between 0 and 5

              _.random(5);
              // => also an integer between 0 and 5

              _.random(5, true);
              // => a floating-point number between 0 and 5

              _.random(1.2, 5.2);
              // => a floating-point number between 1.2 and 5.2`
    }
  },
  'Object': {
    '_.assign': {
      description: '分配来源对象的可枚举属性到目标对象上。 来源对象的应用规则是从左到右，随后的下一个对象的属性会覆盖上一个对象的属性。',
      note: '注意: 这方法会改变 object，参考自 Object.assign.',
      introduced: '0.10.0',
      params: [
        'object (Object): 目标对象。',
        '[sources] (...Object): 来源对象。'
      ],
      returnValue: '(Object): 返回 object.',
      demo: ` function Foo() {
                this.a = 1;
              }

              function Bar() {
                this.c = 3;
              }

              Foo.prototype.b = 2;
              Bar.prototype.d = 4;

              _.assign({ 'a': 0 }, new Foo, new Bar);
              // => { 'a': 1, 'c': 3 }`
    },
    '_.assignIn': {
      description: '这个方法类似 _.assign， 除了它会遍历并继承来源对象的属性。',
      note: '注意: 这方法会改变 object。',
      introduced: '4.0.0',
      aliases: '_.extend',
      params: [
        'object (Object): 目标对象。',
        '[sources] (...Object): 来源对象。'
      ],
      returnValue: '(Object): 返回 object。',
      demo: ` function Foo() {
                this.a = 1;
              }

              function Bar() {
                this.c = 3;
              }

              Foo.prototype.b = 2;
              Bar.prototype.d = 4;

              _.assignIn({ 'a': 0 }, new Foo, new Bar);
              // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }`
    },
    '_.assignInWith': {
      description: '这个方法类似 _.assignIn， 除了它接受一个 customizer ，被调用以产生所分配的值。 如果 customizer 返回 undefined 将会由分配处理方法代替。 customizer 会传入5个参数： (objValue, srcValue, key, object, source)。',
      note: '注意：这方法会改变 object。',
      introduced: '4.0.0',
      aliases: '_.extendWith',
      params: [
        'object (Object): 目标对象。',
        'sources (...Object): 来源对象。',
        '[customizer] (Function): 这个函数用来自定义分配的值。'
      ],
      returnValue: '(Object): 返回 object。',
      demo: ` function customizer(objValue, srcValue) {
                return _.isUndefined(objValue) ? srcValue : objValue;
              }

              var defaults = _.partialRight(_.assignInWith, customizer);

              defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
              // => { 'a': 1, 'b': 2 }`
    },
    '_.assignWith': {
      description: '这个方法类似 _.assign ， 除了它接受一个 customizer 决定如何分配值。 如果customizer返回 undefined 将会由分配处理方法代替。customizer 会传入5个参数： (objValue, srcValue, key, object, source)。',
      note: '注意: 这方法会改变 object.',
      introduced: '4.0.0',
      params: [
        'object (Object): 目标对象。',
        'sources (...Object): 来源对象。',
        '[customizer] (Function): 这个函数用来自定义分配的值。'
      ],
      returnValue: '(Object): 返回 object.',
      demo: ` function customizer(objValue, srcValue) {
                return _.isUndefined(objValue) ? srcValue : objValue;
              }

              var defaults = _.partialRight(_.assignWith, customizer);

              defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
              // => { 'a': 1, 'b': 2 }`
    },
    '_.at': {
      description: '创建一个数组，值来自 object 的paths路径相应的值。',
      introduced: '1.0.0',
      params: [
        'object (Object): 要迭代的对象。',
        '[paths] (...(string|string[])): 要获取的对象的元素路径，单独指定或者指定在数组中。'
      ],
      returnValue: '(Array): 返回选中值的数组。',
      demo: ` var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

              _.at(object, ['a[0].b.c', 'a[1]']);
              // => [3, 4]`
    },
    '_.create': {
      description: '创建一个继承 prototype 的对象。 如果提供了 prototype，它的可枚举属性会被分配到创建的对象上。',
      introduced: '2.3.0',
      params: [
        'prototype (Object): 要继承的对象。',
        '[properties] (Object): 待分配的属性。'
      ],
      returnValue: '(Object): 返回新对象。',
      demo: ` function Shape() {
                this.x = 0;
                this.y = 0;
              }

              function Circle() {
                Shape.call(this);
              }

              Circle.prototype = _.create(Shape.prototype, {
                'constructor': Circle
              });

              var circle = new Circle;
              circle instanceof Circle;
              // => true

              circle instanceof Shape;
              // => true`
    },
    '_.defaults': {
      description: '分配来源对象的可枚举属性到目标对象所有解析为 undefined 的属性上。 来源对象从左到右应用。 一旦设置了相同属性的值，后续的将被忽略掉。',
      note: '注意: 这方法会改变 object.',
      introduced: '0.1.0',
      params: [
        'object (Object): 目标对象。',
        '[sources] (...Object): 来源对象。'
      ],
      returnValue: '(Object): 返回 object。',
      demo: ` _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
              // => { 'a': 1, 'b': 2 }`
    },
    '_.defaultsDeep': {
      description: '这个方法类似 _.defaults，除了它会递归分配默认属性。',
      note: '注意: 这方法会改变 object.',
      introduced: '3.10.0',
      params: [
        'object (Object): 目标对象。',
        '[sources] (...Object): 来源对象。'
      ],
      returnValue: '(Object): 返回 object。',
      demo: ` _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
              // => { 'a': { 'b': 2, 'c': 3 } }`
    },
    '_.findKey': {
      description: '这个方法类似 _.find 。 除了它返回最先被 predicate 判断为真值的元素 key，而不是元素本身。',
      introduced: '1.1.0',
      params: [
        'object (Object): 需要检索的对象。',
        '[predicate=_.identity] (Function): 每次迭代时调用的函数。'
      ],
      returnValue: '(*): 返回匹配的 key，否则返回 undefined。',
      demo: ` var users = {
                'barney':  { 'age': 36, 'active': true },
                'fred':    { 'age': 40, 'active': false },
                'pebbles': { 'age': 1,  'active': true }
              };

              _.findKey(users, function(o) { return o.age < 40; });
              // => 'barney' (iteration order is not guaranteed)

              // The '_.matches' iteratee shorthand.
              _.findKey(users, { 'age': 1, 'active': true });
              // => 'pebbles'

              // The '_.matchesProperty' iteratee shorthand.
              _.findKey(users, ['active', false]);
              // => 'fred'

              // The '_.property' iteratee shorthand.
              _.findKey(users, 'active');
              // => 'barney'`
    },
    '_.findLastKey': {
      description: '这个方法类似_.findKey。 不过它是反方向开始遍历的。',
      introduced: '2.0.0',
      params: [
        'object (Object): 需要检索的对象。',
        '[predicate=_.identity] (Function): 每次迭代时调用的函数。'
      ],
      returnValue: '(*): 返回匹配的 key，否则返回 undefined.',
      demo: ` var users = {
                'barney':  { 'age': 36, 'active': true },
                'fred':    { 'age': 40, 'active': false },
                'pebbles': { 'age': 1,  'active': true }
              };

              _.findLastKey(users, function(o) { return o.age < 40; });
              // => returns 'pebbles' assuming '_.findKey' returns 'barney'

              // The '_.matches' iteratee shorthand.
              _.findLastKey(users, { 'age': 36, 'active': true });
              // => 'barney'

              // The '_.matchesProperty' iteratee shorthand.
              _.findLastKey(users, ['active', false]);
              // => 'fred'

              // The '_.property' iteratee shorthand.
              _.findLastKey(users, 'active');
              // => 'pebbles'`
    },
    '_.forIn': {
      description: '使用 iteratee 遍历对象的自身和继承的可枚举属性。 iteratee 会传入3个参数：(value, key, object)。 如果返回 false，iteratee 会提前退出遍历。',
      introduced: '0.3.0',
      params: [
        'object (Object): 要遍历的对象。',
        '[iteratee=_.identity] (Function): 每次迭代时调用的函数。'
      ],
      returnValue: '(Object): 返回 object。',
      demo: ` function Foo() {
                this.a = 1;
                this.b = 2;
              }

              Foo.prototype.c = 3;

              _.forIn(new Foo, function(value, key) {
                console.log(key);
              });
              // => Logs 'a', 'b', then 'c' (无法保证遍历的顺序)。`
    },
    '_.forInRight': {
      description: '这个方法类似 _.forIn。 除了它是反方向开始遍历object的。',
      introduced: '2.0.0',
      params: [
        'object (Object): 要遍历的对象。',
        '[iteratee=_.identity] (Function): 每次迭代时调用的函数。'
      ],
      returnValue: '(Object): 返回 object。',
      demo: ` function Foo() {
                this.a = 1;
                this.b = 2;
              }

              Foo.prototype.c = 3;

              _.forInRight(new Foo, function(value, key) {
                console.log(key);
              });
              // => 输出 'c', 'b', 然后 'a'， '_.forIn' 会输出 'a', 'b', 然后 'c'。`
    },
    '_.forOwn': {
      description: '使用 iteratee 遍历自身的可枚举属性。 iteratee 会传入3个参数：(value, key, object)。 如果返回 false，iteratee 会提前退出遍历。',
      introduced: '0.3.0',
      params: [
        'object (Object): 要遍历的对象。',
        '[iteratee=_.identity] (Function): 每次迭代时调用的函数。'
      ],
      returnValue: '(Object): 返回 object。',
      demo: ` function Foo() {
                this.a = 1;
                this.b = 2;
              }

              Foo.prototype.c = 3;

              _.forOwn(new Foo, function(value, key) {
                console.log(key);
              });
              // => 输出 'a' 然后 'b' (无法保证遍历的顺序)。`
    },
    '_.forOwnRight': {
      description: '这个方法类似 _.forOwn。 除了它是反方向开始遍历object的。',
      introduced: '2.0.0',
      params: [
        'object (Object): 要遍历的对象。',
        '[iteratee=_.identity] (Function): 每次迭代时调用的函数。'
      ],
      returnValue: '(Object): 返回 object。',
      demo: ` function Foo() {
                this.a = 1;
                this.b = 2;
              }

              Foo.prototype.c = 3;

              _.forOwnRight(new Foo, function(value, key) {
                console.log(key);
              });
              // =>  输出 'b' 然后 'a'， '_.forOwn' 会输出 'a' 然后 'b'`
    },
    '_.functions': {
      description: '创建一个函数属性名称的数组，函数属性名称来自object对象自身可枚举属性。',
      introduced: '0.1.0',
      params: [
        'object (Object): 要检查的对象。'
      ],
      returnValue: '(Array): 返回函数名。',
      demo: ` function Foo() {
                this.a = _.constant('a');
                this.b = _.constant('b');
              }

              Foo.prototype.c = _.constant('c');

              _.functions(new Foo);
              // => ['a', 'b']`
    },
    '_.functionsIn': {
      description: '创建一个函数属性名称的数组，函数属性名称来自object对象自身和继承的可枚举属性。',
      introduced: '4.0.0',
      params: [
        'object (Object): 要检查的对象。'
      ],
      returnValue: '(Array): 返回函数名。',
      demo: ` function Foo() {
                this.a = _.constant('a');
                this.b = _.constant('b');
              }

              Foo.prototype.c = _.constant('c');

              _.functionsIn(new Foo);
              // => ['a', 'b', 'c']`
    },
    '_.get': {
      description: '根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。',
      introduced: '3.7.0',
      params: [
        'object (Object): 要检索的对象。',
        'path (Array|string): 要获取属性的路径。',
        '[defaultValue] (*): 如果解析值是 undefined ，这值会被返回。'
      ],
      returnValue: '(*): 返回解析的值。',
      demo: ` var object = { 'a': [{ 'b': { 'c': 3 } }] };

              _.get(object, 'a[0].b.c');
              // => 3

              _.get(object, ['a', '0', 'b', 'c']);
              // => 3

              _.get(object, 'a.b.c', 'default');
              // => 'default'`
    },
    '_.has': {
      description: '检查 path 是否是object对象的直接属性。',
      introduced: '0.1.0',
      params: [
        'object (Object): 要检索的对象。',
        'path (Array|string): 要检查的路径path。'
      ],
      returnValue: '(boolean): 如果path存在，那么返回 true ，否则返回 false。',
      demo: ` var object = { 'a': { 'b': 2 } };
              var other = _.create({ 'a': _.create({ 'b': 2 }) });

              _.has(object, 'a');
              // => true

              _.has(object, 'a.b');
              // => true

              _.has(object, ['a', 'b']);
              // => true

              _.has(other, 'a');
              // => false`
    },
    '_.hasIn': {
      description: '检查 path 是否是object对象的直接或继承属性。',
      introduced: '4.0.0',
      params: [
        'object (Object): 要检索的对象。',
        'path (Array|string): 要检查的路径path。'
      ],
      returnValue: '(boolean): 如果path存在，那么返回 true ，否则返回 false。',
      demo: ` var object = _.create({ 'a': _.create({ 'b': 2 }) });

              _.hasIn(object, 'a');
              // => true

              _.hasIn(object, 'a.b');
              // => true

              _.hasIn(object, ['a', 'b']);
              // => true

              _.hasIn(object, 'b');
              // => false`
    },
    '_.invert': {
      description: '创建一个object键值倒置后的对象。 如果 object 有重复的值，后面的值会覆盖前面的值。',
      introduced: '0.7.0',
      params: [
        'object (Object): 要键值倒置对象。'
      ],
      returnValue: '(Object): 返回新的键值倒置后的对象。',
      demo: ` var object = { 'a': 1, 'b': 2, 'c': 1 };

              _.invert(object);
              // => { '1': 'c', '2': 'b' }`
    },
    '_.invertBy': {
      description: '这个方法类似 _.invert，除了倒置对象 是 collection（集合）中的每个元素经过 iteratee（迭代函数） 处理后返回的结果。每个反转键相应反转的值是一个负责生成反转值key的数组。iteratee 会传入3个参数：(value) 。',
      introduced: '4.1.0',
      params: [
        'object (Object): 要键值倒置对象。',
        '[iteratee=_.identity] (Function): 每次迭代时调用的函数。'
      ],
      returnValue: '(Object): 返回新的键值倒置后的对象。',
      demo: ` var object = { 'a': 1, 'b': 2, 'c': 1 };

              _.invertBy(object);
              // => { '1': ['a', 'c'], '2': ['b'] }

              _.invertBy(object, function(value) {
                return 'group' + value;
              });
              // => { 'group1': ['a', 'c'], 'group2': ['b'] }`
    },
    '_.invoke': {
      description: '调用object对象path上的方法。',
      introduced: '4.0.0',
      params: [
        'object (Object): 要检索的对象。',
        'path (Array|string): 用来调用的方法路径。',
        '[args] (...*): 调用的方法的参数。'
      ],
      returnValue: '(*): 返回调用方法的结果。',
      demo: ` var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };

              _.invoke(object, 'a[0].b.c.slice', 1, 3);
              // => [2, 3]`
    },
    '_.keys': {
      description: '创建一个 object 的自身可枚举属性名为数组。',
      note: '注意: 非对象的值会被强制转换为对象，查看 ES spec 了解详情。',
      introduced: '0.1.0',
      params: [
        'object (Object): 要检索的对象。'
      ],
      returnValue: '(Array): 返回包含属性名的数组。',
      demo: ` function Foo() {
                this.a = 1;
                this.b = 2;
              }

              Foo.prototype.c = 3;

              _.keys(new Foo);
              // => ['a', 'b'] (iteration order is not guaranteed)

              _.keys('hi');
              // => ['0', '1']`
    },
    '_.keysIn': {
      description: '创建一个 object 自身 和 继承的可枚举属性名为数组。',
      note: '注意: 非对象的值会被强制转换为对象。',
      introduced: '3.0.0',
      params: [
        'object (Object): 要检索的对象。'
      ],
      returnValue: '(Array): 返回包含属性名的数组。',
      demo: ` function Foo() {
                this.a = 1;
                this.b = 2;
              }

              Foo.prototype.c = 3;

              _.keysIn(new Foo);
              // => ['a', 'b', 'c'] (iteration order is not guaranteed)`
    },
    '_.mapKeys': {
      description: '反向版 _.mapValues。 这个方法创建一个对象，对象的值与object相同，并且 key 是通过 iteratee 运行 object 中每个自身可枚举属性名字符串 产生的。iteratee调用三个参数： (value, key, object)。',
      introduced: '3.8.0',
      params: [
        'object (Object): 要遍历的对象。',
        '[iteratee=_.identity] (Function): 每次迭代时调用的函数。'
      ],
      returnValue: '(Object): 返回映射后的新对象。',
      demo: ` _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
                return key + value;
              });
              // => { 'a1': 1, 'b2': 2 }`
    },
    '_.mapValues': {
      description: '创建一个对象，这个对象的key与object对象相同，值是通过 iteratee 运行 object 中每个自身可枚举属性名字符串产生的。 iteratee调用三个参数： (value, key, object)。',
      introduced: '2.4.0',
      params: [
        'object (Object): 要遍历的对象。',
        '[iteratee=_.identity] (Function): 每次迭代时调用的函数。'
      ],
      returnValue: '(Object): 返回映射后的新对象。',
      demo: ` var users = {
                'fred':    { 'user': 'fred',    'age': 40 },
                'pebbles': { 'user': 'pebbles', 'age': 1 }
              };

              _.mapValues(users, function(o) { return o.age; });
              // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)

              // The '_.property' iteratee shorthand.
              _.mapValues(users, 'age');
              // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)`
    },
    '_.merge': {
      description: '该方法类似_.assign， 除了它递归合并 sources 来源对象自身和继承的可枚举属性到 object 目标对象。如果目标值存在，被解析为undefined的sources 来源对象属性将被跳过。数组和普通对象会递归合并，其他对象和值会被直接分配覆盖。源对象从从左到右分配。后续的来源对象属性会覆盖之前分配的属性。',
      note: '这方法会改变对象 object.',
      introduced: '0.5.0',
      params: [
        'object (Object): 目标对象。',
        '[sources] (...Object): 来源对象。'
      ],
      returnValue: '(Object): 返回 object.',
      demo: ` var object = {
                'a': [{ 'b': 2 }, { 'd': 4 }]
              };

              var other = {
                'a': [{ 'c': 3 }, { 'e': 5 }]
              };

              _.merge(object, other);
              // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }`
    },
    '_.mergeWith': {
      description: '该方法类似_.merge，除了它接受一个 customizer，调用以产生目标对象和来源对象属性的合并值。如果customizer 返回 undefined，将会由合并处理方法代替。 customizer调用与7个参数：(objValue, srcValue, key, object, source, stack)。',
      note: '这方法会改变对象 object.',
      introduced: '4.0.0',
      params: [
        'object (Object): 目标对象。',
        '[sources] (...Object): 来源对象。',
        'customizer (Function): 这个函数定制合并值。'
      ],
      returnValue: '(Object): 返回 object。',
      demo: ` function customizer(objValue, srcValue) {
                if (_.isArray(objValue)) {
                  return objValue.concat(srcValue);
                }
              }

              var object = { 'a': [1], 'b': [2] };
              var other = { 'a': [3], 'b': [4] };

              _.mergeWith(object, other, customizer);
              // => { 'a': [1, 3], 'b': [2, 4] }`
    },
    '_.omit': {
      description: '反向版 _.pick; 这个方法一个对象，这个对象由忽略属性之外的object自身和继承的可枚举属性组成。（愚人码头注：可以理解为删除object对象的属性）。',
      introduced: '0.1.0',
      params: [
        'object (Object): 来源对象。',
        '[props] (...(string|string[])): 要被忽略的属性。（愚人码头注：单独指定或指定在数组中。）'
      ],
      returnValue: '(Object): 返回新对象。',
      demo: ` var object = { 'a': 1, 'b': '2', 'c': 3 };

              _.omit(object, ['a', 'c']);
              // => { 'b': '2' }`
    },
    '_.omitBy': {
      description: '反向版 _.pickBy；这个方法一个对象，这个对象忽略 predicate（断言函数）判断不是真值的属性后，object自身和继承的可枚举属性组成。predicate调用与2个参数：(value, key)。',
      introduced: '4.0.0',
      params: [
        'object (Object): 来源对象。',
        '[predicate=_.identity] (Function): 调用每一个属性的函数。'
      ],
      returnValue: '(Object): 返回新对象。',
      demo: ` var object = { 'a': 1, 'b': '2', 'c': 3 };

              _.omitBy(object, _.isNumber);
              // => { 'b': '2' }`
    },
    '_.pick': {
      description: '创建一个从 object 中选中的属性的对象。',
      introduced: '0.1.0',
      params: [
        'object (Object): 来源对象。',
        '[props] (...(string|string[])): 要被忽略的属性。（愚人码头注：单独指定或指定在数组中。）'
      ],
      returnValue: '(Object): 返回新对象。',
      demo: ` var object = { 'a': 1, 'b': '2', 'c': 3 };

              _.pick(object, ['a', 'c']);
              // => { 'a': 1, 'c': 3 }`
    },
    '_.pickBy': {
      description: '创建一个对象，这个对象组成为从 object 中经 predicate 判断为真值的属性。 predicate调用2个参数：(value, key)。',
      introduced: '4.0.0',
      params: [
        'object (Object): 来源对象。',
        '[predicate=_.identity] (Function): 调用每一个属性的函数。'
      ],
      returnValue: '(Object): 返回新对象。',
      demo: ` var object = { 'a': 1, 'b': '2', 'c': 3 };

              _.pickBy(object, _.isNumber);
              // => { 'a': 1, 'c': 3 }`
    },
    '_.result': {
      description: '这个方法类似 _.get， 除了如果解析到的值是一个函数的话，就绑定 this 到这个函数并返回执行后的结果。',
      introduced: '0.1.0',
      params: [
        'object (Object): 要检索的对象。',
        'path (Array|string): 要解析的属性路径。',
        '[defaultValue] (*): 如果值解析为 undefined，返回这个值。'
      ],
      returnValue: '(*): 返回解析后的值。',
      demo: ` var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };

              _.result(object, 'a[0].b.c1');
              // => 3

              _.result(object, 'a[0].b.c2');
              // => 4

              _.result(object, 'a[0].b.c3', 'default');
              // => 'default'

              _.result(object, 'a[0].b.c3', _.constant('default'));
              // => 'default'`
    },
    '_.set': {
      description: '设置 object对象中对应 path 属性路径上的值，如果path不存在，则创建。 缺少的索引属性会创建为数组，而缺少的属性会创建为对象。 使用 _.setWith 定制path创建。',
      note: '这个方法会改变 object。',
      introduced: '3.7.0',
      params: [
        'object (Object): 要修改的对象。',
        'path (Array|string): 要设置的对象路径。',
        'value (*): 要设置的值。'
      ],
      returnValue: '(Object): 返回 object。',
      demo: ` var object = { 'a': [{ 'b': { 'c': 3 } }] };

              _.set(object, 'a[0].b.c', 4);
              console.log(object.a[0].b.c);
              // => 4

              _.set(object, ['x', '0', 'y', 'z'], 5);
              console.log(object.x[0].y.z);
              // => 5`
    },
    '_.setWith': {
      description: '这个方法类似_.set，除了它接受一个 customizer，调用生成对象的 path。 如果 customizer 返回 undefined 将会有它的处理方法代替。 customizer 调用3个参数： (nsValue, key, nsObject)。',
      note: '注意: 这个方法会改变 object.',
      introduced: '4.0.0',
      params: [
        'object (Object): 要修改的对象。',
        'path (Array|string): 要设置的对象路径。',
        'value (*): 要设置的值。',
        '[customizer] (Function): 这个函数用来定制分配的值。'
      ],
      returnValue: '(Object): 返回 object。',
      demo: ` var object = {};

              _.setWith(object, '[0][1]', 'a', Object);
              // => { '0': { '1': 'a' } }`
    },
    '_.toPairs': {
      description: '创建一个object对象自身可枚举属性的键值对数组。这个数组可以通过_.fromPairs撤回。如果object 是 map 或 set，返回其条目。',
      introduced: '4.0.0',
      aliases: '_.entries',
      params: [
        'object (Object): 要检索的对象。'
      ],
      returnValue: '(Array): 返回键值对的数组。',
      demo: ` function Foo() {
                this.a = 1;
                this.b = 2;
              }

              Foo.prototype.c = 3;

              _.toPairs(new Foo);
              // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)`
    },
    '_.toPairsIn': {
      description: '创建一个object对象自身和继承的可枚举属性的键值对数组。这个数组可以通过_.fromPairs撤回。如果object 是 map 或 set，返回其条目。',
      introduced: '4.0.0',
      aliases: '_.entriesIn',
      params: [
        'object (Object): 要检索的对象。'
      ],
      returnValue: '(Array): 返回键值对的数组。',
      demo: ` function Foo() {
                this.a = 1;
                this.b = 2;
              }

              Foo.prototype.c = 3;

              _.toPairsIn(new Foo);
              // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)`
    },
    '_.transform': {
      description: '_.reduce的替代方法;此方法将转换object对象为一个新的accumulator对象，结果来自iteratee处理自身可枚举的属性。 每次调用可能会改变 accumulator 对象。如果不提供accumulator，将使用与[[Prototype]]相同的新对象。iteratee调用4个参数：(accumulator, value, key, object)。如果返回 false，iteratee 会提前退出。',
      introduced: '1.3.0',
      params: [
        'object (Object): 要遍历的对象',
        '[iteratee=_.identity] (Function): 每次迭代时调用的函数。',
        '[accumulator] (*): 定制叠加的值。'
      ],
      returnValue: '(*): 返回叠加后的值。',
      demo: ` _.transform([2, 3, 4], function(result, n) {
                result.push(n *= n);
                return n % 2 == 0;
              }, []);
              // => [4, 9]

              _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
                (result[value] || (result[value] = [])).push(key);
              }, {});
              // => { '1': ['a', 'c'], '2': ['b'] }`
    },
    '_.unset': {
      description: '移除object对象 path 路径上的属性。',
      note: '注意: 这个方法会改变源对象 object。',
      introduced: '4.0.0',
      params: [
        'object (Object): 要修改的对象。',
        'path (Array|string): 要移除的对象路径。'
      ],
      returnValue: '(boolean): 如果移除成功，那么返回 true ，否则返回 false。',
      demo: ` var object = { 'a': [{ 'b': { 'c': 7 } }] };
              _.unset(object, 'a[0].b.c');
              // => true

              console.log(object);
              // => { 'a': [{ 'b': {} }] };

              _.unset(object, ['a', '0', 'b', 'c']);
              // => true

              console.log(object);
              // => { 'a': [{ 'b': {} }] };`
    },
    '_.update': {
      description: '该方法类似_.set，除了接受updater以生成要设置的值。使用 _.updateWith来自定义生成的新path。updater调用1个参数：(value)。',
      note: '这个方法会改变 object。',
      introduced: '4.6.0',
      params: [
        'object (Object): 要修改的对象。',
        'path (Array|string): 要设置属性的路径。',
        'updater (Function): 用来生成设置值的函数。'
      ],
      returnValue: '(Object): 返回 object 。',
      demo: ` var object = { 'a': [{ 'b': { 'c': 3 } }] };

              _.update(object, 'a[0].b.c', function(n) { return n * n; });
              console.log(object.a[0].b.c);
              // => 9

              _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
              console.log(object.x[0].y.z);
              // => 0`
    },
    '_.updateWith': {
      description: '该方法类似_.update，不同之处在于它接受customizer，调用来生成新的对象的path。如果customizer返回undefined，路径创建由该方法代替。customizer调用有三个参数：(nsValue, key, nsObject)。',
      note: '这个方法会改变 object.',
      introduced: '4.6.0',
      params: [
        'object (Object): 要修改的对象。',
        'path (Array|string): 要设置属性的路径。',
        ' updater (Function): 用来生成设置值的函数。',
        '[customizer] (Function): 用来自定义分配值的函数。'
      ],
      returnValue: '(Object): 返回 object.',
      demo: ` var object = {};

              _.updateWith(object, '[0][1]', _.constant('a'), Object);
              // => { '0': { '1': 'a' } }`
    },
    '_.values': {
      description: '创建 object 自身可枚举属性的值为数组。',
      introduced: '0.1.0',
      params: [
        'object (Object): 要检索的对象。'
      ],
      returnValue: '(Array): 返回对象属性的值的数组。',
      demo: ` function Foo() {
                this.a = 1;
                this.b = 2;
              }

              Foo.prototype.c = 3;

              _.values(new Foo);
              // => [1, 2] (无法保证遍历的顺序)

              _.values('hi');
              // => ['h', 'i']`
    },
    '_.valuesIn': {
      description: '创建 object 自身和继承的可枚举属性的值为数组.',
      note: '注意: 非对象的值会强制转换为对象。',
      introduced: '3.0.0',
      params: [
        'object (Object): 要检索的对象。'
      ],
      returnValue: '(Array): 返回对象属性的值的数组。',
      demo: ` function Foo() {
                this.a = 1;
                this.b = 2;
              }

              Foo.prototype.c = 3;

              _.valuesIn(new Foo);
              // => [1, 2, 3] (无法保证遍历的顺序)`
    }
  },
  Seq: {
    '_': {
      description: `创建一个lodash对象，包装value后的对象启用隐式方法链。返回的数组、集合、方法相互之间能够链式调用。检索唯一值或返回原始值会自动解除链条并返回计算后的值，否则需要调用 _#value 方法解除链(即获得计算结果)。

                    显式链式调用，在任何情况下需要先用 _#value 解除链后，才能使用 _.chain 开启。

                          链式方法是惰性计算的，直到隐式或者显式调用了 _#value 才会执行计算。

                          惰性计算接受几种支持 shortcut fusion 的方法， shortcut fusion 是一种通过合并链式 iteratee 调用从而大大降低迭代的次数以提高执行性能的方式。 部分链有资格 shortcut fusion，如果它至少有超过200个元素的数组和任何只接受一个参数的 iteratees。 触发的方式是任何一个 shortcut fusion 有了变化。

                          链式方法支持定制版本，只要 _#value 包含或者间接包含在版本中。

                          除了 lodash 的自身方法，包装后的对象还支持 Array 和 String 的方法。

                          支持 Array 的方法: concat, join, pop, push, shift, sort, splice, 和 unshift

                    支持 String 的方法: replace 和 split

                    支持 shortcut fusion 的方法: at, compact, drop, dropRight, dropWhile, filter, find, findLast, head, initial, last, map, reject, reverse, slice, tail, take, takeRight, takeRightWhile, takeWhile, 和 toArray

                    支持 链式调用 的方法: after, ary, assign, assignIn, assignInWith, assignWith, at, before, bind, bindAll, bindKey, castArray, chain, chunk, commit, compact, concat, conforms, constant, countBy, create, curry, debounce, defaults, defaultsDeep, defer, delay, difference, differenceBy, differenceWith, drop, dropRight, dropRightWhile, dropWhile, extend, extendWith, fill, filter, flatMap, flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, flip, flow, flowRight, fromPairs, functions, functionsIn, groupBy, initial, intersection, intersectionBy, intersectionWith, invert, invertBy, invokeMap, iteratee, keyBy, keys, keysIn, map, mapKeys, mapValues, matches, matchesProperty, memoize, merge, mergeWith, method, methodOf, mixin, negate, nthArg, omit, omitBy, once, orderBy, over, overArgs, overEvery, overSome, partial, partialRight, partition, pick, pickBy, plant, property, propertyOf, pull, pullAll, pullAllBy, pullAllWith, pullAt, push, range, rangeRight, rearg, reject, remove, rest, reverse, sampleSize, set, setWith, shuffle, slice, sort, sortBy, splice, spread, tail, take, takeRight, takeRightWhile, takeWhile, tap, throttle, thru, toArray, toPairs, toPairsIn, toPath, toPlainObject, transform, unary, union, unionBy, unionWith, uniq, uniqBy, uniqWith, unset, unshift, unzip, unzipWith, update, updateWith, values, valuesIn, without, wrap, xor, xorBy, xorWith, zip, zipObject, zipObjectDeep, and zipWith

                    默认 不 支持 链式调用 的方法: add, attempt, camelCase, capitalize, ceil, clamp, clone, cloneDeep, cloneDeepWith, cloneWith, conformsTo, deburr, defaultTo, divide, each, eachRight, endsWith, eq, escape, escapeRegExp, every, find, findIndex, findKey, findLast, findLastIndex, findLastKey, first, floor, forEach, forEachRight, forIn, forInRight, forOwn, forOwnRight, get, gt, gte, has, hasIn, head, identity, includes, indexOf, inRange, invoke, isArguments, isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, isEqualWith, isError, isFinite, isFunction, isInteger, isLength, isMap, isMatch, isMatchWith, isNaN, isNative, isNil, isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet, isString, isUndefined, isTypedArray, isWeakMap, isWeakSet, join, kebabCase, last, lastIndexOf, lowerCase, lowerFirst, lt, lte, max, maxBy, mean, meanBy, min, minBy, multiply, noConflict, noop, now, nth, pad, padEnd, padStart, parseInt, pop, random, reduce, reduceRight, repeat, result, round, runInContext, sample, shift, size, snakeCase, some, sortedIndex, sortedIndexBy, sortedLastIndex, sortedLastIndexBy, startCase, startsWith, stubArray, stubFalse, stubObject, stubString, stubTrue, subtract, sum, sumBy, template, times, toFinite, toInteger, toJSON, toLength, toLower, toNumber, toSafeInteger, toString, toUpper, trim, trimEnd, trimStart, truncate, unescape, uniqueId, upperCase, upperFirst, value, and words`,
      params: [
        'value (*): 需要被包装为 lodash 实例的值。'
      ],
      returnValue: '(Object): 返回 lodash 包装后的实例。',
      demo: ` function square(n) {
                return n * n;
              }

              var wrapped = _([1, 2, 3]);

              // 返回未包装的值
              wrapped.reduce(_.add);
              // => 6

              // 返回链式包装的值
              var squares = wrapped.map(square);

              _.isArray(squares);
              // => false

              _.isArray(squares.value());
              // => true`
    },
    '_.chain': {
      description: '创建一个lodash包装实例，包装value以启用显式链模式。要解除链必须使用 _#value 方法。',
      introduced: '1.3.0',
      params: [
        'value(*): 要包装的值。'
      ],
      returnValue: '(Object): 返回 lodash 包装的实例。',
      demo: ` var users = [
                { 'user': 'barney',  'age': 36 },
                { 'user': 'fred',    'age': 40 },
                { 'user': 'pebbles', 'age': 1 }
              ];

              var youngest = _
                .chain(users)
                .sortBy('age')
                .map(function(o) {
                  return o.user + ' is ' + o.age;
                })
                .head()
                .value();
              // => 'pebbles is 1'`
    },
    '_.tap': {
      description: '这个方法调用一个 interceptor 并返回 value。interceptor调用1个参数： (value)。 该方法的目的是 进入 方法链序列以便修改中间结果。',
      introduced: '0.1.0',
      params: [
        'value (*): 提供给 interceptor 的值。',
        'interceptor (Function): 用来调用的函数。'
      ],
      returnValue: '(*): 返回 value.',
      demo: `_([1, 2, 3])
              .tap(function(array) {
              // 改变传入的数组
                array.pop();
              })
              .reverse()
              .value();
              // => [2, 1]`
    },
    '_.thru': {
      description: '这个方法类似_.tap， 除了它返回 interceptor 的返回结果。该方法的目的是"传递" 值到一个方法链序列以取代中间结果。',
      introduced: '3.0.0',
      params: [
        'value (*): 提供给 interceptor 的值。',
        'interceptor (Function): 用来调用的函数。'
      ],
      returnValue: '(*): 返回 interceptor 的返回结果。',
      demo: `_('  abc  ')
              .chain()
              .trim()
              .thru(function(value) {
                return [value];
              })
              .value();
              // => ['abc']`
    },
    '_.prototype': {
      description: '启用包装对象为 iterable。',
      introduced: '4.0.0',
      params: [],
      returnValue: '(Object): 返回包装对象。',
      demo: ` var wrapped = _([1, 2]);

              wrapped[Symbol.iterator]() === wrapped;
              // => true

              Array.from(wrapped);
              // => [1, 2]`
    },
    '_.prototype.at': {
      description: '这个方法是 _.at 的包装版本。',
      introduced: '1.0.0',
      params: [
        '[paths] (...(string|string[])): 要选择元素的属性路径（单独指定或者数组）。'
      ],
      returnValue: '(Object): 返回 lodash 的包装实例。',
      demo: ` var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

              _(object).at(['a[0].b.c', 'a[1]']).value();
              // => [3, 4]`
    },
    '_.prototype.chain': {
      description: '创建一个lodash包装实例，启用显式链模式。',
      introduced: '0.1.0',
      params: [],
      returnValue: '(Object): 返回 lodash 的包装实例。',
      demo: ` var users = [
                { 'user': 'barney', 'age': 36 },
                { 'user': 'fred',   'age': 40 }
              ];

              // 不启用显式链
              _(users).head();
              // => { 'user': 'barney', 'age': 36 }

              // 启用显式链
              _(users)
                .chain()
                .head()
                .pick('user')
                .value();
              // => { 'user': 'barney' }`
    },
    '_.prototype.commit': {
      description: '执行链式队列并返回结果。',
      introduced: '3.2.0',
      params: [],
      returnValue: '(Object): 返回 lodash 的包装实例。',
      demo: ` var array = [1, 2];
              var wrapped = _(array).push(3);

              console.log(array);
              // => [1, 2]

              wrapped = wrapped.commit();
              console.log(array);
              // => [1, 2, 3]

              wrapped.last();
              // => 3

              console.log(array);
              // => [1, 2, 3]`
    },
    '_.prototype.next': {
      description: '获得包装对象的下一个值，遵循 iterator protocol。',
      introduced: '4.0.0',
      params: [],
      returnValue: '(Object): 返回下一个 iterator 值。',
      demo: ` var wrapped = _([1, 2]);

              wrapped.next();
              // => { 'done': false, 'value': 1 }

              wrapped.next();
              // => { 'done': false, 'value': 2 }

              wrapped.next();
              // => { 'done': true, 'value': undefined }`
    },
    '_.prototype.plant': {
      description: '创建一个链式队列的拷贝，传入的 value 作为链式队列的值。',
      introduced: '3.2.0',
      params: [
        'value (*): 替换原值的值。'
      ],
      returnValue: '(Object): 返回 lodash 的包装实例。',
      demo: ` function square(n) {
                return n * n;
              }

              var wrapped = _([1, 2]).map(square);
              var other = wrapped.plant([3, 4]);

              other.value();
              // => [9, 16]

              wrapped.value();
              // => [1, 4]`
    },
    '_.prototype.reverse': {
      description: '这个方法是 _.reverse 的包装版本。',
      note: '注意: 这种方法会改变包装数组。',
      introduced: '0.1.0',
      params: [],
      returnValue: '(Object): 返回新的 lodash 包装实例。',
      demo: ` var array = [1, 2, 3];

              _(array).reverse().value()
              // => [3, 2, 1]

              console.log(array);
              // => [3, 2, 1]`
    },
    '_.prototype.value': {
      description: '执行链式队列并提取解链后的值。',
      introduced: '0.1.0',
      aliases: '_.prototype.toJSON, _.prototype.valueOf',
      params: [],
      returnValue: '(*): 返回解链后的值。',
      demo: `_([1, 2, 3]).value();
              // => [1, 2, 3]`
    }
  },
  'String': {
    '_.camelCase': {
      description: '转换字符串string为 驼峰写法。',
      introduced: '3.0.0',
      params: [
        '[string=""] (string): 要转换的字符串。'
      ],
      returnValue: '(string): 返回驼峰写法的字符串。',
      demo: ` _.camelCase('Foo Bar');
              // => 'fooBar'

              _.camelCase('--foo-bar--');
              // => 'fooBar'

              _.camelCase('__FOO_BAR__');
              // => 'fooBar'`
    },
    '_.capitalize': {
      description: '转换字符串string首字母为大写，剩下为小写。',
      introduced: '3.0.0',
      params: [
        '[string=""] (string): 要大写开头的字符串。'
      ],
      returnValue: '(string): 返回大写开头的字符串。',
      demo: ` _.capitalize('FRED');
              // => 'Fred'`
    },
    '_.deburr': {
      description: '转换字符串string中拉丁语-1补充字母 和 拉丁语扩展字母-A 为基本的拉丁字母，并且去除组合变音标记。',
      introduced: '3.0.0',
      params: [
        '[string=""] (string): 要处理的字符串。'
      ],
      returnValue: '(string): 返回处理后的字符串。',
      demo: `_.deburr('déjà vu');
              // => 'deja vu'`
    },
    '_.endsWith': {
      description: '检查字符串string是否以给定的target字符串结尾。',
      introduced: '3.0.0',
      params: [
        '[string=""] (string): 要检索的字符串。',
        '[target] (string): 要检索字符。',
        '[position=string.length] (number): 检索的位置。'
      ],
      returnValue: '(boolean): 如果字符串string以target字符串结尾，那么返回 true，否则返回 false。',
      demo: `_.endsWith('abc', 'c');
              // => true

              _.endsWith('abc', 'b');
              // => false

              _.endsWith('abc', 'b', 2);
              // => true`
    },
    '_.escape': {
      description: `转义string中的 "&", "<", ">", '"', "'", 和 "\`" 字符为HTML实体字符。`,
      note: ` 注意: 不会转义其他字符。如果需要，可以使用第三方库，例如 he。

              虽然 ">" 是对称转义的，字符如 ">" 和 "/" 没有特殊的意义，所以不需要在 HTML 转义。 除非它们是标签的一部分，或者是不带引号的属性值。 查看 Mathias Bynens's article 的文章 (under "semi-related fun fact") 了解详情 。

              在 IE < 9 中转义引号，因为会中断属性值或 HTML 注释，查看 HTML5 Security Cheatsheet 的#59, #102, #108, 和 #133, 以及 #133 了解详情。

              当解析 HTML 时，总应该在 属性值上使用引号 以减少 XSS 的可能性。`,
      introduced: '0.1.0',
      params: [
        '[string=""] (string): 要转义的字符串。'
      ],
      returnValue: '(string): 返回转义后的字符串。',
      demo: `_.escape('fred, barney, & pebbles');
              // => 'fred, barney, &amp; pebbles'`
    },
    '_.escapeRegExp': {
      description: `转义 RegExp 字符串中特殊的字符 "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", 和 "|" in .`,
      introduced: '3.0.0',
      params: [
        '[string=""] (string): 要转义的字符串。'
      ],
      returnValue: '(string): 返回转义后的字符串。',
      demo: `_.escapeRegExp('[lodash](https://lodash.com/)');
              // => '\\[lodash\\]\\(https://lodash\\.com/\\)'`
    },
    '_.kebabCase': {
      description: '转换字符串string为 kebab case.',
      introduced: '3.0.0',
      params: [
        '[string=""] (string): 要转换的字符串。'
      ],
      returnValue: '(string): 返回转换后的字符串。',
      demo: `_.kebabCase('Foo Bar');
              // => 'foo-bar'

              _.kebabCase('fooBar');
              // => 'foo-bar'

              _.kebabCase('__FOO_BAR__');
              // => 'foo-bar'`
    },
    '_.lowerCase': {
      description: '转换字符串string以空格分开单词，并转换为小写。',
      introduced: '4.0.0',
      params: [
        '[string=""] (string): 要转换的字符串。'
      ],
      returnValue: '(string): 返回转换后的字符串。',
      demo: `_.lowerCase('--Foo-Bar--');
              // => 'foo bar'

              _.lowerCase('fooBar');
              // => 'foo bar'

              _.lowerCase('__FOO_BAR__');
              // => 'foo bar'`
    },
    '_.lowerFirst': {
      description: '转换字符串string的首字母为小写。',
      introduced: '4.0.0',
      params: [
        '[string=""] (string): 要转换的字符串。'
      ],
      returnValue: '(string): 返回转换后的字符串。',
      demo: `_.lowerFirst('Fred');
              // => 'fred'

              _.lowerFirst('FRED');
              // => 'fRED'`
    },
    '_.pad': {
      description: '如果string字符串长度小于 length 则从左侧和右侧填充字符。 如果没法平均分配，则截断超出的长度。',
      introduced: '3.0.0',
      params: [
        '[string=""] (string): 要填充的字符串。',
        '[length=0] (number): 填充的长度。',
        '[chars=" "] (string): 填充字符。'
      ],
      returnValue: '(string): 返回填充后的字符串。',
      demo: `_.pad('abc', 8);
              // => '\v\vabc\v\v\v'

              _.pad('abc', 8, '_-');
              // => '_-abc_-_'

              _.pad('abc', 3);
              // => 'abc'`
    },
    '_.padEnd': {
      description: '如果string字符串长度小于 length 则在右侧填充字符。 如果超出length长度则截断超出的部分。',
      introduced: '4.0.0',
      params: [
        '[string=""] (string): 要填充的字符串。',
        '[length=0] (number): 填充的长度。',
        '[chars=" "] (string): 填充字符。'
      ],
      returnValue: '(string): 返回填充后的字符串。',
      demo: `_.padEnd('abc', 6);
              // => 'abc\v\v\v'

              _.padEnd('abc', 6, '_-');
              // => 'abc_-_'

              _.padEnd('abc', 3);
              // => 'abc'`
    },
    '_.padStart': {
      description: '如果string字符串长度小于 length 则在左侧填充字符。 如果超出length长度则截断超出的部分。',
      introduced: '4.0.0',
      params: [
        '[string=""] (string): 要填充的字符串。',
        '[length=0] (number): 填充的长度。',
        '[chars=" "] (string): 填充字符。'
      ],
      returnValue: '(string): 返回填充后的字符串。',
      demo: `_.padStart('abc', 6);
              // => '\v\v\vabc'

              _.padStart('abc', 6, '_-');
              // => '_-_abc'

              _.padStart('abc', 3);
              // => 'abc'`
    },
    '_.parseInt': {
      description: '转换string字符串为指定基数的整数。 如果基数是 undefined 或者 0，则radix基数默认是10，如果string字符串是16进制，则radix基数为 16。',
      note: '注意: 这个方法与 ES5 implementation 的 parseInt是一样的。',
      introduced: '1.1.0',
      params: [
        'string (string): 要转换的字符串。',
        '[radix=10] (number):转换基数。'
      ],
      returnValue: '(number): 返回转换后的整数。',
      demo: `_.parseInt('08');
              // => 8

              _.map(['6', '08', '10'], _.parseInt);
              // => [6, 8, 10]`
    },
    '_.repeat': {
      description: '重复 N 次给定字符串。',
      introduced: '3.0.0',
      params: [
        '[string=""] (string): 要重复的字符串。',
        '[n=1] (number): 重复的次数。'
      ],
      returnValue: '(string): 返回重复的字符串。',
      demo: `_.repeat('*', 3);
              // => '***'

              _.repeat('abc', 2);
              // => 'abcabc'

              _.repeat('abc', 0);
              // => ''`
    },
    '_.replace': {
      description: '替换string字符串中匹配的pattern为给定的replacement 。',
      note: '注意: 这个方法基于 String#replace.',
      introduced: '4.0.0',
      params: [
        '[string=""] (string): 待替换的字符串。',
        'pattern (RegExp|string): 要匹配的内容。',
        'replacement (Function|string): 替换的内容。'
      ],
      returnValue: '(string): 返回替换后的字符串',
      demo: `_.replace('Hi Fred', 'Fred', 'Barney');
              // => 'Hi Barney'`
    },
    '_.snakeCase': {
      description: '转换字符串string为 snake case.',
      introduced: '3.0.0',
      params: [
        '[string=""] (string): 要转换的字符串。'
      ],
      returnValue: '(string): 返回转换后的字符串。',
      demo: `_.snakeCase('Foo Bar');
              // => 'foo_bar'

              _.snakeCase('fooBar');
              // => 'foo_bar'

              _.snakeCase('--FOO-BAR--');
              // => 'foo_bar'`
    },
    '_.split': {
      description: '根据separator 拆分字符串string。',
      note: '注意: 这个方法基于 String#split.',
      introduced: '4.0.0',
      params: [
        '[string=""] (string): 要拆分的字符串。',
        'separator (RegExp|string): 拆分的分隔符。',
        '[limit] (number): 限制结果的数量。'
      ],
      returnValue: '(Array): 返回拆分部分的字符串的数组。',
      demo: `_.split('a-b-c', '-', 2);
              // => ['a', 'b']`
    },
    '_.startCase': {
      description: '转换 string 字符串为 start case.',
      introduced: '3.1.0',
      params: [
        '[string=""] (string): 要转换的字符串。'
      ],
      returnValue: '(string): 返回转换后的字符串。',
      demo: `_.startCase('--foo-bar--');
              // => 'Foo Bar'

              _.startCase('fooBar');
              // => 'Foo Bar'

              _.startCase('__FOO_BAR__');
              // => 'FOO BAR'`
    },
    '_.startsWith': {
      description: '检查字符串string是否以 target 开头。',
      introduced: '3.0.0',
      params: [
        '[string=""] (string): 要检索的字符串。',
        '[target] (string): 要检查的字符串。',
        '[position=0] (number): 检索的位置。'
      ],
      returnValue: '(boolean): 如果string以 target，那么返回true，否则返回 false 。',
      demo: `_.startsWith('abc', 'a');
              // => true

              _.startsWith('abc', 'b');
              // => false

              _.startsWith('abc', 'b', 1);
              // => true`
    },
    '_.template': {
      description: '创建一个预编译模板方法，可以插入数据到模板中 "interpolate" 分隔符相应的位置。 HTML会在 "escape" 分隔符中转换为相应实体。 在 "evaluate" 分隔符中允许执行JavaScript代码。 在模板中可以自由访问变量。 如果设置了选项对象，则会优先覆盖 _.templateSettings 的值。',
      note: `注意: 在开发过程中，构建_.template可以使用 sourceURLs， 便于调试。

              了解更多预编译模板的信息查看 lodash的自定义构建文档。

              了解更多 Chrome 沙箱扩展的信息查看 Chrome的扩展文档。`,
      introduced: '0.1.0',
      params: [
        '[string=""] (string): 模板字符串.',
        '[options={}] (Object): 选项对象.',
        '[options.escape=_.templateSettings.escape] (RegExp): "escape" 分隔符.',
        '[options.evaluate=_.templateSettings.evaluate] (RegExp): "evaluate" 分隔符.',
        '[options.imports=_.templateSettings.imports] (Object): 导入对象到模板中作为自由变量。',
        '[options.interpolate=_.templateSettings.interpolate] (RegExp): "interpolate" 分隔符。',
        '[options.sourceURL="lodash.templateSources[n]"] (string): 模板编译的来源URL。',
        '[options.variable="obj"] (string): 数据对象的变量名。'
      ],
      returnValue: '(Function): 返回编译模板函数。',
      demo: `// 使用 "interpolate" 分隔符创建编译模板
              var compiled = _.template('hello <%= user %>!');
              compiled({ 'user': 'fred' });
              // => 'hello fred!'

              // 使用 HTML "escape" 转义数据的值
              var compiled = _.template('<b><%- value %></b>');
              compiled({ 'value': '<script>' });
              // => '<b>&lt;script&gt;</b>'

              // 使用 "evaluate" 分隔符执行 JavaScript 和 生成HTML代码
              var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
              compiled({ 'users': ['fred', 'barney'] });
              // => '<li>fred</li><li>barney</li>'

              // 在 "evaluate" 分隔符中使用内部的 'print' 函数
              var compiled = _.template('<% print("hello " + user); %>!');
              compiled({ 'user': 'barney' });
              // => 'hello barney!'

              // 使用 ES 分隔符代替默认的 "interpolate" 分隔符
              var compiled = _.template('hello \${user}!');
              compiled({ 'user': 'pebbles' });
              // => 'hello pebbles!'

              // 使用自定义的模板分隔符
              _.templateSettings.interpolate = /{{([\\s\\S]+?)}}/g;
              var compiled = _.template('hello {{ user }}!');
              compiled({ 'user': 'mustache' });
              // => 'hello mustache!'

              // 使用反斜杠符号作为纯文本处理
              var compiled = _.template('<%= "\\\\<%- value %\\\\>" %>');
              compiled({ 'value': 'ignored' });
              // => '<%- value %>'

              // 使用 'imports' 选项导入 'jq' 作为 'jQuery' 的别名
              var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
              var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
              compiled({ 'users': ['fred', 'barney'] });
              // => '<li>fred</li><li>barney</li>'

              // 使用 'sourceURL' 选项指定模板的来源URL
              var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
              compiled(data);
              // => 在开发工具的 Sources 选项卡 或 Resources 面板中找到 "greeting.jst"

              // 使用 'variable' 选项确保在编译模板中不声明变量
              var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
              compiled.source;
              // => function(data) {
              //   var __t, __p = '';
              //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
              //   return __p;
              // }

              // 使用 'source' 特性内联编译模板
              // 便以查看行号、错误信息、堆栈
              fs.writeFileSync(path.join(cwd, 'jst.js'), '\\
                var JST = {\\
                  "main": ' + _.template(mainText).source + '\\
                };\\
              ');`
    },
    '_.toLower': {
      description: '转换整个string字符串的字符为小写，类似 String#toLowerCase。',
      introduced: '4.0.0',
      params: [
        '[string=""] (string): 要转换的字符串。'
      ],
      returnValue: '(string): 返回小写的字符串。',
      demo: `_.toLower('--Foo-Bar--');
              // => '--foo-bar--'

              _.toLower('fooBar');
              // => 'foobar'

              _.toLower('__FOO_BAR__');
              // => '__foo_bar__'`
    },
    '_.toUpper': {
      description: '转换整个string字符串的字符为大写，类似 String#toUpperCase.',
      introduced: '4.0.0',
      params: [
        '[string=""] (string): 要转换的字符串。'
      ],
      returnValue: '(string): 返回大写的字符串。',
      demo: `_.toUpper('--foo-bar--');
              // => '--FOO-BAR--'

              _.toUpper('fooBar');
              // => 'FOOBAR'

              _.toUpper('__foo_bar__');
              // => '__FOO_BAR__'`
    },
    '_.trim': {
      description: '从string字符串中移除前面和后面的 空格 或 指定的字符。',
      introduced: '3.0.0',
      params: [
        '[string=""] (string): 要处理的字符串。',
        '[chars=whitespace] (string): 要移除的字符。'
      ],
      returnValue: '(string): 返回处理后的字符串。',
      demo: `_.trim('\v\vabc\v\v');
              // => 'abc'

              _.trim('-_-abc-_-', '_-');
              // => 'abc'

              _.map(['\v\vfoo\v\v', '\v\vbar\v\v'], _.trim);
              // => ['foo', 'bar']`
    },
    '_.trimEnd': {
      description: '从string字符串中移除后面的 空格 或 指定的字符。',
      introduced: '4.0.0',
      params: [
        '[string=""] (string): 要处理的字符串。',
        '[chars=whitespace] (string): 要移除的字符。'
      ],
      returnValue: '(string): 返回处理后的字符串。',
      demo: `_.trimEnd('\v\vabc\v\v');
              // => '\v\vabc'

              _.trimEnd('-_-abc-_-', '_-');
              // => '-_-abc'`
    },
    '_.trimStart': {
      description: '从string字符串中移除前面的 空格 或 指定的字符。',
      introduced: '3.0.0',
      params: [
        '[string=""] (string): 要处理的字符串。',
        '[chars=whitespace] (string): 要移除的字符。'
      ],
      returnValue: '(string): 返回处理后的字符串。',
      demo: `_.trimStart('\v\vabc\v\v');
              // => 'abc\v\v'

              _.trimStart('-_-abc-_-', '_-');
              // => 'abc-_-'`
    },
    '_.truncate': {
      description: '截断string字符串，如果字符串超出了限定的最大值。 被截断的字符串后面会以 omission 代替，omission 默认是 "..."。',
      introduced: '4.0.0',
      params: [
        '[string=""] (string): 要截断的字符串。',
        '[options={}] (Object): 选项对象。',
        '[options.length=30] (number): 允许的最大长度。',
        '[options.omission="..."] (string): 超出后的代替字符。',
        '[options.separator] (RegExp|string): 截断点。'
      ],
      returnValue: '(string): 返回截取过的字符串.',
      demo: `_.truncate('hi-diddly-ho there, neighborino');
              // => 'hi-diddly-ho there, neighbo...'

              _.truncate('hi-diddly-ho there, neighborino', {
                'length': 24,
                'separator': ' '
              });
              // => 'hi-diddly-ho there,...'

              _.truncate('hi-diddly-ho there, neighborino', {
                'length': 24,
                'separator': /,? +/
              });
              // => 'hi-diddly-ho there...'

              _.truncate('hi-diddly-ho there, neighborino', {
                'omission': ' [...]'
              });
              // => 'hi-diddly-ho there, neig [...]'`
    },
    '_.unescape': {
      description: '_.escape的反向版。 这个方法转换string字符串中的 HTML 实体 &amp;, &lt;, &gt;, &quot;, &#39;, 和 &#96; 为对应的字符。',
      note: '注意: 不会转换其他的 HTML 实体，需要转换可以使用类似 he 的第三方库。',
      introduced: '0.6.0',
      params: [
        '[string=""] (string): 要转换的字符串。'
      ],
      returnValue: '(string): 返回转换后的字符串。',
      demo: `_.unescape('fred, barney, &amp; pebbles');
              // => 'fred, barney, & pebbles'`
    },
    '_.upperCase': {
      description: '转换字符串string为 空格 分隔的大写单词。',
      introduced: '4.0.0',
      params: [
        '[string=""] (string): 要转换的字符串。'
      ],
      returnValue: '(string): 返回大写单词。',
      demo: `_.upperCase('--foo-bar');
              // => 'FOO BAR'

              _.upperCase('fooBar');
              // => 'FOO BAR'

              _.upperCase('__foo_bar__');
              // => 'FOO BAR'`
    },
    '_.upperFirst': {
      description: '转换字符串string的首字母为大写。',
      introduced: '4.0.0',
      params: [
        '[string=""] (string): 要转换的字符串。'
      ],
      returnValue: '(string): 返回转换后的字符串。',
      demo: `_.upperFirst('fred');
              // => 'Fred'

              _.upperFirst('FRED');
              // => 'FRED'`
    },
    '_.words': {
      description: '拆分字符串string中的词为数组 。',
      introduced: '3.0.0',
      params: [
        '[string=""] (string): 要拆分的字符串。',
        '[pattern] (RegExp|string): 匹配模式。'
      ],
      returnValue: '(Array): 返回拆分string后的数组。',
      demo: `_.words('fred, barney, & pebbles');
              // => ['fred', 'barney', 'pebbles']

              _.words('fred, barney, & pebbles', /[^, ]+/g);
              // => ['fred', 'barney', '&', 'pebbles']`
    }
  },
  'Util': {
    '_.attempt': {
      description: '尝试调用func，返回结果 或者 捕捉错误对象。任何附加的参数都会在调用时传给func。',
      introduced: '3.0.0',
      params: [
        'func (Function): 要尝试调用的函数。',
        '[args] (...*): 调用func时，传递的参数。'
      ],
      returnValue: '(*): 返回func结果或者错误对象。',
      demo: ` // Avoid throwing errors for invalid selectors.
              var elements = _.attempt(function(selector) {
                return document.querySelectorAll(selector);
              }, '>_>');

              if (_.isError(elements)) {
                elements = [];
              }`
    },
    '_.bindAll': {
      description: '绑定一个对象的方法到对象本身，覆盖现有的方法。',
      note: '注意: 这个方法不会设置绑定函数的 "length" 属性。',
      introduced: '0.1.0',
      params: [
        'object (Object): 用来绑定和分配绑定方法的对象。',
        'methodNames (...(string|string[])): 对象绑定方法的名称。'
      ],
      returnValue: '(Object): 返回 object.',
      demo: ` var view = {
                'label': 'docs',
                'click': function() {
                  console.log('clicked ' + this.label);
                }
              };

              _.bindAll(view, ['click']);
              jQuery(element).on('click', view.click);
              // => Logs 'clicked docs' when clicked.`
    },
    '_.cond': {
      description: '创建了一个函数，这个函数会迭代pairs，并调用最先返回真值对应的函数。该断言函数对绑定 this 及传入创建函数的参数。',
      introduced: '4.0.0',
      params: [
        'pairs (Array): 断言函数对。'
      ],
      returnValue: '(Function): 返回新的复合函数。',
      demo: `var func = _.cond([
                [_.matches({ 'a': 1 }),           _.constant('matches A')],
                [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
                [_.stubTrue,                      _.constant('no match')]
              ]);

              func({ 'a': 1, 'b': 2 });
              // => 'matches A'

              func({ 'a': 0, 'b': 1 });
              // => 'matches B'

              func({ 'a': '1', 'b': '2' });
              // => 'no match'`
    },
    '_.conforms': {
      description: '创建一个函数。 这个函数会 调用 source 的属性名对应的 predicate 与传入对象相对应属性名的值进行断言处理。 如果都符合返回 true ，否则返回 false 。',
      note: '注意: 当source为偏应用时，这种方法等价于_.conformsTo。（愚人码头注：关于偏应用大家可以自己到google上搜索一下）。',
      introduced: '4.0.0',
      params: [
        'source (Object): 包含断言属性值的对象。'
      ],
      returnValue: '(Function): 返回新的函数。',
      demo: `var objects = [
                { 'a': 2, 'b': 1 },
                { 'a': 1, 'b': 2 }
              ];

              _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
              // => [{ 'a': 1, 'b': 2 }]`
    },
    '_.constant': {
      description: '创建一个返回 value 的函数。',
      introduced: '2.4.0',
      params: [
        'value (*): 要新函数返回的值。'
      ],
      returnValue: '(Function): 返回新的常量函数。',
      demo: `var objects = _.times(2, _.constant({ 'a': 1 }));

              console.log(objects);
              // => [{ 'a': 1 }, { 'a': 1 }]

              console.log(objects[0] === objects[1]);
              // => true`
    },
    '_.defaultTo': {
      description: '检查value，以确定一个默认值是否应被返回。如果value为NaN, null, 或者 undefined，那么返回defaultValue默认值。',
      introduced: '4.14.0',
      params: [
        'value (*): 要检查的值。',
        'defaultValue (*): 默认值。'
      ],
      returnValue: '(*): 返回 resolved 值。',
      demo: `_.defaultTo(1, 10);
              // => 1

              _.defaultTo(undefined, 10);
              // => 10`
    },
    '_.flow': {
      description: '创建一个函数。 返回的结果是调用提供函数的结果，this 会绑定到创建函数。 每一个连续调用，传入的参数都是前一个函数返回的结果。',
      introduced: '3.0.0',
      params: [
        '[funcs] (...(Function|Function[])): 要调用的函数。'
      ],
      returnValue: '(Function): 返回新的函数。',
      demo: `function square(n) {
                return n * n;
              }

              var addSquare = _.flow([_.add, square]);
              addSquare(1, 2);
              // => 9`
    },
    '_.flowRight': {
      description: '这个方法类似 _.flow，除了它调用函数的顺序是从右往左的。',
      introduced: '3.0.0',
      params: [
        '[funcs] (...(Function|Function[])): 要调用的函数。'
      ],
      returnValue: '(Function): 返回新的函数。',
      demo: `function square(n) {
                return n * n;
              }

              var addSquare = _.flowRight([square, _.add]);
              addSquare(1, 2);
              // => 9`
    },
    '_.identity': {
      description: '这个方法返回首个提供的参数。',
      introduced: '0.1.0',
      params: [
        'value (*): 任何值。'
      ],
      returnValue: '(*): 返回 value.',
      demo: `var object = { 'a': 1 };

              console.log(_.identity(object) === object);
              // => true`
    },
    '_.iteratee': {
      description: '创建一个函数，通过创建函数的参数调用 func 函数。 如果 func 是一个属性名，传入包含这个属性名的对象，回调返回对应属性名的值。 如果 func 是一个对象，传入的元素有相同的对象属性，回调返回 true 。 其他情况返回 false 。',
      introduced: '4.0.0',
      params: [
        '[func=_.identity] (*): 转换成 callback 的值。'
      ],
      returnValue: '(Function): 返回回调函数 callback。',
      demo: `var users = [
                { 'user': 'barney', 'age': 36, 'active': true },
                { 'user': 'fred',   'age': 40, 'active': false }
              ];

              // The '_.matches' iteratee shorthand.
              _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
              // => [{ 'user': 'barney', 'age': 36, 'active': true }]

              // The '_.matchesProperty' iteratee shorthand.
              _.filter(users, _.iteratee(['user', 'fred']));
              // => [{ 'user': 'fred', 'age': 40 }]

              // The '_.property' iteratee shorthand.
              _.map(users, _.iteratee('user'));
              // => ['barney', 'fred']

              // Create custom iteratee shorthands.
              _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
                return !_.isRegExp(func) ? iteratee(func) : function(string) {
                  return func.test(string);
                };
              });

              _.filter(['abc', 'def'], /ef/);
              // => ['def']`
    },
    '_.matches': {
      description: '创建一个深比较的方法来比较给定的对象和 source 对象。 如果给定的对象拥有相同的属性值返回 true，否则返回 false。',
      note: ` 注意: 创建的函数相当于_.isMatch应用 source 。

              部分比较匹配空数组和空对象源值，分别针对任何数组或对象的价值。见_.isEqual支持的价值比较的列表。`,
      introduced: '3.0.0',
      params: [
        'source (Object): 要匹配属性值的源对象。'
      ],
      returnValue: '(Function): 返回新的函数。',
      demo: `var objects = [
                { 'a': 1, 'b': 2, 'c': 3 },
                { 'a': 4, 'b': 5, 'c': 6 }
              ];

              _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
              // => [{ 'a': 4, 'b': 5, 'c': 6 }]`
    },
    '_.matchesProperty': {
      description: '创建一个深比较的方法来比较给定对象的 path 的值是否是 srcValue 。 如果是返回 true ，否则返回 false 。',
      note: '注意: 这个方法支持以 _.isEqual 的方式比较相同的值。',
      introduced: '3.2.0',
      params: [
        'path (Array|string): 给定对象的属性路径名。',
        'srcValue (*): 要匹配的值。'
      ],
      returnValue: '(Function): 返回新的函数。',
      demo: `var objects = [
                { 'a': 1, 'b': 2, 'c': 3 },
                { 'a': 4, 'b': 5, 'c': 6 }
              ];

              _.find(objects, _.matchesProperty('a', 4));
              // => { 'a': 4, 'b': 5, 'c': 6 }`
    },
    '_.method': {
      description: '创建一个调用给定对象 path 上的函数。 任何附加的参数都会传入这个调用函数中。',
      introduced: '3.7.0',
      params: [
        'path (Array|string): 调用函数所在对象的路径。',
        '[args] (...*): 传递给调用函数的参数。'
      ],
      returnValue: '(Function): 返回新的调用函数。',
      demo: `var objects = [
                { 'a': { 'b': _.constant(2) } },
                { 'a': { 'b': _.constant(1) } }
              ];

              _.map(objects, _.method('a.b'));
              // => [2, 1]

              _.map(objects, _.method(['a', 'b']));
              // => [2, 1]`
    },
    '_.methodOf': {
      description: '_.method的反向版。 这个创建一个函数调用给定 object 的 path 上的方法， 任何附加的参数都会传入这个调用函数中。',
      introduced: '3.7.0',
      params: [
        'object (Object): 要检索的对象。',
        '[args] (...*): 传递给调用函数的参数。'
      ],
      returnValue: '(Function): 返回新的调用函数。',
      demo: `var array = _.times(3, _.constant),
                  object = { 'a': array, 'b': array, 'c': array };

              _.map(['a[2]', 'c[0]'], _.methodOf(object));
              // => [2, 0]

              _.map([['a', '2'], ['c', '0']], _.methodOf(object));
              // => [2, 0]`
    },
    '_.mixin': {
      description: '添加来源对象自身的所有可枚举函数属性到目标对象。 如果 object 是个函数，那么函数方法将被添加到原型链上。',
      note: '注意: 使用 _.runInContext 来创建原始的 lodash 函数来避免修改造成的冲突。',
      introduced: '0.1.0',
      params: [
        '[object=lodash] (Function|Object): 目标对象。',
        'source (Object): 来源对象。',
        '[options={}] (Object): 选项对象。',
        '[options.chain=true] (boolean): 是否开启链式操作。'
      ],
      returnValue: '(*): 返回 object.',
      demo: `function vowels(string) {
                return _.filter(string, function(v) {
                  return /[aeiou]/i.test(v);
                });
              }

              _.mixin({ 'vowels': vowels });
              _.vowels('fred');
              // => ['e']

              _('fred').vowels().value();
              // => ['e']

              _.mixin({ 'vowels': vowels }, { 'chain': false });
              _('fred').vowels();
              // => ['e']`
    },
    '_.noConflict': {
      description: '释放 _ 变量为原来的值，并返回一个 lodash 的引用。',
      introduced: '0.1.0',
      params: [],
      returnValue: '(Function): 返回 lodash 函数。',
      demo: `var lodash = _.noConflict();`
    },
    '_.noop': {
      description: '这个方法返回 undefined。',
      introduced: '2.3.0',
      params: [],
      returnValue: '',
      demo: `_.times(2, _.noop);
              // => [undefined, undefined]`
    },
    '_.nthArg': {
      description: '创建一个函数，这个函数返回第 n 个参数。如果 n为负数，则返回从结尾开始的第n个参数。',
      introduced: '4.0.0',
      params: [
        '[n=0] (number): 要返回参数的索引值。'
      ],
      returnValue: '(Function): 返回新的函数。',
      demo: `var func = _.nthArg(1);
              func('a', 'b', 'c', 'd');
              // => 'b'

              var func = _.nthArg(-2);
              func('a', 'b', 'c', 'd');
              // => 'c'`
    },
    '_.over': {
      description: '创建一个函数，传入提供的参数的函数并调用 iteratees 返回结果。',
      introduced: '4.0.0',
      params: [
        '[iteratees=[_.identity]] (...(Function|Function[])): 要调用的 iteratees。'
      ],
      returnValue: '(Function): 返回新的函数。',
      demo: `var func = _.over([Math.max, Math.min]);

              func(1, 2, 3, 4);
              // => [4, 1]`
    },
    '_.overEvery': {
      description: '建一个函数，传入提供的参数的函数并调用 predicates 判断是否 全部 都为真值。',
      introduced: '4.0.0',
      params: [
        '[predicates=[_.identity]] (...(Function|Function[])): 要调用的 predicates。'
      ],
      returnValue: '(Function): 返回新的函数。',
      demo: `var func = _.overEvery([Boolean, isFinite]);

              func('1');
              // => true

              func(null);
              // => false

              func(NaN);
              // => false`
    },
    '_.overSome': {
      description: '创建一个函数，传入提供的参数的函数并调用 predicates 判断是否 存在 有真值。',
      introduced: '4.0.0',
      params: [
        '[predicates=[_.identity]] (...(Function|Function[])): 要调用的 predicates。'
      ],
      returnValue: '(Function): 返回新的函数。',
      demo: `var func = _.overSome([Boolean, isFinite]);

              func('1');
              // => true

              func(null);
              // => true

              func(NaN);
              // => false`
    },
    '_.property': {
      description: '创建一个返回给定对象的 path 的值的函数。',
      introduced: '2.4.0',
      params: [
        'path (Array|string): 要得到值的属性路径。'
      ],
      returnValue: '(Function): 返回新的函数。',
      demo: `var objects = [
                { 'a': { 'b': 2 } },
                { 'a': { 'b': 1 } }
              ];

              _.map(objects, _.property('a.b'));
              // => [2, 1]

              _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
              // => [1, 2]`
    },
    '_.propertyOf': {
      description: '_.property的反相版本。 这个方法创建的函数返回给定 path 在object上的值。',
      introduced: '3.0.0',
      params: [
        'object (Object): 要检索的对象。'
      ],
      returnValue: '(Function): 返回新的函数。',
      demo: `var array = [0, 1, 2],
                  object = { 'a': array, 'b': array, 'c': array };

              _.map(['a[2]', 'c[0]'], _.propertyOf(object));
              // => [2, 0]

              _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
              // => [2, 0]`
    },
    '_.range': {
      description: '创建一个包含从 start 到 end，但不包含 end 本身范围数字的数组。 如果 start 是负数，而 end 或 step 没有指定，那么 step 从 -1 为开始。 如果 end 没有指定，start 设置为 0。 如果 end 小于 start ，会创建一个空数组，除非指定了 step。',
      note: '注意: JavaScript 遵循 IEEE-754 标准处理无法预料的浮点数结果。',
      introduced: '0.1.0',
      params: [
        '[start=0] (number): 开始的范围。',
        'end (number): 结束的范围。',
        '[step=1] (number): 范围的增量 或者 减量。'
      ],
      returnValue: '(Array): 返回范围内数字组成的新数组。',
      demo: `_.range(4);
              // => [0, 1, 2, 3]

              _.range(-4);
              // => [0, -1, -2, -3]

              _.range(1, 5);
              // => [1, 2, 3, 4]

              _.range(0, 20, 5);
              // => [0, 5, 10, 15]

              _.range(0, -4, -1);
              // => [0, -1, -2, -3]

              _.range(1, 4, 0);
              // => [1, 1, 1]

              _.range(0);
              // => []`
    },
    '_.rangeRight': {
      description: '这个方法类似 _.range ， 除了它是降序生成值的。',
      introduced: '4.0.0',
      params: [
        '[start=0] (number): 开始的范围。',
        'end (number): 结束的范围。',
        '[step=1] (number): 范围的增量 或者 减量。'
      ],
      returnValue: '(Array): 返回范围内数字组成的新数组。',
      demo: `_.rangeRight(4);
              // => [3, 2, 1, 0]

              _.rangeRight(-4);
              // => [-3, -2, -1, 0]

              _.rangeRight(1, 5);
              // => [4, 3, 2, 1]

              _.rangeRight(0, 20, 5);
              // => [15, 10, 5, 0]

              _.rangeRight(0, -4, -1);
              // => [-3, -2, -1, 0]

              _.rangeRight(1, 4, 0);
              // => [1, 1, 1]

              _.rangeRight(0);
              // => []`
    },
    '_.runInContext': {
      description: '创建一个给定context上下文对象的原始的 lodash 函数。',
      introduced: '1.1.0',
      params: [
        '[context=root] (Object): 上下文对象。'
      ],
      returnValue: '(Function): 返回新的 lodash 对象',
      demo: `_.mixin({ 'foo': _.constant('foo') });

              var lodash = _.runInContext();
              lodash.mixin({ 'bar': lodash.constant('bar') });

              _.isFunction(_.foo);
              // => true
              _.isFunction(_.bar);
              // => false

              lodash.isFunction(lodash.foo);
              // => false
              lodash.isFunction(lodash.bar);
              // => true

              // 使用 'context' 模拟 'Date#getTime' 调用 '_.now'
              var stubbed = _.runInContext({
                'Date': function() {
                  return { 'getTime': stubGetTime };
                }
              });

              // 或者在 Node.js 中创建一个更高级的 'defer'
              var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;`
    },
    '_.stubArray': {
      description: '这个方法返回一个新的空数组。',
      introduced: '4.13.0',
      params: [],
      returnValue: '(Array): 返回新的空数组。',
      demo: `var arrays = _.times(2, _.stubArray);

              console.log(arrays);
              // => [[], []]

              console.log(arrays[0] === arrays[1]);
              // => false`
    },
    '_.stubFalse': {
      description: '这个方法返回 false.',
      introduced: '4.13.0',
      params: [],
      returnValue: '(boolean): 返回 false.',
      demo: `_.times(2, _.stubFalse);
              // => [false, false]`
    },
    '_.stubObject': {
      description: '这个方法返回一个空对象.',
      introduced: '4.13.0',
      params: [],
      returnValue: '(Object): 返回新的空对象。',
      demo: `var objects = _.times(2, _.stubObject);

              console.log(objects);
              // => [{}, {}]

              console.log(objects[0] === objects[1]);
              // => false`
    },
    '_.stubString': {
      description: '这个方法返回一个空字符串。',
      introduced: '4.13.0',
      params: [],
      returnValue: '(string): 返回新的空字符串。',
      demo: `_.times(2, _.stubString);
              // => ['', '']`
    },
    '_.stubTrue': {
      description: '这个方法返回 true。',
      introduced: '4.13.0',
      params: [],
      returnValue: '(boolean): 返回 true。',
      demo: `_.times(2, _.stubTrue);
              // => [true, true]`
    },
    '_.times': {
      description: '调用 iteratee n 次，每次调用返回的结果存入到数组中。 iteratee 调用入1个参数： (index)。',
      introduced: '0.1.0',
      params: [
        'n (number): 调用 iteratee 的次数。',
        '[iteratee=_.identity] (Function): 每次迭代调用的函数。'
      ],
      returnValue: '(Array): 返回调用结果的数组。',
      demo: `_.times(3, String);
              // => ['0', '1', '2']

              _.times(4, _.constant(0));
              // => [0, 0, 0, 0]`
    },
    '_.toPath': {
      description: '转化 value 为属性路径的数组 。',
      introduced: '4.0.0',
      params: [
        'value (*): 要转换的值'
      ],
      returnValue: '(Array): 返回包含属性路径的数组。',
      demo: `_.toPath('a.b.c');
              // => ['a', 'b', 'c']

              _.toPath('a[0].b.c');
              // => ['a', '0', 'b', 'c']`
    },
    '_.uniqueId': {
      description: '生成唯一ID。 如果提供了 prefix ，会被添加到ID前缀上。',
      introduced: '0.1.0',
      params: [
        '[prefix=""] (string): 要添加到ID前缀的值。'
      ],
      returnValue: '(string): 返回唯一ID。',
      demo: `_.uniqueId('contact_');
              // => 'contact_104'

              _.uniqueId();
              // => '105'`
    }
  },
  'Properties': {
    '_.VERSION': {
      description: '(string): 语义化的版本号。'
    },
    '_.templateSettings': {
      description: '(Object): 默认情况下，lodash使用的模板分隔符就像那他们嵌入到Ruby（ERB）一样。更改以下模板设置使用替代分隔符。'
    },
    '_.templateSettings.escape': {
      description: '(RegExp): 用于检测data属性值是否HTML转义。'
    },
    '_.templateSettings.evaluate': {
      description: '(RegExp): 用于检测代码来进行评估。'
    },
    '_.templateSettings.imports': {
      description: '(Object): 用于导入变量到编译模板。'
    },
    '_.templateSettings.interpolate': {
      description: '(RegExp): 用于检测data属性值是否注入。'
    },
    '_.templateSettings.variable': {
      description: '(string): 用于引用该数据对象中的模板文本。'
    }
  },
  'Methods': {
    '_.templateSettings.imports._': {
      description: 'lodash 引用。'
    }
  }
}

module.exports = local_database;
