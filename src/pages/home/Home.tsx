import React, { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import { Post } from "../../components/post/Post";
import { postSimulate } from "../../lib/postSimulate";

type Post = {
  id: number;
  title: string;
  subtitle: string;
  dateCreated: string;
  contents: { model: string; image: string | null | string[]; text: string | null }[];
  author: {
    id: number | string;
    name: string;
    avatar: string;
    email: string;
  };
  interactions: { like: number }[];
  comments: {
    id: number;
    comment: string;
    user: {
      id: number;
      name: string;
      avatar: string;
    };
  }[];
};

const posts = [
  {
    id: 1,
    title: "Sonitus bardus catena dedico sollers sponte stultus deripio cum.",
    subtitle: "Ventus uterque fugit absens crapula aperio verto utrum atqui.",
    dateCreated: "2021-01-02T16:10:48.879Z",
    contents: [
      {
        model: "IMG_TEXT",
        image: "https://picsum.photos/seed/xzset5C/3370/460?grayscale&blur=9",
        text: "Deputo vulgivagus sulum vitae surculus cupio tabernus optio. Quo bene sursum curvo pectus adsidue desolo tabella arcesso. Texo fuga adsum creator celebrer tamisium totidem.\nTui sint asper pel ultra volubilis vestigium adulatio. Vicissitudo antiquus deorsum conturbo placeat depono adflicto ante distinctio debilito. Temeritas triumphus tamquam cogo.\nAliquid ea natus facere maiores minima solio antiquus. Thorax termes reprehenderit suppellex studio peior ventus. Tabesco autus vulgo vestigium deludo tertius.\nTriduana suscipit deleniti commodo temptatio certus admoveo. Tenetur veniam comprehendo doloribus. Ocer suspendo necessitatibus stips coerceo claro pecus adeptio facilis terreo.\nCarus decens careo tandem magnam strues careo canto arcesso clarus. Baiulus tumultus accendo. Inflammatio cultura ipsam compello mollitia cultura convoco.\nDistinctio dicta consuasor dens corroboro. Vicinus tutamen viscus voluptatum stipes thesis cubitum territo. Attollo aut aduro maiores ustilo id caelum.\nCuro alius dapifer aiunt surgo adulatio odio aperio quidem altus. Catena coruscus centum amplus volo coerceo utilis universe. Angustus talus fuga textus curia odit canonicus nulla careo.\nSomnus ante decor urbs. Valetudo barba victus clibanus carmen totidem suadeo neque defluo. Asporto ad atrocitas.\nAqua usque acerbitas termes vae patria amoveo. Defero sapiente appositus atrocitas thesaurus vilitas tabella. Decor armarium conicio curvo aufero maiores alter temporibus adfero trado.\nThalassinus vulariter arma libero consequuntur explicabo soleo cedo natus aequus. Defaeco theca versus fuga color aperiam corroboro esse occaecati. Amplexus temptatio creptio tyrannus odio aggredior utrum angelus exercitationem anser.\nContabesco ceno conturbo aequitas depono compono verus quidem. Cursus debitis amor. Ademptio alo adversus deleo vesco perferendis accusamus totam.\nTripudio pauper absconditus xiphias conduco abutor solio audeo capio curo. Usque nisi cariosus. Baiulus aveho celer pax nam officiis pecto autus.\nCrastinus temporibus corpus veritatis suadeo. Videlicet caute vigilo error clibanus tui defungo eos. Decipio stipes delibero.\nTerra baiulus copia perferendis tondeo attollo amita iure. Tandem trepide conitor teres cumque alienus cribro claustrum auditor. Adaugeo ager quaerat dapifer vereor decimus sollers desparatus sapiente.\nCarus ab arca caterva optio voluptate spes. Tum virga amitto comparo admoveo. Carcer corporis cumque audacia coepi antea.",
      },
      {
        model: "TEXT",
        image: "https://picsum.photos/seed/AgCjmHn/205/1181?grayscale&blur=5",
        text: "Aegre vinum versus. Averto aggero convoco ex summisse varius tero crur asperiores. Voco ipsum talio error blandior sperno deduco depereo.\nConitor termes creptio denuncio studio. Aegre molestias vae titulus pecus demulceo urbanus conqueror cui adfero. Aperio validus explicabo audeo vulariter.\nAdeo colligo admoneo cibus statua amiculum casso eum strenuus. Tredecim commodi vicinus argumentum contigo venio sublime solum. Vinco deleniti tremo placeat fuga aranea.\nAdfero infit combibo utroque magnam. Labore consequuntur strues compello. Deleo arca defungo vix utroque.\nAdstringo degero commemoro studio at sollicito teneo suspendo accusamus tumultus. Utor inflammatio trado officiis suadeo eaque. Textus abundans aliquam cibus comminor crapula colligo corroboro pauper timor.\nA calcar consuasor aurum vinitor. Caute commodi omnis timidus valde quaerat teres ex commodi. Conicio texo aliqua accusamus comitatus eum thalassinus utroque.\nCibus adiuvo absum verus defluo amet deduco. Velociter theatrum cursim velut. Minima aliqua comedo ademptio aperte cena.\nAncilla pauper veritas certus adeo bardus undique uredo succedo dedico. Spero taedium amor. Commemoro decimus blandior.\nEa vindico xiphias cimentarius templum adnuo cornu. Vesica aqua maxime. Ulciscor eveniet qui.\nCopiose acceptus aegrus termes ager amitto arbor varius bis. Delego deputo aequitas turpis consequatur vis. Tamdiu aeger volaticus harum comptus velum tergiversatio solum.\nCedo astrum auxilium vero aegre cribro laudantium sublime. Eos peior saepe sunt. Thesaurus titulus abundans suscipit benigne suggero deporto canto amicitia incidunt.\nQui recusandae sumo aveho basium suffoco totidem quia tam pauper. Theca verecundia uredo. Alius cunctatio laborum conforto cauda acceptus ancilla supra.\nSodalitas natus cedo copiose placeat. Occaecati ab annus tenax. Amplus labore cogito.\nDemonstro eum tactus convoco. Cotidie suscipit derelinquo termes speciosus. Damnatio carcer cinis doloribus adeptio.\nAestus nemo volutabrum decens ambitus similique. Subiungo corroboro cupiditas trans. Valens odit aurum quae curia minima cras sursum.",
      },
      {
        model: "IMAGE_TEXT_2",
        image: "https://picsum.photos/seed/AgCjmHn/205/1181?grayscale&blur=5",
        text: "Aggero volva coerceo sapiente deporto vomer consequatur. Usque vomito rerum possimus supellex vestrum depromo turba cornu voluptas. Accommodo contigo amoveo patrocinor catena volup curtus sint deporto.\nAdicio vallum clam communis. Adstringo suasoria pariatur atrocitas antiquus comprehendo terebro trado. Valeo decet utor averto abscido cotidie.",
      },
    ],
    interactions: [{ like: 100 }],
    comments: [
      {
        id: 1,
        comment: "COMENTÁRIO DE POST",
        dateCreated: "2024-06-25T20:36:10.265Z",
        user: {
          id: 1,
          name: "User",
          avatar: "",
        },
      },
      {
        id: 1,
        comment: "SEGUNDO 😎 COMENTÁRIO COMENTÁRIO DE POST",
        dateCreated: "2024-06-25T20:36:10.265Z",
        user: {
          id: 1,
          name: "User",
          avatar: "",
        },
      },
    ],
    author: {
      id: "76a5b162-12c0-4a57-b56e-1a5e882133c0",
      name: "Virgil Gislason",
      avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/51.jpg",
      email: "Hollie85@hotmail.com",
    },
  },
  {
    id: 2,
    title: "Administratio veritatis utroque absens accusator talus laboriosam collum.",
    subtitle: "Summa utrimque suffragium totus ipsa.",
    dateCreated: "2020-05-28T22:34:32.560Z",
    contents: [
      {
        model: "",
        image: "https://picsum.photos/seed/OhvLfur/688/694?grayscale&blur=8",
        text: "Cupiditas carmen delicate condico nemo ab. Voluptatem verbera amissio laudantium amicitia depromo thalassinus viriliter. Vulpes reprehenderit astrum commodo ciminatio.\nCorrigo beneficium acerbitas speculum comes thymbra volutabrum supra. Desidero vere sperno alveus. Venio animi suscipit demoror cibo pecus optio territo.\nConsuasor strues vivo tenus currus adduco tollo tempora. Natus apostolus totidem tenuis sub contabesco atrocitas urbanus audacia reprehenderit. Copiose laborum uxor subvenio incidunt fugit.\nTamisium arbustum eaque denuncio. Celo sollers amplexus nam desparatus claro perspiciatis thesaurus minus. Earum vel vulariter dicta aperiam virtus.\nAtqui victus deduco nulla vinco. Arca tenetur vehemens aetas amor tertius dignissimos. Demergo abstergo capillus maiores amor curia adficio asperiores coerceo.\nAbsque sufficio veritas comedo voluptatum. Avaritia tersus vae viduo minima suscipio. Caecus dapifer aqua sum.\nSublime admoneo careo theologus. Aduro adhaero vesica vis vinculum laboriosam ventus apud. Inventore turba attollo pariatur non curvo pariatur vere sui pariatur.\nCruciamentum crudelis concido utor labore quisquam ubi. Appello villa urbanus autem veniam aetas deinde utpote cultura deficio. Versus sto audacia temeritas catena curia desino vomica adiuvo.\nMollitia aegrotatio acidus. Recusandae tabula stella certe. Vulariter vehemens quidem tergeo adimpleo ascisco ultra verbum terreo adhaero.\nVidelicet aliquid acervus tabernus argumentum super sed accusantium valeo ascit. Talus voco reiciendis colo celer repellendus umerus. Adnuo non ea ultio.\nAstrum dolorem creator villa. Tamdiu addo cuppedia crur vociferor antea. Thermae sit vulgus amita cado celer amor adicio vaco.\nAntepono stabilis caecus adfero cubitum. Consectetur cultura provident degenero textor. Crustulum adsum volup talio basium ver acidus cognatus urbanus ciminatio.\nAlienus suffragium vulpes. Tollo tabgo considero terreo vulpes admitto alias ut ea ceno. Desino tyrannus labore vehemens soleo conatus ambulo voco possimus valde.\nTamen color ago amaritudo non arceo validus catena. Ciminatio deinde censura. Desolo debilito aliquid viduo.\nTemplum viridis tracto adsum acies asper tunc demergo careo. Cuppedia usus vomer conor beneficium versus. Cogo distinctio depulso utpote optio crustulum.",
      },
      {
        model: "TEXT",
        image: null,
        text: "Trado victus vigilo. Demo iure substantia suadeo circumvenio demergo curatio sonitus. Vae vae accedo tepesco toties argentum demum chirographum urbanus abduco.\nThesis chirographum cultellus. Cohors defendo copia speciosus pauci ipsam valde conturbo solutio amplitudo. Taedium solus carbo pariatur currus tollo adfero cribro.\nVero urbs coruscus bonus. Illo velut ambulo ustulo suppellex tolero despecto cenaculum alter. Sui repellat toties officiis vix sequi.\nVulnus vorax maxime quibusdam quasi sub cena. Textilis sunt caritas tum teres sto delicate terreo tempore theca. Cuppedia quis aer veniam arx vae supplanto turpis impedit.\nCapto vorago perspiciatis ustilo ad. Custodia hic communis clamo volutabrum summisse baiulus solio verumtamen. Stipes solio deprecator odio accusamus.\nEst aliqua vox labore tabesco terga super. Officia compono degero quibusdam terebro cernuus. Vel cui rem depromo acidus thema defluo.\nAlienus adeptio ulterius molestias comis tempore tondeo attonbitus. Ea cuppedia aspernatur. Suggero ter eligendi cohaero artificiose sodalitas adaugeo culpa voveo.\nQuis derideo harum. Aspicio spero aliquam sollicito tutis animi. Certe eos aqua abduco victus hic vallum tremo tot.",
      },
    ],
    interactions: [{ like: 0 }],
    comments: [],
    author: {
      id: "ff7555ff-5987-476d-9123-b70679f58357",
      name: "Omar Ondricka",
      avatar: "https://avatars.githubusercontent.com/u/7123943",
      email: "Ena.Feest0@yahoo.com",
    },
  },
  {
    id: 3,
    title: "Solio denuncio concido timidus.",
    subtitle: "Cometes talis tripudio valens.",
    dateCreated: "2024-06-25T20:36:10.265Z",
    contents: [
      {
        model: "IMG_TEXT_2",
        image: "https://picsum.photos/seed/IBxeh/3787/2467?blur=1",
        text: "Temperantia claustrum vergo. Clementia solvo absens bardus. Crinis depono crur confido unde tero sed verto adiuvo.\nBlandior virga cauda temptatio suscipio undique deduco suadeo. Campana accendo verbera est. Optio explicabo caveo vitae cupressus.",
      },
      {
        model: "IMG_CAROUSEL",
        image: [
          "https://picsum.photos/seed/IBxeh/3787/2467?blur=1",
          "https://picsum.photos/seed/E6zwHItelv/2665/1651",
          "https://picsum.photos/seed/E6zwHItelv/2665/1651",
          "https://picsum.photos/seed/Mn0cNYx/423/684?blur=4",
          "https://picsum.photos/seed/He4OZbggR7/1040/3412?grayscale&blur=3",
        ],
        text: null,
      },
      {
        model: "TEXT",
        image: null,
        text: "Velociter sursum defetiscor. Adamo apostolus peior creo vitium spargo una cibus cui odit. Torqueo carcer cubo virtus.\nVirga derelinquo comedo artificiose reprehenderit hic aestus. Administratio officia crapula verto quasi cras abutor defleo ademptio. Cohaero consectetur vobis ambitus thema dolorum solus vigilo argumentum.\nAvaritia usitas defendo colligo desipio spoliatio auctor caecus templum. Alter vir defendo. Vulpes nam amiculum thermae suffoco barba paens.\nAit doloribus iure decimus auctus degusto a. Strenuus consequatur coniuratio calcar pecto confido supellex vapulus cerno video. Cogo itaque valeo rerum vulgus.\nCultura excepturi utrum careo constans spoliatio depraedor conduco. Vere victoria ullam defungo solutio ulterius. Sordeo delinquo spes amicitia absum.\nApparatus defetiscor cinis aequus ex temperantia acceptus beatae currus desparatus. Rem adulescens voco vito omnis dedico vir tribuo sulum rem. Textilis confido cognomen adaugeo depereo compello.\nAmplexus succedo deleniti tergum infit. Cariosus ventito trucido. Demens quis beatae vero administratio.\nCuro combibo vinculum suffragium asporto tabella. Confero civis tabgo thesis addo suasoria claudeo defetiscor aureus ambulo. Adsum soleo coadunatio cupressus accusantium praesentium debitis comprehendo.\nTenuis vinitor aequus accusantium decor.",
      },
    ],
    interactions: [{ like: 100 }],
    comments: [
      {
        id: 1,
        comment:
          "Summisse dolor confido conor decerno terga sed theatrum delectatio. Cohaero usitas adfero votum. Praesentium comburo adsuesco patria quos.",
        dateCreated: "2024-06-25T20:36:10.265Z",
        user: {
          id: 1,
          name: "UserUser",
          avatar: "",
        },
      },
      {
        id: 2,
        comment:
          "Solium caveo talio demitto. Degenero excepturi pecto tripudio. Amiculum explicabo constans collum sequi territo.",
        dateCreated: "2024-01-19T21:09:37.997Z",
        user: {
          id: 1,
          name: "UserUserUser",
          avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/24.jpg",
        },
      },
      {
        id: 3,
        comment:
          "Solium caveo talio demitto. Degenero excepturi pecto tripudio. Amiculum explicabo constans collum sequi territo.",
        dateCreated: "2022-03-30T01:19:10.119Z",
        user: {
          id: 1,
          name: "Virgil Gislason",
          avatar: "https://avatars.githubusercontent.com/u/42887965",
        },
      },
      {
        id: 4,
        comment:
          "Cetera facere conitor unde vix voco delectatio comis. Odio neque civis abutor ante cupiditate. Talis vero curis id corrigo tabella in.\nVolaticus velociter praesentium adeo ipsum est argumentum tabula turpis sopor. Combibo aufero video atque cicuta decipio condico desparatus defessus. Ubi amaritudo ustilo.\nAdmoveo ulterius sopor degenero amplexus conicio eligendi taceo absum tamisium. Video amoveo carmen artificiose. Adeptio tutamen curtus tristis bene balbus.\nDefero bellicus peior deorsum cena cornu doloremque cohaero spoliatio soleo. Trepide architecto tubineus censura corrumpo demoror aliquam adsum. Aspicio abduco aspicio tergiversatio beatus animi ager distinctio viduo.\nDecet succurro comedo. Sit usus universe. Somnus delibero textor.\nSodalitas casso abscido aestas amita arca commodo. Minima distinctio campana porro uterque tamdiu. Fugiat vestigium animi verto absorbeo minus uredo.\nQuis cubo cresco. Terra aegrus coruscus cohors.",
        dateCreated: "2023-05-06T19:09:25.938Z",
        user: {
          id: 1,
          name: "Virgil Gislason",
          avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/92.jpg",
        },
      },
    ],
    author: {
      id: "ceddc8f9-4389-4aa7-88ec-d7fa56ebc675",
      name: "Spencer Tremblay",
      avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/77.jpg",
      email: "Noble42@gmail.com",
    },
  },
  // {
  //   id: 4,
  //   title: "",
  //   subtitle: "",
  //   dateCreated: "2021-01-02T16:10:48.879Z",
  //   contents: [
  //     {
  //       model: "",
  //       image: "",
  //       text: "",
  //     },
  //   ],

  //   author: {
  //     id: "",
  //     name: "",
  //     avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/51.jpg",
  //     email: "Hollie85@hotmail.com",
  //   },
  // },
];

export function Home() {
  const [urlParams, setUrlParams] = useSearchParams();
  const [postList, setPostList] = useState<any[]>(posts);
  const [viewCursor, setViewCursor] = useState(0);

  const [loading, setLoading] = useState(false);

  const observerRef = useRef(null);

  async function loadPosts() {
    if (loading) return;
    setLoading(true);

    // Simulando API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newPosts = Array.from({ length: 5 }, (_, index) => postSimulate());
    const posts = await Promise.all(newPosts);
    console.log(posts);
    setPostList((current) => [...current, ...posts!]);

    setLoading(false);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadPosts();
        }
      },
      // {
      //   rootMargin: "500px",
      // },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);
  // useEffect(() => {
  //   console.log(urlParams.entries());
  // }, [urlParams]);

  return (
    <main className="relative w-auto overflow-auto">
      {postList.map((post) => (
        <Post key={post.id} data={post} />
      ))}
      <div className="h-20 w=full" ref={observerRef}>
        {loading && <p>Carregando...</p>}
      </div>
    </main>
  );
}
