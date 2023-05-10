let info = [
    ["1988-cu ilin fevral ayı","Xocalıda etnik azərbaycanlıların erməni separatçıları tərəfindən qətlə yetirilməsi ilə başlayan qarşıdurma başlayır"],
    ["1991-ci il","Azərbaycan SSR-nin dövlət müstəqilliyini elan etməsi"],
    ["1992-ci il","Azərbaycan Silahlı Qüvvələri Zəngilan və Cəbrayıl rayonlarını işğal edərək müharibə səviyyəsini artırır. Fevral ayında Xocalıda 613 nəfərin erməni separatçıları tərəfindən qətlə yetirilməsi hadisəsi baş verir"],
    ["1993-cü il","Azərbaycan Silahlı Qüvvələri Laçın rayonunu işğal etdikdən sonra, Şuşa şəhərinə yönəlir və şəhər 9 may 1992-ci il tarixində işğal edilir. Bakı və Sumqayıt şəhərlərində erməni terror aktları törədilir"],
    ["1994-cü il may","Qarabağ müharibəsinə son qoyan müqavilə (Bəhruz Quliyev anlaşması) imzalanır. Azərbaycanın rayonları və Laçın şəhəri erməni separatçıları tərəfindən işğal olunmuşdur"],
    ["2020-ci il 27 sentyabr","Həm Azərbaycan, həm Ermənistan cəbhədə hərbi əməliyyatların başlamasını elan edib. Ermənistan hərbi səfərbərlik elan edib. Azərbaycan isə qismən səfərbərlik elan edib"],
    ["2020-ci il 28 sentyabr","Ermənistan Xankəndinin atəşə tutulduğunu bildirib"],
    ["2020-ci il 29 sentyabr","Azərbaycan: Ermənistanın atəşləri nəticəsində 10 mülki şəxs ölüb, 30 nəfər yaralanıb"],
    ["2020-ci il 3 oktyabr","Suqovuşan (keçmiş adı ilə - Madagiz) su anbarı və Tərtər rayonunun Talış, Cəbrayıl rayonunun Mehdili, Çaxırlı, Aşağı Maralyan, Şəybəy, Quycaq, Füzuli rayonu Aşağı Əbdürrəhmanlı kəndləri azad edilib"],
    ["2020-ci il 4 oktyabr","Gəncə, Mingəçevir, Xızı, Abşeron, Füzuli, Tərtər və Cəbrayıl şəhərləri raket atəşinə tutulub. Cəbrayıl şəhəri və rayonunun Karxulu, Şükürbəyli, Çərəkən, Daşkəsən, Horovlu, Mahmudlu, Cəfərabad, Yuxarı Maralyan, Decal kəndləri azad olunub"],
    ["2020-ci il 5 oktyabr","Cəbrayıl rayonunun Şıxəli Ağalı, Sarıcalı, Məzrə kəndlərini və müxtəlif istiqamətlərdə bir neçə strateji yüksəklik azad olunub.Bərdə şəhərinə raket atılıb"],
    ["2020-ci il 9 oktyabr","Çinarlı (Hadrut) qəsəbəsi və Çaylı, Yuxarı Güzlək, Gorazıllı, Qışlaq, Qaracalı, Əfəndilər, Süleymanlı, Sur kəndləri azad olunub"],
    ["2020-ci il 9 oktyabr","Ermənistan döyüşlərdə 376 hərbçisini itirdiyini elan edib"],
    ["2020-ci il 10 oktyabr","Moskvada Birinci humanitar atəşkəs razılaşması imzalanıb"],
    ["2020-ci il 14 oktyabr","Füzuli rayonunun Qaradağlı, Xatunbulaq, Qarakollu, Xocavənd rayonunun Bulutan, Məlikcanlı, Kəmərtük, Təkə, Tağaser kəndləri azad olunub"],
    ["2020-ci il 15 oktyabr","Füzuli rayonunun Arış, Cəbrayıl rayonunun Doşulu, Xocavənd rayonunun Edişə, Düdükçü, Edilli, Çiraquz kəndləri azad olunub"],
    ["2020-ci il 16 oktyabr","Xocavənd rayonunun Xırmancıq, Ağbulaq, Axullu kəndləri azad olunub"],
    ["2020-ci il 17 oktyabr","Füzuli şəhəri və rayonun Qoçəhmədli, Çimən, Cuvarlı, Pirəhmədli, Musabəyli, İşıqlı, Dədəli kəndləri azad olunub.Ermənistan Azərbaycanın Gəncə və Mingəçevir şəhərlərinə raket hücumu edib"],
    ["2020-ci il 18 oktyabr","İkinci humanitar atəşkəs razılaşması imzalanıb.Tarixi Xudafərin körpüsü azad olunub"],
    ["2020-ci il 19 oktyabr","Cəbrayıl rayonunun Soltanlı, Əmirvarlı, Maşanlı, Həsənli, Əlikeyxanlı, Qumlaq, Hacılı, Göyərçinveysəlli, Niyazqullar, Keçəl Məmmədli, Şahvəlli, Hacı İsmayıllı, İsaqlı kəndləri azad olunub"],
    ["2020-ci il 20 oktyabr","Zəngilan şəhəri və Füzuli rayonunun Dördçinar, Kürdlər, Yuxarı Aybasanlı, Cəbrayıl rayonunun Safarşa, Həsənqaydı, Xocavənd rayonunun Ağcakənd, Mülküdərə, Muğanlı kəndləri azad olunub"],
    ["2020-ci il 21 oktyabr","Zəngilan rayonunun Mincivan qəsəbəsi və Xurama, Xumarlı, Sarıl, Füzuli rayonunun Gecəgözlü, Aşağı Seyidəhmədli, Zərgər Cəbrayıl rayonunun Bələnd, Papı, Tulus, Hacılı, Tinli kəndləri azad olunub"],
    ["2020-ci il 22 oktyabr","Zəngilanın Ağbənd qəsəbəsi və Zəngilanın Kolluqışlaq, Malatkeşin, Kənd Zəngilan, Füzuli rayonunun Mollavəli, Yuxarı Rəfidinli, Cəbrayıl rayonunun Sirik, Şıxlar, Məstəlibəyli, Dərzili kəndləri azad olunub.Qəbələ, Kürdəmir və Siyəzən rayonlarına taktiki-operativ raket atılıb"],
    ["2020-ci il 23 oktyabr","Xocavənd rayonunun Dolanar, Bünyadlı Cəbrayıl rayonunun Dağ Tumas, Nüsüs, Xələfli, Zəngilan rayonunun Vənədli, Mirzəhəsənli Qubadlı rayonunun Zilanlı, Kürd Mahrızlı, Muğanlı və Alaqurşaq kəndləri azad olunub"],
    ["2020-ci il 25 oktyabr","Qubadlı şəhəri və Zəngilan rayonunun Birinci Alıbəyli, İkinci Alıbəyli, Rəbənd, Yenikənd Cəbrayıl rayonunun Qovşudlu, Sofulu, Dağ Maşanlı, Kürdlər, Hovuslu, Çələbilər Qubadlı rayonunun Padar, Əfəndilər, Yusifbəyli, Çaytumas, Xanlıq, Sarıyataq, Mollabürhan kəndləri azad olunub"],
    ["2020-ci il 26 oktyabr","Washingtonda üçüncü humanitar atəşkəs razılaşdırılıb"],
    ["2020-ci il 27 oktyabr","Ermənistanın Azərbaycanın Bərdə şəhərinə artileriya hücumu nəticəsində 3 nəfər ölüb, 10 nəfər yaralanıb"],
    ["2020-ci il 28 oktyabr","Zəngilanın Birinci Ağalı, İkinci Ağalı, Füzulinin Mandılı Cəbrayılın Qazanzəmi, Xanağabulaq, Qubadlının Qiyaslı, Ədilcə, Qılıcan kəndləri azad olunub.Ermənistanın Azərbaycanın Bərdə şəhərinə raket hücumu nəticəsində 21 nəfər ölüb, 40 nəfər yaralanıb"],
    ["2020-ci il 29 oktyabr","Amnesty International Ermənistanın Bərdəyə hücumda qadağan olunmuş klaster bombasından istifadə etdiyini deyib"],
    ["2020-ci il 30 oktyabr","Cəbrayıl rayonunun Xudaverdili, Qurbantəpə, Şahvələdli, Xubyarlı, Zəngilan rayonunun Aladin, Vecnəli, Qubadlı rayonunun Kavdadıq, Məmər, Mollalı kəndləri azad olunub.Human Rights Watch Ermənistanın Bərdəyə hücumda qadağan olunmuş klaster bombasından istifadə etdiyini deyib"],
    ["2020-ci il 31 oktyabr","Atəşkəs pozulandan sonra Ermənistan Rusiyadan kömək istəyib"],
    ["2020-ci il 2 noyabr","Cəbrayıl rayonunun Çaprand, Hacı İsaqlı, Qoşa Bulaq, Zəngilan rayonunun Dərə Gilətağ, Böyük Gilətağ, Qubadlı rayonunun İşıqlı, Muradxanlı, Milanlı kəndləri azad olunub.BMT-nin İnsan Hüquqları üzrə Ali Komissarı Michelle Bachelet Ermənistanı və Azərbaycanı mülki ərazilərə, məktəblərə və xəstəxanalara hücumları dayandırmağa çağırıb"],
    ["2020-ci il 4 noyabr","Cəbrayıl rayonunun Mirək, Kavdar, Zəngilan rayonunun Məşədiismayıllı, Şəfibəyli, Qubadlı rayonunun Başarat, Qarakişilər, Qaracallı kəndləri azad olunub"],
    ["2020-ci il 5 noyabr","Sərhədsiz Reportyorlar Təşkilatı BMT-ni, Avropa Şurasını və Azərbaycanı Xankəndidə qalmış 80 nəfər yerli və xarici jurnalist daxil olmaqla mülki şəxslərin təxliyyəsinə icazə verilməsinə çağırıb"],
    ["2020-ci il 6 noyabr","Ermənistan Azərbaycanın artileriya hücumu nəticəsində Xankəndidə 3 mülki şəxsin öldüyünü deyib"],
    ["2020-ci il 7 noyabr","Füzulinin Yuxarı Veysəlli, Yuxarı Seyidəhmədli, Qorqan, Üçüncü Mahmudlu, Qacar, Divanalılar, Cəbrayılın Yuxarı Məzrə, Yanarhac, Qubadlının Qəzyan, Balasoltanlı, Mərdanlı, Zəngilanın Beşdəli, Xocalının Qarabulaq, Moşxmaat, Xocavəndin Ataqut, Tsakuri kəndləri azad olunub"],
    ["2020-ci il 8 noyabr","Şuşa şəhəri işğaldan azad olunub"],
    ["2020-ci il 9 noyabr","Dağlıq Qarabağda separatçılar Şuşa şəhərinə nəzarəti itirdiklərini etiraf ediblər. Onlar bildirib ki, Azərbaycan Ordusu Xankəndinin astanasındadır"],
    ["2020-ci il 10 noyabr","Ermənistan, Azərbaycan və Rusiya Qarabağda hərbi əməliyyatların bitməsi və atəşkəs barədə birgə bəyanat imzalayıb.Atəşkəs razılaşmasına görə Ağdam, Kəlbəcər, Laçın rayonları dekabrın 1-dək Azərbaycan qaytarılır. Ermənistan qoşunları Qarabağdan çıxır və ora Rusiya sülhməramlıları daxil olur"],
    ["2020-ci il 19 noyabr","Azərbaycan əsgərləri Ağdam şəhərinə girirlər"],
    ["2020-ci il 20 noyabr","Ağdam rayonunun Azərbaycana geri qaytarılması rəsmən baş tutur"],
    ["2020-ci il 25 noyabr","Kəlbəcər rayonu Azərabaycana geri qaytarıldı"],
    ["2020-ci il 1 dekabr","Laçın rayonu Azərabaycana qaytarıldı"],
    ["2020-ci il 8 dekabr","Ermənistanda itaətsizlik aksiyaları başlayıb. Müxalif siyasi qüvvələr Yerevanda şəhərdaxili yolları bağlayaraq Baş nazir Nikol Paşinyanın istefasını istəyiblər. Nikol Paşinyana və onun hökumətinə qarşı etirazlar onun Azərbaycan və Rusiya ilə Dağlıq Qarabağda atəşkəs haqqında razılaşma sənədi imzalanmasından sonra başlayıb"],
    ["2020-ci il 10 dekabr","Azərbaycan Zəfər Paradı keçirib. Paradda Türkiyənin Prezidenti Recep Tayyip Erdoğan və Türkiyə hərbçiləri iştirak ediblər"],
]

let kod = ''
for (let i = 0; i < info.length; i++) {
    kod += `<li>
        <div>
            <span>${info[i][0]}:</span> 
            <p>${info[i][1]}.</p>
        </div>
    </li>`
}
$("ol").append(kod)