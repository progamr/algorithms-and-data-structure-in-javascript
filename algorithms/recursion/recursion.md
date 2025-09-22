# العوديّة (Recursion)

العوديّة هي أسلوب لحلّ المشكلات عبر تعريف الدالة لنفسها على مدخلات أصغر وبطريقة مشابهة متكررة، مع وجود حالة أساسية توقف هذا التكرار.

## خطوات كتابة دالة عوديّة

1. قم بتعريف الحالة الأساسيّة (التي يتوقّف عندها التكرار).
2. قم بتعريف الحالة المتكرّرة (كيف تُجزَّأ المشكلة إلى نسخة أصغر من نفسها).
3. تأكّد من وجود تقدّم نحو الحالة الأساسيّة في كل نداء (حتى لا يحدث تكرار لانهائي).
4. اكتب الدالة بطريقة تكراريّة بحيث في كل مرّة من الاستدعاء نقترب أكثر من الحالة الأساسيّة ثم نُعيد النتيجة.

> ملاحظة: تسمّى الحالة الأساسيّة Base Case والحالة المتكرّرة Recursive Case.

### مثال (عامل العدد: n!)

- التعريف: `n! = n * (n-1)!` و `0! = 1`.
- الحالة الأساسيّة: عندما `n === 0` نرجع `1`.
- الحالة المتكرّرة: نرجع `n * factorial(n-1)`.
- التقدّم: كل نداء يقلّل `n` بمقدار 1 حتى يصل إلى 0.

```typescript
export function factorialRecursive(n: number): number {
  if (n < 0) throw new Error('n يجب أن يكون غير سالب');
  if (n === 0) return 1; // الحالة الأساسية
  return n * factorialRecursive(n - 1); // الحالة المتكرّرة مع تقدّم
}
```

#### نفس المثال باستخدام حلقة (Loop) بدل العوديّة

```typescript
export function factorialLoop(n: number): number {
  if (n < 0) throw new Error('n يجب أن يكون غير سالب');
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
```

### نمط المُراكم (Accumulator Pattern)

نمط المُراكم هو أسلوب في البرمجة العودية حيث نُمرر قيمة متراكمة عبر كل استدعاء عودي. هذا يسمح لنا بحفظ النتائج الجزئية أثناء عملية العودية، مما يجعل الكود أكثر كفاءة وأسهل في الفهم.

#### مثال: دالة لضم عناصر مصفوفة مع فاصل

```typescript
function joinElements(arr: string[], separator: string): string {
  // دالة مساعدة عودية مع مُراكم
  function recurse(index: number, resultSoFar: string): string {
    // أضف العنصر الحالي إلى النتيجة المتراكمة
    resultSoFar += arr[index];
    
    // إذا كنا في العنصر الأخير، أرجع النتيجة النهائية
    if (index === arr.length - 1) {
      return resultSoFar;
    } else {
      // أضف الفاصل واستمر في العودية مع العنصر التالي
      return recurse(index + 1, resultSoFar + separator);
    }
  }
  
  // ابدأ بالعنصر الأول ونتيجة متراكمة فارغة
  return recurse(0, '');
}

console.log(joinElements(['a', 'b', 'c'], ', ')); // 'a, b, c'
```

#### فوائد نمط المُراكم:

- أكثر كفاءة في الذاكرة (tail recursion)
- يمنع أخطاء عمق الاستدعاءات
- أسهل في التتبع والتصحيح

---

# Recursion (English)

Recursion is a problem-solving technique where a function calls itself on smaller instances of the same problem until it reaches a base case that stops further calls.

## How to write a recursive function

1. Define the Base Case (when the recursion should stop).
2. Define the Recursive Case (how the problem reduces to a smaller subproblem).
3. Ensure Progress toward the base case on every call (avoid infinite recursion).
4. Implement the function so it combines the current step with the recursive result and returns the final answer.

### Example (Factorial: n!)

- Definition: `n! = n * (n-1)!` and `0! = 1`.
- Base Case: when `n === 0`, return `1`.
- Recursive Case: return `n * factorial(n-1)`.
- Progress: each call decreases `n` by 1 until it reaches 0.

```typescript
export function factorialRecursiveEn(n: number): number {
  if (n < 0) throw new Error('n must be non-negative');
  if (n === 0) return 1; // Base Case
  return n * factorialRecursiveEn(n - 1); // Recursive Case with progress
}
```

#### Iterative (loop) version of the same example

```typescript
export function factorialLoopEn(n: number): number {
  if (n < 0) throw new Error('n must be non-negative');
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
```

### The Accumulator Pattern

The accumulator pattern is a recursive technique where we pass an accumulated value through each recursive call. This allows us to build results incrementally during the recursion, making the code more efficient and easier to understand.

#### Example: Joining array elements with separator

```typescript
function joinElements(arr: string[], separator: string): string {
  // Helper recursive function with accumulator
  function recurse(index: number, resultSoFar: string): string {
    // Add current element to accumulated result
    resultSoFar += arr[index];
    
    // If at last element, return final result
    if (index === arr.length - 1) {
      return resultSoFar;
    } else {
      // Add separator and continue with next element
      return recurse(index + 1, resultSoFar + separator);
    }
  }
  
  // Start with first element and empty accumulator
  return recurse(0, '');
}

console.log(joinElements(['a', 'b', 'c'], ', ')); // 'a, b, c'
```

#### Benefits of the accumulator pattern

- More memory efficient (tail recursion)
- Prevents call stack overflow errors
- Easier to trace and debug
chj
---

## ملاحظات إضافيّة / Extra Notes

- العوديّة مفيدة عندما يسهل تعريف المشكلة عبر نفسها (مثل الأشجار، التقسيم والحل، البحث الثنائي...).
- في بعض الحالات، الحل الحَلَقي (Loop) يوفر ذاكرة أقل من العوديّة إذا لم نستخدم تحسينات مثل التحويل إلى tail recursion أو memoization.
- Always validate inputs and guarantee termination by moving toward the base case.