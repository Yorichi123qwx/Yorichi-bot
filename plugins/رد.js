let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^بحبك| عاوزه اتجوزك|بموت فيك|نتجوز| هنتجوز امتي| انت لي$/i.test(m.text)) { 
     responses = [ 
       'ما احبك على فكره 🗿💔  ',  
       'هفكر في الموضوع',  
             'و انا',  
                   'استحيت',  
                          '.   لا بس بتكثف  ',  
                               'اسكتتتتت عشان مضربكش عيب الكلام ده   ',  
                                     'طيب و بعدين '  
     ]; 

} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       'وعليكم السلام',  
          'وعليكم السلام منور',  
              ' وعليكم السلام كيفك',  
                   'وعليكم السلام ورحمة الله وبركاته'
     ];
 } else if (/^عمو سكونا|عمو سوكونا|عمي سوكونا|سوكونا عمي$/i.test(m.text)) { 
     responses = [ 
       'تريد شي يا حبيب عمك 🐦♥️', 
       '🐦♥️ نعم تفضلل يا حبيب عمگ',
       'حبيبي تريد شي 🐦♥️',
                  '🗿♥️ حبيب عمك شتريد'
  ]; 
} else if (/^لا$/i.test(m.text)) { 
     responses = [ 
       'رايك مو مهم على فكره🐦',  
          'طيب',  
              'يعني موافق بس مكسوف 😂',  
                   'يلا علشانك المره دي هنقول لا' ,
'لا؟؟؟؟ هو انت اللي بتقرر ايه ال لا و ايه ال نعم؟؟'
     ];
     } else if (/^🐯|🐯🐯|🐯🐯🐯🐯|🐯🐯🐯🐯🐯🐯|🐯🐯🐯🐯🐯🐯$/i.test(m.text)) { 
     responses = [ 
       '🐯🐯🐯🐯🐯🐯 ياااااا',  
          '🐯❤️🐯❤️🐯❤️',  
              ' 🐯🐯💔💔',  
                   'هجوم النمور 🐯🐯🐯🐯🐯🐯🐯🐯'
       ];
     } else if (/^🐞|🐞🐞|🐞🐞🐞🐞|🐞🐞🐞🐞🐞|🐞🐞🐞🐞🐞$/i.test(m.text)) { 
     responses = [ 
       'توسيع المجال الخنافس الخبيثه 🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞',  
          'توسيع المجال الخنافس اللانهائيه 🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞',  
              ' 🐞🐞🐞🐞🐞🐞',  
                   'هجوم الخنفساء 🐞🐞🐞🐞🐞🐞'
       ];
} else if (/^ايش افضل انمي|ون بيس عمك|ايه افضل انمي|اريد انمي حلو|افضل انمي$/i.test(m.text)) { 
     responses = [ 
       'لا تثق بمن قال لك ون بيس عمك 🐦👋',  
          'محدش يرد عليه سيبوه بيكلم نفسه',  
              ' انت اكيد ناوي على مشاكل 🐦',  
                   'مفيش انمي حلو كلهم زي بعض'
     ]; 
   }else if (/^ سوكونا عامل ايه|عامله ايه|عاملين ايه|الدنيا عامله ايه|عاملين ايه يشباب$/i.test(m.text)) { 
     responses = [ 
       'كل شيء بخير الحمد لله ',  
          ' مش عارف  ',  
              ' الحمد لله ماشي الحال ',  
                  'الحمد الله',  
                      ' لو انت كويس انا كويس' 
     ]; 
   }else if (/^كل خرا|عرص|خول|متناك|كسمك|علق$/i.test(m.text)) { 
     responses = [ 
       'حرام ي حب ',  
          ' ربنا يسامحك ',  
        'لا تشتم يطفل 🐦',
              ' يسطاا صلي علي النبي واهدي',  
                  'الله يهديك ',  
                   ' استغفر ربك' 
     ];
   }else if (/^انت غبي|بوت غبي|غبي|سكونا غبي|سوكونا غبي$/i.test(m.text)) { 
     responses = [ 
       'بس اذكى منك🐦',  
          ' الغبي اللي بيشوف كل ناس اغبياء 🐦👋',  
        'يا ابني لساتك صغير ما رح تفرق بين الاذكياء و الاغبياء🥱',
              'ايش سويت لك علشان تقولي كدا 🥺',  
                  'ربنا يسامحك 😔',  
                   'بلاش هياط🗿' 
     ];
   }else if (/^بوت|يا بوت|البوت|بوووت|بووووت|بوووووت|بووووووووت $/i.test(m.text)) { 
     responses = [ 
       '*تبا لك ايش تريد*',  
          ' *لو مش عارف تستخدمني اكتب ( .اوامر او .القائمه)* 🗿',  
              ' *يتصدق انا زهقت منك فعلا🐦*',  
                  '*اسمي سوكونا ساما🗿* ',  
                   '*اسمي سكونا ساما🥱*' 
  ]; 
}else if (/^فعلن|شكرن$/i.test(m.text)) { 
     responses = [ 
       'عدل الرساله او احذفها قبل ما يضحكوا عليك 🐦💔',  
          'هو حرف *ن* بقى *أ* من امتى؟؟',  
              'انت ما تعرفش تكتب ولا ايه؟؟',  
                  'لا تثق بأحد قال (فعلان او شكرن) و شكرن🐦'
  ]; 
}else if (/^احي|احااا|احاا|احاااا|احااااا|احااااااا|احااااااااااا|احاااااااااااااااااا$/i.test(m.text)) { 
     responses = [ 
       'لااحات بجد',  
              'احتين على احتك 🐦'
  ]; 
   }else if (/^صباح النور|صباح النعناع الاخصر|صباح الفل|صباح|صباح الخير $/i.test(m.text)) { 
     responses = [ 
       'صباحك عسل ✨💜',
              ' شوفوا مين صحي 😂😂 ارجع نام ارجع محدش فاضي لك',  
                  'انت صحيت وانا رايح انام 🐦👋🏻 ',  
                   'روح نام تاني بقي 🙃' 
   ]; 
     }else if (/^كل ده نور|الجروب نور كده ليه|ايه النور ده|منورين الجدد|منورين|منور $/i.test(m.text)) { 
     responses = [ 
       'نوري انا✨♥',  
          'الجروب نور فعلا✨♥',  
              'نوركم من نوري✨♥',  
                  'الجروب منور✨💜'
  ]; 
}else if (/^تعالي خاص|خاص|راسليني خاص|خاث|راسلني خاث|ارسلي لي خاص$/i.test(m.text)) { 
     responses = [ 
       'سيب الناس في نفسها و شوف لك شغل تاني🐦',  
          'بمشيها لكم دي المره',  
              'خروف العيد الجديد 🐑',  
                  'لا تزعج الاعضاء في الخاص بحذرك🐦'
  ]; 
   }else if (/^اسكت|اسكت|هتسكت امتي|يا ابني اسكت$/i.test(m.text)) { 
     responses = [ 
             'متسكتش عمك بتودينا فداهيه🗿', 
              ' واو طلع لك لسان يبزر لا و تقول اسكت بعد🙄',  
                 ' مفيش طفل بيسكت حد اكبر منه🙄',  
                 'يعني تريد الناس يسكتوا و انت بس تتكلم انت غبي ولا ايه يسطا🗿 ',  
                   'على الاقل السكوت من ذهب🗿' 
     ]; 
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
