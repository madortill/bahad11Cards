// שם הלומדה
const TITLE = "מהות ושליטה בכ\"א";

//  Max number of question in exam. Make sure it isn't more than the number of questions we have!
const AMOUNT_EXAM_QUESTIONS = 0;

const TIME_FOR_EXAM = "11:00";


/*              Edit notes:
    1. Valid card types: youtube, video-and-text, pic-and-text, text, listNumbers, listDots
    2. Title class: "sub-title" , list class: "list", place on the outer element <ol> or <ul> 

                        HOW TO CREATE NEW COLOR
            search for the listed colors and switch to the desired ones
    1. Primary color: #1aa3a3;
    2. Secondary color: #67dfcb;
    3. Text color: #1f3e3e
    4. Open image + gradient color: #629191;
            */
    
    /* amountOfQuestions - max number of questions from the subject that will appear in the test*/
const DATA = { 
    "חשיבות טיפול בהון האנושי": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        "amountOfQuestions": 0,
        "questionsExam": [
        ],
        "learningContent": {
            "מצפן הרמטכל": {
                "מצפן הרמטכל": [
                    {
                    cardType: "videoAndText",
                    video: ""

                }
                ]
            }
        }
    },
    "שליטה בכוח אדם": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        "amountOfQuestions": 0,
        "questionsExam": [
        ],
        "learningContent": {
            "דו\"ח 1": {
                "תפקיד מחוץ ליחידה": [
                    {
                        cardType: "text",
                        content: `חייל אשר לא נמצא ביחידה מעל שלושה ימים ברצף נדרש בצו סיפוח לאותו מקום בו נמצא, נדרש לדבר עם המשרד המשא"ן.`,
                    }
                ], 
                "סטטוסים מרכזיים": [
                    {
                        cardType: "listDots",
                        numList: "5",
                        li1: "נוכח",
                        li2: `חופשה שנתית: <ul class="list">
                        <li>מכסה חובה- 18 ימי חופש, 5 ימי מפקד שניתן לתת לאחר סיום כלל ימי החופשה.</li>
                        <li>מכסה קבע שנה ראשונה- 14.</li>
                        </ul>`,
                        li3: `חופשות מיוחדות- ישנם מספר חופשות מיוחדות ניתן לבדוק מול משרד המשא"ן/ת"ש.`,
                        li4: `חופשת מחלה.`,
                        li5: `ימי סידורים – יש לשים לב ע"פ זכאות של חייל או"י.`
                    }
                ],
                "": [
                    {
                        cardType: "listDots",
                        numList: "5",
                        li1: `דיווח נוכחות הינו הכלי הבסיסי והמרכזי לשליטה בכוח אדם, משמש לנו עזר שליטה
                        ומעקב יומיומי קבוע על כלל פקודינו.`,
                        li2: `ניתן להזין מ5:00 נוכחות באפליקציה.`,
                        li3: `עד השעה 10:15 הפרט יכול למלא על עצמו.`,
                        li4: `עד השעה 10:30 מפקד מחויב לאשר את נוכחות מסגרתו.`,
                        li5: `סרטון של דוח 1`
                    }
                ]
            },
            "פורום חווית המשרת": {
                "": [
                    {
                        cardType: "text",
                        content: `<div class="title">מטרה</div>
                        <div class="content">
                        שיפור המעטפת והמענה לטיפול בפרט ברמה היחידתית דרך יצירת תיאום בין כלל התהליכים המתקיימים ביחידה בהקשר הטפול בפרט.</div>
                        <div class="title">שיטה</div>
                        <div class="content"> 1. איסוף מידע על התנהלות יחידתית אל מול הפרט דרך סקרים, שיחות חתך, שיחות אישיות פורמליות וא- פורמליות. <br>
                        2. ישיבה בראשות מפקד היחידה עם מספר גורמים שעוסקים בתפקידם בטיפול בפרט.</div>`
                    }
                ],
            }
            // "תת נושא ": {
            //     "": [
            //         {
            //             cardType: "text",
            //             content: ""
            //         }
            //     ],
            // }
        },
    },
    "פרט": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        "amountOfQuestions": 0,
        "questionsExam": [
        ],
        "learningContent": {
            "החייל הבודד": {
                    "חופשות החייל הבודד": [
                        {
                            cardType: "listDots",
                            numList: "5",
                            li1: `יום סידורים- אחת לחודש בהכשרה ראשונית ואחת לחודשיים בשאר היחידות (נדרש להזין בדוח 1 "יום סדורים")`,
                            li2: `יציאה מוקדמת- סופ"ש או חג נדרש לשחרר את החייל בשעה שתתאפשר לו להגיע עד השעה 10:00.`,
                            li3: `חופשה מיוחדת בעת ביקור הורים בארץ- זכאות ל8 ימים בכל שנת שירות. בהכשרה ראשונית 4 ימים.`,
                            li4: `חופשה מיוחדת למימוש ביקור הורה בחו"ל- 30 ימים בכל שנה קלנדארית.`,
                            li5: `חופשה לטובת מעבר דירה- מיוחדת של יומיים.`,
                        }
                    ],
                    "סרטון הסבר על סוגי חיילים בודדים": [
                        {
                            cardType: "listDots",
                            numList: "10",
                            li1: `מענק חודשי הנכנס למשכורת.`,
                            li2: `תו "ידידות" בחגים.`,
                            li3: `זכאות אוטומטית לתווי קנייה.`,
                            li4: `מימון כרטיס טיסה.`,
                            li5: `הטבת דיור- לבדוק מול משרד הת"ש יש מספר הטבות.`,
                            li6: `דמי כלכלה.`,
                            li7: `הנחה בתשלומים- חייל המשכיר דירה זכאי לקבל הנחה בחשמל וארנונה.`,
                            li8: `הובלת ציוד אישי.`,
                            li9: `הטסת חירום.`,
                            li10: `מענקים ממשרד הקליטה והבינוי.`,
                        }
                    ],
            },
            "אוכלוסיות מיוחדות": {
                "ביקורי בית": [
                    {
                        cardType: "videoAndText",
                        video: "",
                        content: `סוגי אוכלוסייה - <br>
                        סרטון אוכלוסיות וחיילים בודדים בפנים <br> <br>
                        ישנן מספר סיטואציות בהן נדרש לבצע ביקור בית. 
                        יש לשים לב למספר דגשים -
                        <ul class = "list">
                        <li> תיאום הביקור- שיתוף המש"קית הת"ש. </li>
                        <li> במהלך הביקור לשים לב לחשיבות הרגישות ולכלל הפרטים. </li>
                        <li> לאחר הביקור- כתיבת סיכום הביקור והעברת הסיכום למש"קית ת"ש עם המלצות להמשך. </li>
                        </ul>`
                    }
                ],
            },
            "כלים לטיפול בת\"ש": {
                "סיוע כלכלי": [
                    {
                        cardType: "listDots",
                        numList: "4",
                        li1: "מענקים: מתן סכום כספי לחייל המעלה בעיה כלכלית דחופה שלו או של משפחתו.",
                        li2: "הלוואות: מתן סכום כספי בגובה מרבי של 1,200 ₪ לשנת שירות.",
                        li3: `מוצרים מטעם "יחד למען החייל"- מתן מוצרי חשמל, ריהוט ותווי קנייה ברשתות השונות.`,
                        li4: `מענק אכ"א חריג: סיוע ייחודי שיינתן רק לאחר שנבחנו כלל האופציות לסיוע כלכלי והבעיה טרם נפתרה.`,
                    }
                ],
            },
            "החייל הנשוי": {
                "": [
                    {
                        cardType: "text",
                        content: `
                                <div class="content">
                                    <ul class="list">
                                        <li>חופשה מיוחדת לרגל נישואין- זכאות ל10 ימים ע"ח חופשה מיוחדת.</li>
                                        <li>מחלת ילד- חייל שהינו הורה של ילד זכאי ל8 ימים לכל היותר.</li>
                                        <li>חופשה מיוחדת עבור לידה - זכאות ל8 ימים ניתן לנצל עד חודש לפני מועד הלידה ועד חודש אחרי.</li>
                                    </ul>
                                </div>
                                <div class="sub-title">הטבות נוספות</div>
                                <div class="content">
                                    <ul class="list">
                                        <li>חייל נשוי זכאי ליום סידורים אחת לחודש בהכשרה ראשונית ואחת לחודשיים בשאר היחידות.</li>
                                        <li>הת"ש 3- חייל נשוי <strong>אב לילדים</strong> זכאי להת"ש 3 מטכ"לי, החייל יכול לחתום ויתור על זכאותו על מנת לשרת ביחידה קרבית.</li>
                                    <ul>
                                </div>
                                `
                    },
                    {
                        cardType: "text",
                        content: `
                                <div class="sub-title">הטבות כספיות</div>
                                <div class="content">
                                    <ul class="list">
                                    <li>תשלומי משפחה</li>
                                    <li>הוצאות אחזקת דירה</li>
                                    <li>מענק לידה</li>
                                    <li>השתתפות בשכר דירה</li>
                                    <li>מענק חד פעמי לרגל הנישואין</li>
                                    <li>זכאות אוטומטית לתווי קנייה</li>
                                    </ul>
                                </div>
                                <div class="sub-title">חופשות מיוחדות</div>
                                <div class="content">
                                    <ul class="list">
                                        <li>חופשה מיוחדת עקב הריון בת זוג- חופשה של שלושה ימים לטובת טיפולים/בדיקות.</li>
                                        <li>חופשה מיוחדת עקב מחלת בן זוג- חייל אשר נאלץ להישאר בביתו לצורך טיפול בבן או בת הזוגו לאור מצבו הרפואי, עד 6 ימים.</li>
                                    <ul>
                                </div>
                                `
                    }
                ],
            },
            "בקשות והטבות נוספות לפרט": {
                "": [
                    {
                        cardType: "text",
                        content: `<span class="sub-title">החזר הוצאות נסיעה ליישוב חסר תחב\"צ - </span> במידה והיישוב מוכר כיישוב חסר תחבורה ציבורית ע"פ רשימה קיימת, החייל זכאי לקבלת ההחזרים. <br>
                        <span class="sub-title">בקשת אובדן ציוד אישי -</span> חייל אשר שציודו אבד או ניזוק בפעילות מבצעית או במקרה של שריפה או תאונה.<br>
                        <span class="sub-title"> טיפול שיניים פרוטטי- </span> יינתן לחיילים הסובלים מבעיות שיניים המצריכות טיפול נרחב.
`
                    }
                ],
            },
            "ראיונות": {
                "ראיונות שיכולים להתבצע מרמת מ\"מ וזמני ביצועם": [
                    {
                        cardType: "listDots",
                        numList: "8",
                        li1: `ראיון קליטה-  עד 3 ימים.`,
                        li2: `ראיון שחרור- עד 30 יום טרם השחרור.`,
                        li3: `חזרה מסיפוח ר"מ 2 או חופשת מחלה מעל 30 יום- עד 5 ימים.`,
                        li4: `חזרה ממיוחדת (אישית\כלכלית בלבד) שערכה מעל 21 יום- עד 5 ימים.`,
                        li5: `חזרה ממיוחדת אבל קרוב מדרגה ראשונה- עד 5 ימים.`,
                        li6: `סיום מחבוש/ מעצר- 5 ימים עבור מחבוש/מעצר מעל 14 ימים.`,
                        li7: `ראיון התאמה לשירות `,
                        li8: `(תב"ן מעל 90 יום)- עד חמישה ימים.`,
                    }
                ],
            },
            // "תת נושא ": {
            //     "": [
            //         {
            //             cardType: "text",
            //             content: ``
            //         }
            //     ],
            // },
        },
    },
    "אירועים רגישים": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        "amountOfQuestions": 0,
        "questionsExam": [
        ],
        "learningContent": {
            
            "נפקדים": {
                "": [
                    {
                        cardType: "text",
                        content: `
                        <div class="title">מיהו נפקד?</div>
                        <div class="content">
                            <ul class= "list">
                                <li>חייל שעזב את יחידתו שלא ברשות.</li>
                                <li>חייל שעזב את יחידתו או את תפקידו ברשות, אך לא חזר.</li>
                                <li>חייל שבמהלך חופשה\שירות טס לחו"ל ללא היתר</li>
                                <li>חייל שנשלח מיחידתו ליחידה אחרת ולא התייצב.</li>
                            </ul>
                        </div>
                        <div class="title">השלכות הנפקדות</div>
                        <div class="content">
                            <ul class= "list">
                                <li>דין משמעתי</li>
                                <li>אי קבלת שכר</li>
                                <li>טיפול ת"ש שנפסק</li>
                                <li>טיפול רפואי שנפסק מהיום ה60 </li>
                                <li>ימי תב"ן שלילי</li>
                            </ul>
                        </div>`
                    }
                ],
                "השלכות עריקות": [
                        {
                            cardType: "listDots",
                            numList: "6",
                            li1: `שלילת הטבות ת"ש- דירת יל"ח, בית החייל.`,
                            li2: `במקרה מוות/פציעה- לא יוכר לזכויות.`,
                            li3: `רישום פלילי ללא התיישנות.`,
                            li4: `שיפוט בבית דין.`,
                            li5: `איסור יציאה/חזרה לארץ.`,
                            li6: `מעצר- משטרה כחולה/צבאית.`,
                        }
                    ],
                "סד\"פ חייל נפקד": [
                        {
                            cardType: "listNumbers",
                            numList: "5",
                            li1: `להודיע לרמה ממונה ולקצין המשא"ן ביחידה.`,
                            li2: `ביקור ראשון של מפקד עד היום ה-3 לנפקדות. אם החייל עם נשק נדרש ביקור עד היום ה-2.`,
                            li3: ` ביקור בית שני של המפקד בין היום 7-15 לנפקדות. אם החייל עם נשק נדרש ביקור בין היום 2-8.`,
                            li4: `במידה והחייל לא חזר ליחידה נכריז על עריקות בית היום 21-23, נדרש לעשות טופס טיולים יוצא, לזכות את ציוד החייל. ביקור בית תוך 14 יום והבאת מכתב לעריק ותיעוד הביקור.
                            במידה החייל חזר ליחידה, תאריך החזרה הוא יום ההתייצבות של הנפקד או מעצרו ע"י מ"צ.`,
                            li5: `נדרש לשפוט את החייל תוך 24 שעות.`,
                        }
                    ],
            },
            "כלואים": {
                "השלכות הכליאה": [
                    {
                        cardType: "listDots",
                        numList: "5",
                        li1: `עיכוב בדרגה- עיכוב של שנה מיום שחרורו מהכלא.`,
                        li2: `רישום בתיק אישי- הכליאה נרשם בתיק  האישי שלו משרת ומלווה אותו לאורך כל השירות.`,
                        li3: `משכורת- חייל שנמצא בכלא אינו מקבל משכורת וכמו כן גם שאר הזכאויות נפסקות.`,
                        li4: `המשך שירות- לעיתים דנים על המשך שירותו של החייל ואף משנים את שיבוצו\ ממליצים על שיחרורו`,
                        li5: `תב"ן שלילי- כאשר חייל נמצא במצב שירות לא תקין כמו כליאה, נדרש להחזיר את כלל הימים בסוף שירותו.`,
                    }
                ],
            "ביקורים": [
                    {
                        cardType: "listDots",
                        numList: 5,
                        li1: `מפקדו הישיר של החייל יבקרו את הכלוא במתקן הכליאה.`,
                        li2: `את הביקור נדרש לקבוע מראש מול מתקן הכליאה.`,
                        li3: `במידה והחייל קיבל מעל 10 יום מחבוש, הביקור הראשון יעשה עד היום 10 כולל.`,
                        li4: `במידה והחייל במחבוש מעבר ל35 ימים, יש לבצע ביקור נוסף בין היום ה35 עד ליום 50 או עד סיום הכליאה.`,
                        li5: `במידה והחייל כלוא מעבר ל90 ימים, יש לבצע ביקור נוסף בין היום ה90 עד ליום 110 או עד לסיום הכליאה.`,
                    }
                ],
        },
            "אינדיקציות": {
                    "": [
                        {
                            cardType: "text",
                            content: `<span class="sub-title">מדד שק"ד: &nbsp</span>(שיקוף קשב דיפרנציאלי) נועד לסייע בניבוי המשך שירות תקין עבור חיילים, איתור מגמות ושינויים התנהגותיים ומיקוד המפקדים לחיילים אשר נדרשים תשומת לב גבוהה יותר. <br>
                            <span class="sub-title">אלרגנים: </span> חיילים אשר יש רגישות למאכל מסוים (צליאק) או אלרגיות המסכנות חיים, חיילים אלו זכאים לקבלת דמי כלכלה.`
                        }
                    ],
                    "ביקור בית לחייל מאושפז": [
                        {
                            cardType: "text",
                            content: `
                            לביקור בית לחייל אשר נמצא במצב רפואי מסוים חשוב ונדרש בשל כמה מטרות: <br>
                            <ul class = "list">
                            <li> מתן תחושת אכפתיות ודאגה מצד המפקד. </li>
                                <li> שייכות ליחידה והעלאת מוטיבציה.  </li>
                                <li> שליטה וביקורת של היחידה לגבי מצב החייל. </li>
                                <li>לקחת את נשקו של החייל וצל"ם. </li>
                            </ul>
                            ביקורי בית לחייל מאושפז יערכו על פי מצבו של החייל וסוג האוכלוסייה (חייל בודד וכו').

                            `
                        }
                    ],
            },
            "מאושפזים": {
                "": [
                    {
                        cardType: "text",
                        content: `<span class="sub-title">מאושפז</span>- חייל אשר עקב מחלה או פציעה- מאושפז בבית חולים. <br>
                        <span class="sub-title">גימליסט/גימלים ממושכים</span>- חייל השוהה בימי מחלה מעל 10 יום כולל. <br>
                        <span class="sub-title">ר"מ 2-</span> שלוחה צה"לית בתוך בתי חולים אזרחיים. תפקידה לעזור לחייל, להיות גורם מקשר בין בי"ח האזרחי למערכת הצבאית.`
                    }
                ],
            },
            "תת נושא ": {
                "חייל חסר ביחידה": [
                    {
                        cardType: "text",
                        content: `סרטו של ביסלח (דניאל פייגנבאום)`
                    }
                ],
            },
        },
    },
    "תהליך הוצאה לקצונה": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        "amountOfQuestions": 0,
        "questionsExam": [
        ],
        "learningContent": {
            
            "איתור מועמדים": {
                "": [
                    {
                        cardType: "text",
                        content: `
                        <div class="title">איתור מועמדים לקצונה</div>
                        <div>איתור מועמדים בעלי יכולות גבוהות מתאימות ע"י המפקדים.</div>
                        <br> <div class="title">המתאם לקצונה</div>
                        המתאם לקצונה מגלם בתוכו מספר פרמטרים אשר מעידים על מידת התאמתו של החייל להיות קצין בצה"ל
                        המתאם מחולק ל-6 רמות: <br>
                        <u>חסרי התאמה:</u> מתאם 0א, 0ב, 0ג <br>
                        <u>בעלי התאמת רף לקצונה:</u> מתאם 1 <br>
                        <u>בעלי התאמת ליבה לקצונה:</u> מתאם 2, 3 <br>
                        `
                    }
                ],
            },
            "תהליך היציאה לקצונה": {
                "השלבים בתהליך הקצונה:": [
                    {
                        cardType: "listDots",
                        numList: "8",
                        li1: `המלצה על המועמד ובדיקת נתוני איכות`,
                        li2: `ראיונות ביחידה- מפקד ישיר, מפקד היחידה`,
                        li3: `ראיונות בחיל- ראיונות, מיונים וכנסים נוספים בהתאם לדרישות החיל`,
                        li4: `אימות נתונים (במידת הצורך)`,
                        li5: `מבד"קים`,
                        li6: `וידוא וטיפול בנתונים נוספים (לדוג ‘סיווג ביטחוני)`,
                        li7: `קבלת לו"ז יציאה לקצונה מהחיל`,
                        li8: `מסדר מקדים טרם קליטה לבה"ד 1 – טפסים וציוד נדרש`,
                    }
                ],
            },
            "חוו\"ד 870": {
                "חוו\"ד 870 הוא חוות דעת של המפקד על המועמד לקורס הקצינים": [
                    {
                        cardType: "text",
                        content: `<ul class= "list">
                                    <li>על המפקד הממלא להיות לפחות 3 חודשים מפקדו של המועמד.</li>
                                    <li>על המפקד להעביר את המשוב לחייל ולהחתים אותו טרם ההגעה למבד"ק.</li>
                                    <li>על החוו"ד להיות מוקלד במחשב ולא כתוב ידנית.</li>
                                </ul>
                                <strong>אין להתחייב בפני החיילים המומלצים כי ייצאו לקורס קצינים!</strong>`
                    }
                ],
            },
        },
    },
    "נשר": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        "amountOfQuestions": 0,
        "questionsExam": [
        ],
        "learningContent": {        
            "הגדרות הנשר": {
                "נשר": [
                    {
                        cardType: "text",
                        content: `
                        <div class="content">נשר מוגדר כתנועת יציאה אם כי תוצאה מאי סיום הכשרה ואם תוך כדי שירות (שחרור מצה"ל, פסילת מקצוע ועוד).</div>
                        <strong>נשר בשירות- חייל ייספר כנשר בשירות במידה וענה על אחת מההגדרות הבאות:</strong>
                        <li>נשר משירות- שחרור מהצבא בטרם עת</li>
                        <li>נשר מהיחידה- הצבה ביחידה אחרת במדרג נמוך מיחידת הנשר.</li>
                        <li>נשר מקצועי- שינוי מקצוע וירידת מדרג מקצועי.</li>
                        `
                    }
                ],
            },
        },
    },
    // "נושא": {
    //     "icon":  "../assets/images/learning/Artboard 4.svg",
    //     "amountOfQuestions": 0,
    //     "questionsExam": [
    //     ],
    //     "learningContent": {
            
    //         // "תת נושא ": {
    //         //     "": [
    //         //         {
    //         //             cardType: "text",
    //         //             content: ``
    //         //         }
    //         //     ],
    //         // },
    //     },
    // },
};



/********************************************************************************************************/
/********************************************************************************************************/
/********************************************************************************************************/
/*****  אובייקטים לפי סוג הכרטיסייה המכניסים את התוכן של כל כרטיסייה אל תוך הכרטיסייה  ********/

/**
 * # @type {{[index: string]: {init: (card: HTMLElement, json: any) => void}}}
 */
let CARD_TYPES = {};

CARD_TYPES.text = {
    init(card, json) {
        if (!json.content) {
            throw new Error(`Missing content in cardType text`);
        }
        card.querySelector(".content").innerHTML = json.content;
    }
}

CARD_TYPES.picAndText = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".content").innerHTML = json.content;
        if (!json.content) {
            card.querySelector(".content").remove();
        }
    }
}

CARD_TYPES.videoAndText = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
        card.querySelector(".content").innerHTML = json.content;
        if (!json.content) {
            card.querySelector(".content").remove();
        }
    }
}

CARD_TYPES.youtube = {
    init(card, json) {
        if (!json.youtube.includes("embed")) {
            throw new Error("Make sure all youtube links are ment to be embedded and not watched");
        } else {
        card.querySelector(".youtube").src = json.youtube;
        card.querySelector(".content").innerHTML = json.content;
            if (!json.content) {
                card.querySelector(".content").remove();
            }
        }
    }
}

CARD_TYPES.listDots = {
    init(card, json) {
        if (!json.numList) {
            throw new Error(`Missing numList value in cardType listDots`);
        }
        for (let num = 1; num <= Number(json.numList); num++) {
            card.querySelector(".list").innerHTML += `<li>${json["li"+num]}</li>`;
        }
    }
}
CARD_TYPES.listNumbers = {
    init(card, json) {
        if (!json.numList) {
            throw new Error(`Missing numList value in cardType listNumbers`);
        }
        for (let num = 1; num <= Number(json.numList); num++) {
            card.querySelector(".list").innerHTML += `<li>${json["li"+num]}</li>`;
        }
    }
}

alert("חסרים שלושה סרטונים!")