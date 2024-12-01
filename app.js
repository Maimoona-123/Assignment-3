// Expression Short Circuit

// Exp: 1

let exp1 = ((4 + 5) && "abc" || false + "test") * (1-- || 1--) || (false && (++1 + 1)) * "end";
// Ans is : NaN 


// Exp: 2

let exp2 = 10 * ("foo" && 5 + (++6) || "bar") && (false + --"test") || 0 && true;
//    Ans is : 0


// Exp: 3

let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
//   Ans is : NaNResult


// Exp: 4

let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
//   Ans is : 0


// Exp : 5

let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
// Ans is : true


// Exp : 6

let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
//   Ans is : 11


//  Exp : 7 

let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
//  Ans is : 9


// Exp : 8

let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
//  Ans is : "value"


// Exp : 9 

let exp9 = 3 * "abc" + (true + 1) || (++a + "result") && (3 + "result") || null;
//  Ans is : "3result"


// Exp : 10

let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
//   Ans is : 1


//  Exp : 11 

let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
//   Ans is : NaN


// Exp : 12  

let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
//    Ans is : "result"


// Exp : 13

let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
//   Ans is : 4


//  Exp : 14

let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
//  Ans is : "end"


//  Exp : 15

let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
// Ans is : "NaNresult8"


// Exp : 16

let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
//   Ans is : null


// Exp : 17

let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
// Ans is : 4


// Exp : 18

let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
//   Ans is : 0


//  Exp : 19

let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
// Ans is : "foo"


//  Exp : 20

let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
//   Ans is : "end5"


//  Exp : 21

let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
//   Ans is : "testfalse"


// Exp : 22

let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
//  Ans is : "test"


// Exp : 23

let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
//  Ans is : "result"


//  Exp : 24

let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
//   Ans is : 2


//  Exp : 25

let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
//  Ans is : 0


//  Exp : 26

let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
//   Ans is : 7


//  Exp : 27

let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
//    Ans is : "start0"


// Exp : 28

let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
//   Ans is : 3


// Exp : 29

let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
//   Ans is : "NaNresult"


//  Exp : 30

let exp30 = (true + 3) * "test" || 1 * 5 & (false + "value") + "end" || a--;
//   Ans is : "0end"


//  Exp : 31  

let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
// Ans is : "3"


// Exp : 32

let exp32 = (0 + 3) * (true + false) || 5 * 'hello' + 2 && (false + "test");
//   Ans is : 0


//  Exp : 33  

let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
//  Ans is : "end"


// Exp : 34    

let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
// Ans is : "hello0"


//  Exp : 35

let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
//  Ans is : false


//  Exp : 36

let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
// Ans is : 2


// Exp : 37

let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
//    Ans is : "2test"


//  Exp : 38

let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
//  Ans is : "2end"


// Exp : 39

let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
// Ans is : 2


//  Exp : 40

let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
// Ans is :   6


//  Exp : 41

let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
//    Ans is : "hello"


//  Exp : 42

let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
//  ANs is : NaN


//  Exp : 43

let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
//  Ans is : "start5"


//  Exp : 44

let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
// Ans is "value1"


//  Exp : 45

let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
// Ans is : 8


//  Exp : 46

let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
//    ANs is : "test"


//  Exp : 47

let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
//  Ans is : 8


//  Exp : 48

let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;
// Ans is : NaN


// Exp : 49

let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
//  Ans is :     16


//   Exp : 50

let exp50 = 32 && true - ++a && "" || "true"; // for a = 5
//   Ans is : "true"


//  Exp : 51   

let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
//    Ans is : 7


//  Exp : 52

let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
//    Ans is : NaN


//  Exp : 53

let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
//   Ans is : "startend"


//  Exp : 54

let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
//  Ans is : NaN


//  Exp : 55

let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
//    Ans is : "startNaN"


//  Exp : 56

let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
//    ANs is :  "4test"


//  Exp : 57

let exp57 = (3 * "test" + 1) || (++a && a--) * "result" || "value";
//   ANs is : "value"


//  Exp : 58

let exp58 = (a-- + "start") * "result" || (false + 2) + "end" + 3;
//   Ans is : "2end3"


//  Exp : 59

let exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
//  ANs is : 2


// Exp : 60

let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
// Ans is : NaN


//  Exp : 61

let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
// Ans is : NaN


//  Exp : 62

let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
//    Ans is : "startNaN"


// Exp: 63

let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
// Ans is : "valueNaN"


// Exp : 64

let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
//  Ans is : "startfalse"


// Exp : 65

let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
//  ANs is : "valueNaN"


// Exp : 66

let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
//  Ans is : "NaNresult"


// Exp : 67

let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
//  Ans is : "startNaN"


// Exp : 68

let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
//   Ans is : "2result"


// Exp : 69

let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
// Ans is : NaN


// Exp : 70

let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
// Ans is : 3


// Exp : 71

let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
// Ans is "test6"


// Exp : 72

let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
// Ans is : NaN


// Exp : 73

let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
// Ans is : "NaNstart"


// Exp : 74

let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
// ANs is : "NaNstart"


// Exp : 75

let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result";
// Ans is : NaN

