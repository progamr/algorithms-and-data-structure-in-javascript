# الإغلاقات (Closures)

 هو دالة تحتفظ بمتغيرات من النطاق الذي تم تعريفها فيه حتى بعد انتهاء تنفيذ ذلك النطاق. هذا يسمح للدالة بالوصول إلى تلك المتغيرات عند تنفيذها لاحقًا.

في تقنية ال memoization (التخزين المؤقت)، نستخدم الإغلاق لحفظ كائن (cache) يخزن النتائج السابقة للدالة. بهذه الطريقة، يمكن للدالة أن تتحقق مما إذا كانت النتيجة محسوبة مسبقًا وتعيدها مباشرة دون إعادة الحساب.

## مثال باستخدام JavaScript

```javascript
function memoize(func) {
  // كائن لتخزين النتائج
  const cache = {};
  
  // نرجع دالة إغلاق
  return (...args) => {
    // نستخدم المعطيات كمفتاح للتخزين
    const key = JSON.stringify(args);
    
    // إذا كانت النتيجة مخزنة مسبقًا
    if (key in cache) {
      console.log('جلب القيمة المخزنة لـ', key);
      return cache[key];
    }
    
    // إذا لم تكن مخزنة، نحسب النتيجة
    const result = func(...args);
    console.log('تم حساب القيمة لـ', key);
    
    // نخزن النتيجة
    cache[key] = result;
    return result;
  };
}

// دالة للضرب في 10
function times10(n) {
  return n * 10;
}

// نقوم بتنفيذ الدالة memoize وتمرير times10 ك callback
const memoTimes10 = memoize(times10);

console.log(memoTimes10(9)); // تم حساب القيمة لـ [9]
console.log(memoTimes10(9)); // جلب القيمة المخزنة لـ [9]
```

في هذا المثال:
1. الدالة `memoize` ترجع دالة إغلاق تحتفظ بـ `cache`
2. الدالة المُرجعة لها وصول إلى `cache` حتى بعد انتهاء تنفيذ `memoize`
3. عند استدعاء الدالة المُرجعة، تتحقق من وجود النتيجة في `cache` قبل إعادة الحساب

## English Version

A closure is a function that retains variables from the scope in which it was defined, even after that scope has finished executing. This allows the function to access those variables when it is executed later.

In memoization optimization, we use a closure to maintain a cache object that stores previous results of the function. This way, the function can check if the result has been computed before and return it directly without recalculating.

## Example in JavaScript

```javascript
function memoize(func) {
  // Object to store results
  const cache = {};
  
  // Return a closure
  return (...args) => {
    // Use arguments as a key for storage
    const key = JSON.stringify(args);
    
    // If the result is already cached
    if (key in cache) {
      console.log('Getting cached value for', key);
      return cache[key];
    }
    
    // If not cached, compute the result
    const result = func(...args);
    console.log('Computed value for', key);
    
    // Store the result
    cache[key] = result;
    return result;
  };
}

// Function to multiply by 10
function times10(n) {
  return n * 10;
}

// Create the memoized version
const memoTimes10 = memoize(times10);

console.log(memoTimes10(9)); // Computed value for [9]
console.log(memoTimes10(9)); // Getting cached value for [9]
```

In this example:
1. The `memoize` function returns a closure that retains the `cache`.
2. The returned function has access to `cache` even after `memoize` has finished executing.
3. When the returned function is called, it checks for the result in `cache` before recomputing.