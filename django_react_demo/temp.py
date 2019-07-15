from functools import reduce

def test(x):
    result = []
    for i in range(len(x)):
        z = x[:]
        z.pop(i)
        print("a is : ", z)
        b = reduce(lambda x ,y: x*y, z)
        result.append(b)
    return result

if __name__ == "__main__":
    print(test([1, 2, 3, 4]))
