import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const OdobAhloq = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('bob-1');

    const sections = [
        { id: 'bob-1', title: '1-bob. Umumiy qoidalar' },
        { id: 'bob-2', title: '2-bob. Kodeksning prinsiplari' },
        { id: 'bob-3', title: '3-bob. Korrupsiyaga qarshi kurashish' },
        { id: 'bob-4', title: '4-bob. Yurish-turish va rasmiy muloqot' },
        { id: 'bob-5', title: '5-bob. Manfaatlar toʻqnashuvi' },
        { id: 'bob-6', title: '6-bob. Oʻzaro munosabatlar' },
        { id: 'bob-7', title: '7-bob. Odob-axloq majburiyatlari' },
        { id: 'bob-8', title: '8-bob. Ragʻbatlantirish va chora' },
        { id: 'bob-9', title: '9-bob. Odob-axloq komissiyasi' },
        { id: 'bob-10', title: '10-bob. Yakuniy qoida' }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-extrabold text-blue-900 mb-8 pb-4 border-b-2 border-blue-100">
                {t('nav.odobAhloq')}
            </h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Navigation */}
                <div className="w-full lg:w-1/4">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sticky top-24">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 px-2">Mundarija</h3>
                        <nav className="space-y-1">
                            {sections.map(section => (
                                <button
                                    key={section.id}
                                    onClick={() => {
                                        setActiveTab(section.id);
                                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                                        activeTab === section.id 
                                            ? 'bg-blue-600 text-white shadow-md' 
                                            : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                                    }`}
                                >
                                    {section.title}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Content Area */}
                <div className="w-full lg:w-3/4">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
                        <div className="mb-10 text-center">
                            <h2 className="text-2xl font-bold text-gray-800">O‘zbekiston davlat konservatoriyasi</h2>
                            <h3 className="text-3xl font-extrabold text-blue-900 mt-2">ODOB-AXLOQ KODEKSI</h3>
                        </div>

                        <div className="space-y-12 text-gray-700 leading-relaxed">
                            {/* Bob 1 */}
                            <section id="bob-1" className="scroll-mt-24">
                                <h4 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-gray-200">1-bob. Umumiy qoidalar</h4>
                                
                                <div className="mb-6">
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">1-modda. Ushbu kodeks bilan tartibga solinadigan munosabatlar</h5>
                                    <p>Ushbu Kodeks Oʻzbekiston Respublikasi "Taʼlim toʻgʻrisida"gi qonuni, Oʻzbekiston Respublikasi oliy taʼlim tizimini 2030-yilgacha rivojlantirish konsepsiyasi, Oʻzbekiston Respublikasi Prezidentining Davlat oliy taʼlim muassasalarining akademik va tashkiliy-boshqaruv mustaqilligini taʼminlash boʻyicha qoʻshimcha chora-tadbirlar toʻgʻrisidagi qarori hamda boshqa qonun va qonunosti hujjatlarga muvofiq ishlab chiqilgan boʻlib, oliy taʼlim muassasasi professor-oʻqituvchi va boshqa xodimlari (texnik, yordamchi), talaba-magistrantlari, doktorantlari (keyingi oʻrinlarda – xodim, talaba va doktorant) kasbiy odob-axloqining tamoyillari, normalari, taʼlim jarayoni va xizmatdagi xulq-atvorining asosiy qoidalari bilan bogʻliq munosabatlarni tartibga soladi.</p>
                                </div>

                                <div className="mb-6">
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">2-modda. Odob-axloq kodeksining maqsad va vazifalari</h5>
                                    <p className="mb-2">Odob-axloq kodeksining maqsadlari:</p>
                                    <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li>professor-oʻqituvchi, xodim, talaba va doktorantlar madaniyatini milliy hamda umuminsoniy qadriyatlar asosida shakllantirish;</li>
                                        <li>taʼlim muassasalariga oid odob-axloqning tushunchasini shakllantirish va takomillashtirib borish;</li>
                                        <li>professor-oʻqituvchi, xodim, talaba va doktorantlarni O‘zDKva uning qadriyatlariga hurmat ruhida tarbiyalash;</li>
                                        <li>taʼlim muassasasida kiyinish, tashqi koʻrinish va xulq-atvorga boʻlgan talablarni oʻrnatishdan iboratdir.</li>
                                    </ul>
                                    <p className="mb-2">Odob-axloq kodeksining vazifalari quyidagilardan iborat:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>O‘zDK professor-oʻqituvchi, xodim, talaba va doktorantlari oʻrtasida huquqbuzarlik va jinoyatchilikning oldini olishga qaratilgan profilaktik tadbirlarni amalga oshirish;</li>
                                        <li>O‘zDKda zoʻravonlik, shafqatsizlik va hayosizlik kabi nomaqbul hatti-harakatlar bilan shugʻullanish va (yoki) targʻibot-tashviqot qilinishini oldini olish;</li>
                                        <li>turli salbiy illatlar va milliy mentalitetimizga yot boʻlgan gʻoya va qarashlar, ekstremizm, separatizm, fundamentalizm va "ommaviy madaniyat"ning taʼsir hamda xurujlarni targʻibot-tashviqot qilinishiga oid harakatlarni oldini olish;</li>
                                        <li>professor-oʻqituvchi, xodim, talaba va doktorantlarda ijtimoiy muhitni shakllantirish va yuksaltirish.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">3-modda. Kodeksning amal qilish doirasi</h5>
                                    <p>Ushbu Kodeks O‘zDKning barcha professor-oʻqituvchi, xodim, talaba va doktorantlariga nisbatan tatbiq etiladi.</p>
                                </div>
                            </section>

                            {/* Bob 2 */}
                            <section id="bob-2" className="scroll-mt-24">
                                <h4 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-gray-200">2-bob. Kodeksning prinsiplari</h4>
                                
                                <div className="mb-6">
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">4-modda. O‘zDK professor-oʻqituvchi, xodim, talaba va doktorantlari xulq-atvorining asosiy prinsiplari</h5>
                                    <p>Mazkur Kodeks qonuniylik, fuqarolarning huquqlari, erkinliklari va qonuniy manfaatlarining ustuvorligi, vatanparvarlik, xizmat va oʻqish burchiga sodiqlik, adolat, halollik va xolislik, samaradorlik va tejamkorlik prinsiplariga asoslanadi.</p>
                                </div>

                                <div className="mb-6">
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">5-modda. Qonuniylik prinsipi</h5>
                                    <p>O‘zDK professor-oʻqituvchi, xodim, talaba va doktorantlari Oʻzbekiston Respublikasi qonunchiligiga soʻzsiz rioya qiladilar hamda oʻz xizmat va oʻqish majburiyatlarini lavozim yoʻriqnomalari, mehnat shartnomalari, ushbu Kodeks qoidalari, oliy taʼlim muassasasi Ichki tartib qoidalari hamda taʼlimga oid boshqa meʼyoriy hujjatlarga muvofiq bajaradilar.</p>
                                </div>

                                <div className="mb-6">
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">6-modda. Fuqarolarning huquqlari, erkinliklari va qonuniy manfaatlarining ustuvorligi prinsipi</h5>
                                    <p>Fuqarolarning huquqlari, erkinliklari va qonuniy manfaatlari O‘zDKning oliy qadriyati boʻlib hisoblanadi. O‘zDK professor-oʻqituvchi, xodim, talaba va doktorantlari fuqarolarning huquqlari, erkinliklari va qonuniy manfaatlari buzilishiga yoʻl qoʻymaydilar va bunday buzilishlar roʻy bergan hollarda ularni tiklashga koʻmaklashadilar.</p>
                                </div>

                                <div className="mb-6">
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">7-modda. Vatanparvarlik, xizmat va oʻqish burchiga sodiqlik prinsipi</h5>
                                    <p>O‘zDK professor-oʻqituvchi, xodim, talaba va doktorantlari oʻz oʻqish va xizmat faoliyatlarini maʼnaviy-axloqiy qadriyatlar, Vatanga sadoqat, xizmat va oʻqish burchiga sodiqlik asosida jamiyatning oliy taʼlim muassasasiga boʻlgan talabi va ishonchini ifodalagan holda amalga oshiradilar.</p>
                                </div>

                                <div className="mb-6">
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">8-modda. Adolat, halollik va xolislik prinsipi</h5>
                                    <p>O‘zDK professor-oʻqituvchi, xodim, talaba va doktorantlari oʻz xizmat va oʻqish faoliyatlarini amalga oshirishda adolatli, halol va xolis boʻlishlari hamda oliy taʼlim muassasasiga, unga tegishli boʻlgan saytlar va ijtimoiy tarmoqlarga murojaat qilgan barcha yuridik va jismoniy shaxslarga nisbatan ushbu prinsip talablari asosida munosabatda boʻlishlari shart.</p>
                                </div>

                                <div>
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">9-modda. Samaradorlik va tejamkorlik prinsipi</h5>
                                    <p>O‘zDK professor-oʻqituvchi, xodim, talaba va doktorantlari oʻz faoliyati samaradorligini innovatsion texnologiyalarni tatbiq etish va boshqa yoʻllar bilan doimiy ravishda oshirib boradilar. O‘zDK professor-oʻqituvchi, xodim, talaba va doktorantlari, oʻz navbatida oliy taʼlim muassasasining mulkiga, oʻzining va boshqa shaxslarning vaqtiga masʼuliyat va ehtiyotkorlik bilan yondashadilar.</p>
                                </div>
                            </section>

                            {/* Bob 3 */}
                            <section id="bob-3" className="scroll-mt-24">
                                <h4 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-gray-200">3-bob. Korrupsiyaga qarshi kurashish</h4>
                                
                                <div>
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">10-modda. Korrupsiyaning har qanday shakl va koʻrinishini qabul qilmaslik</h5>
                                    <p className="mb-4">O‘zDK professor-oʻqituvchi, xodim, talaba va doktorantlari korrupsiyaning har qanday shakli va koʻrinishini qabul qilmaydilar va uning biror-bir tarzda namoyon boʻlishiga qarshi hamjihatlikda qonuniy choralarni koʻradilar.</p>
                                    <p>Professor-oʻqituvchi, xodim, talaba va doktorantlar korrupsiyaga qarshi kurashishlari va uning profilaktikasiga faol koʻmaklashishlari, shuningdek, O‘zDK korrupsiyaga qarshi kurashish siyosati va boshqa korrupsiyaga qarshi kurashishga oid hujjatlar talablarini soʻzsiz bajarishlari shart.</p>
                                </div>
                            </section>

                            {/* Bob 4 */}
                            <section id="bob-4" className="scroll-mt-24">
                                <h4 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-gray-200">4-bob. Professor-oʻqituvchi, xodim, talaba va doktorantlar yurish-turish va rasmiy muloqotiga oid talablar</h4>
                                
                                <div className="mb-6">
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">11-modda. O‘zDKda kiyinish va tashqi koʻrinishga oid qoidalar</h5>
                                    <p>O‘zDK professor-oʻqituvchi, xodim, talaba va doktorantlari oʻz oʻqish va kasbiga mos boʻlgan zamonaviy kiyimda boʻlishlari lozim.</p>
                                    <p className="mt-2">O‘zDK professor-oʻqituvchi, xodimi, talabasi va doktoranti boʻlgan xotin-qizlari bluzkalarda, tizzani yopib turadigan yubka, klassik turdagi shimlar yoki odmi kostyum va toʻq rangdagi poyabzalda kelishlari lozim. Erkaklar oq yoki och rangli koʻylak, klassik uslubdagi shim yoki odmi kostyumda boʻlishi kutiladi.</p>
                                </div>

                                <div className="mb-6">
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">12-modda. Majlis va yigʻinlarda ishtirok etish</h5>
                                    <p>Tadbirlardagi ishtiroki jarayonida soʻzga chiquvchilarga nisbatan hurmat bilan munosabatda boʻlishlari, tadbir davomida tinchlik va osoyishtalikni saqlashlari shart boʻlib, raislik qiluvchi ruxsatisiz luqma tashlash va soʻzga chiqish mumkin emas.</p>
                                </div>
                                
                                <div className="mb-6">
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">13-modda. Binolarda yurish-turish qoidalariga amal qilish</h5>
                                    <p>Binolarga kirish va chiqish joylarida yoʻlaklarda talabalar xodimlarni, erkaklar ayollarni oʻzlaridan oldin oʻtkazib yuborishlari lozim. Shuningdek, O‘zDK hududida o'ng tomondan yurish qoidasiga amal qilinishi kerak.</p>
                                </div>

                                <div className="mb-6">
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">14-modda. Professor-oʻqituvchi, xodim, talaba va doktorantlarning rasmiy muloqot meʼyorlari</h5>
                                    <p>O‘zDK professor-oʻqituvchi, xodim, talaba va doktorantlari tashkilot va muassasalar, ommaviy axborot vositalari hamda fuqarolar bilan oʻzaro munosabatga kirishganda rasmiy muloqot meʼyor va qoidalariga amal qilishlari kerak.</p>
                                </div>
                                
                                <div className="mb-6">
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">15-modda. Ish va oʻqish vaqtiga rioya qilish</h5>
                                    <p>Dars mashgʻulotlari va ishga oʻz vaqtida kelishlari, mehnat hamda oʻqish intizomiga rioya qilishlari shart.</p>
                                </div>
                                <div className="mb-6">
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">16-modda. O‘zDKda gʻayriaxloqiy va nojoʻya xatti-harakatlarni sodir etishga yoʻl qoʻyilmasligi</h5>
                                    <p>Har qanday huquqbuzarlik, tamaki, spirtli ichimliklar tortish, mulkka zarar yetkazish, asossiz shikoyatlar tarqatish, kamsitish kabi holatlar qat'iyan man etiladi.</p>
                                </div>
                            </section>

                            {/* Additional Sections Summarized for brevity but capturing the essence */}
                            <section id="bob-5" className="scroll-mt-24">
                                <h4 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-gray-200">5-bob. O‘zDK rahbariyatining odob-axloqqa oid majburiyatlari va kasbiy faoliyatda manfaatlar toʻqnashuviga yoʻl qoʻymaslik</h4>
                                <div>
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">17-modda. Rahbarning majburiyatlari</h5>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Rahbariyat soflik va adolatda o'rnak bo'lishi kerak.</li>
                                        <li>Qarindoshlik va mahalliychilik bilan kadrlar tanlash o'rniga adolatli yondashishi talab qilinadi.</li>
                                        <li>Xodimlarning samarali ishlashi va dam olishi, texnologiya bilan ta'minlanishi barqaror tashkil etilishi kerak.</li>
                                    </ul>
                                </div>
                            </section>

                            <section id="bob-6" className="scroll-mt-24">
                                <h4 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-gray-200">6-bob. Professor-oʻqituvchi, xodim, talaba va doktorantlarning oʻzaro munosabatlariga oid talablar</h4>
                                <div>
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">18-25 moddalar. O'zaro qoidalar</h5>
                                    <p className="mb-4">Professor-oʻqituvchi, xodim, talaba va doktorantlarning oʻzaro munosabatlari intellektual salohiyat, do'stlik, murabbiylik va intizomga asoslanadi. Ustozga ehtirom (darsda kutib olish va ehtirom ko'rsatish) asosiy tushunchalardan sanaladi.</p>
                                    <p>Akademik ta'qib, darsda uyali telefondan foydalanish qat'iyan man etiladi, talabalar darsga kechikmasligi, pedagog va ustozlarga subordinatsiya asosida murojaat qilishi so'raladi.</p>
                                </div>
                            </section>
                            
                            <section id="bob-7" className="scroll-mt-24">
                                <h4 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-gray-200">7-bob. Professor-oʻqituvchi, xodim, talaba va doktorantlarning odob-axloqqa oid majburiyatlari</h4>
                                <div>
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">26-27 moddalar. Alohida majburiyatlar</h5>
                                    <p className="mb-4">Barcha ishga yoki o'qishga kiritilganlar ushbu qoidalar bilan yozma tanishishi lozim. Milliy qadriyatlarni asrash, obro'-e'tiborga putur yetkazmaslik hamma uchun qat'iy reja. Axborot markazlari (Kutubxona) va sport majmualarida ularga tegishli ichki qoidalarga bo'ysunish kutiladi.</p>
                                    <p>Talabalardan faqat yozma ishlarda halollik, OTM atrofida tozalik qoidalari qilinishi so'raladi.</p>
                                </div>
                            </section>
                            
                            <section id="bob-8" className="scroll-mt-24">
                                <h4 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-gray-200">8-bob. Ragʻbatlantirish va chora koʻrish tartibi</h4>
                                <div>
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">28-31 moddalar. Rag'batlar va javobgarliklar</h5>
                                    <p>Oʻquv yili davomida mazkur Kodeksga toʻla rioya qilganlarga OTM rahbariyati yoki bo'linma dekanati tavsiyasi bilan moddiy va ma'naviy rag'batlantirish chora-tadbirlari olib borilishi mumkin. Kodeksni buzganlar uchun maxsus intizomiy choralar (ogohlantirish, hayfsan, xizmatdan bo'shatish va b.) mavjud.</p>
                                </div>
                            </section>
                            
                            <section id="bob-9" className="scroll-mt-24">
                                <h4 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-gray-200">9-bob. Odob-axloq komissiyasi faoliyatini tashkil etish</h4>
                                <div>
                                    <h5 className="text-lg font-bold text-gray-900 mb-2">32-34 moddalar. Komissiya ishi</h5>
                                    <p>Mazkur normalar buzilish ehtimoli yuzaga kelsa, kamida 5 kishidan iborat maxsus "Odob-Axloq komissiyasi" holatni ko'rib chiqadi hamda o'z bahosini OTM rahbariyatiga (rektorga) olib chiqadi. Shu asosida OTM kasaba uyushmasi talabaning xulqi bo'yicha jamoatchilik darsini yoki muhokamani olib boradi.</p>
                                </div>
                            </section>
                            
                            <section id="bob-10" className="scroll-mt-24 border-t-2 border-gray-100 pt-8 mt-12 text-gray-600 bg-gray-50 p-6 rounded-lg">
                                <h4 className="text-xl font-bold text-gray-800 mb-4">10-bob. Yakuniy qoida</h4>
                                <div>
                                    <h5 className="text-base font-bold text-gray-900 mb-2">35-modda. Kodeksning kuchga kirishi hamda unga oʻzgartish va qoʻshimchalar kiritish</h5>
                                    <p className="text-sm">Mazkur kodeks O‘zDK Kengashida muhokama qilinib ma’qullangani, rektor buyrug‘i bilan tasdiqlanganidan soʻng kuchga kiradi. Mazkur kodeks O‘zDK 27.06.2023 yildagi 11-sonli Kengashi majlisida muhokama qilinib ma’qullandi, rektor buyrug‘i bilan 27.06.2023 yildagi 85a-sonli AF buyrug‘i bilan tasdiqlandi.</p>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OdobAhloq;
