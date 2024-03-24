/*
1. Avoid declaration of data type, object & functions globally --> as they may overwritten by some other code when executing
2. declare variables on top, avoid unwanted declaration & re-declarations
3. Initialize the vars when you declare
4. use const for objects & arrays --> to prevent type change acidentally
5. Don't use new(), instead:
    Use "" instead of new String()
    Use 0 instead of new Number()
    Use false instead of new Boolean()
    Use {} instead of new Object()
    Use [] instead of new Array()
    Use /()/ instead of new RegExp()
    Use function (){} instead of new Function()
6. Beware of Automatic Type Conversions since JavaScript is loosely typed:
    A variable can contain all data types
    A variable can change its data type
    Beware that numbers can accidentally be converted to strings or NaN (Not a Number)
    When doing mathematical operations, JavaScript can convert numbers to strings
7. use ===(checks type & value) instead of == (check only the value)
8. Avoid Number, String, and Boolean as Objects
9. If a function is called with a missing argument, the value of the missing argument is set to undefined
        Undefined values can break your code. It is a good habit to assign default values to arguments
10. Use default case for switch
*/