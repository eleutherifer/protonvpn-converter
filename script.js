
document.getElementById('tgButton').onclick = function() {
    window.location.href = 'https://t.me/warp_1_1_1_1';
}

document.getElementById('promoButton').onclick = function() {
    window.location.href = 'https://storage.googleapis.com/amnezia/amnezia.org?m-path=premium&arf=VG755WBZDBAPGGYM';
}

document.getElementById('warpButton').onclick = function() {
    window.location.href = 'https://my-other-projects.vercel.app/';
}

window.addEventListener('DOMContentLoaded', function() {
  // Восстанавливаем состояние всех контейнеров
  toggleAWG15Containers();
  toggleJunkContainer();
  replaceMobileText();
});

function toggleJunkContainer() {
  const nojunkEnabled = document.getElementById('nojunk').checked;
  const container2 = document.querySelector('.container2');
  const containerColumns = document.querySelector('.container-columns');
  
  if (nojunkEnabled && container2 && containerColumns) {
    container2.classList.add('hidden');
    // Убираем grid и position из container-columns
    containerColumns.style.display = 'block';
    containerColumns.style.position = 'static';
  } else if (container2 && containerColumns) {
    container2.classList.remove('hidden');
    // Восстанавливаем оригинальные стили
    containerColumns.style.display = '';
    containerColumns.style.position = '';
  }
}



function toggleAWG15Containers() {
  const awg15Enabled = document.getElementById('awg15').checked;
  const awg15Disabled = document.getElementById('awg15').disabled;
  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  const awg15Container = document.getElementById('15awg');
  const wiresockContainer = document.getElementById('15wiresock');
  
  // Сначала скрываем оба контейнера
  if (awg15Container) awg15Container.classList.add('hidden');
  if (wiresockContainer) wiresockContainer.classList.add('hidden');
  
  // Если AWG 2.0 включен, показываем соответствующий контейнер
  if (awg15Enabled) {
    if (selectedOption === 'clash' || selectedOption === 'awg') {
      if (awg15Container) awg15Container.classList.remove('hidden');
    } else if (selectedOption === 'karing') {
      if (wiresockContainer) wiresockContainer.classList.remove('hidden');
    }
  }
  if (awg15Disabled) {} else {toggleNolanContainer()}
}

// Добавляем обработчики для радиокнопок и чекбокса awg15
document.querySelectorAll('input[name="option"]').forEach(radio => {
  radio.addEventListener('change', toggleAWG15Containers);
});

document.getElementById('awg15').addEventListener('change', toggleAWG15Containers);

/*
document.querySelectorAll('input[name="option"]').forEach(radio => {
  radio.addEventListener('change', function() {
    const musor1 = document.querySelector('.musor1');
    const musor2 = document.querySelector('.musor2');
    const containerColumns = document.querySelector('.container-columns');
    const container2 = document.querySelector('.container2');
    
    if (this.id === 'karing') {
      musor1.classList.add('hidden');
      musor2.classList.remove('hidden');
      containerColumns.classList.add('karing-active');
      container2.classList.add('karing-active');
	  
    } else {
      musor1.classList.remove('hidden');
      musor2.classList.add('hidden');
      containerColumns.classList.remove('karing-active');
      container2.classList.remove('karing-active');
    }
  });
});
*/
document.getElementById('wgFiles').addEventListener('change', function(e) {
    const files = e.target.files;
    const label = document.getElementById('fileUploadLabel');
    
    if (files.length === 0) {
        label.textContent = 'Выбрать файлы';
    } else {
        label.textContent = `Файлов выбрано: ${files.length}`;
    }
});
document.querySelector('.randombtn').onclick = function() {
  const jc = getRandomInt(1, 100);
  const jmin = getRandomInt(1, 200);
  const jmax = getRandomInt(jmin + 1, 201);
  
  document.getElementById('jc1').value = jc;
  document.getElementById('jmin1').value = jmin;
  document.getElementById('jmax1').value = jmax;
  document.getElementById('junk5').checked = true;
  convert()
};

document.querySelectorAll('.randombtn')[1].onclick = function() {
  // Генерация случайных значений для I1-I5
  const Hex = [
    '<b 0xc30000000114daa73277bd0ff9721741f2d99d8224ed80a539861486cb4a5d493bad74ed92959c0254a0a05916b96b008000047c887351089ae9bf34abeb64d07694b6f9112679e394826c40d6cb12684d28b1921337c0706accf886c6c59ee4057b1b1d9480f9a16d544eafe71091ba1de5762f14bbd5cf7442dff5dc1130efe1a2dc66adb23cbc5dc1233a91bea00fc33665a5068b8595a18438a5f700d130126eace94d2b15001f4741a831af4819b01766c184480a78ed0ce5789e4d3d491fe302e6b08cb97b7e12154f43d2e58e9167d89710c60aeae5e6bdcaf1b53fe76415945d45d053aadcc3b4926b6cfd625252c3e9ad7af08403c3f0abcbfea311732e8457b89e1251b8099471fa1b560c795c6dee7c4899fc5296d69e4c49f8b65b86c2c4e338c3d5ae0df22feea580f77c37ffd092a5649ac6a869f6b5d793d31d3697a8bec52d13164b35bc53fadf754ee27623bb02b8548e4e3838e3361c051494162b8124e87e6cd193556e7ecf21b079269e3abcc40335d2bd5568b95085e67c82287b69bd4e6887ebe6dec4e9b96cefb1faf973b56b605b0ba6ed661f1833d9ce37778a1742ed22dc37998ccac712f932e912a82637eaf09bc4e39cb562959ec987d0d8c233dd6ba25e1da8954d2bfa1fe6400bda00683c6b4419cce0eba094c989c0ec8ac71ac7c9aa5fe8f54925403d1586c134e5ad4b552162f10b6d4ad33975f96d2bba66e9c63da04bbcc8135f15987167238d2c711a7128612d28da10f98d2281913789a2bf74d057646980e2d668a109ac130abd21ef60b53e6081f1e40836be0ec0e4b4dcdc6fdfbc5999b3474c7b03a708b4978924d356be8230db46037ceb8e3d97b784065d770b0a74bdbae2073742b597ee357967385cdabc47c117123beee93f161f4078e64b9e47a16788ef7df4db8f764160ae8f88394571a48141bf148ce150d91230e57c029be771ceb7fe4be9d65001004c37de41bc9990ff488bf207833fb0639fd774c9e63dee98a8407123391de40f0ffcfb8322e8082c855f89f85a87088b5fcf94df88645491a4984efed3c24a1193aad682a281bbff73b541f209970f9bf04b8908082ac3c6eb75e81a4207f415dba8f1d7e844e3bda426c9811992e1c8b1e8b848fbb19dab41f1da07c1295b45aa6f0c62d93ae9f112fc0f2cde1bd3fba0677959282dc3c5bbfd7119187e28c1f9dee318088a0142be3b0cc5d623ab76de2c2d115c18801655a06dc3530979c230849105ffb01041c7a9db9a824d3378049d0eb499b7dbe1e02d4aa319ecf5b432fad90951c48f63cfa11fb4606bb3f35da79e2da2f577d9f8d37e22f85d214eb09bc85a6283172397a14d49d28ec5f657dced32d7a7b74c4d29d9e944d20d856fc1987f0513636a5f9777cdc9345200d731e11b50011ec5cdb2c9643dfed4a81dc877e4960df7a7fa78d88caae29e6d52ddd8ba598626e432ee189884dcb710fb446a089530e633c1fc850d13233c8b705f99517fee643f55c5bffd776797c3604f3ca375330a509b770395fac91e95e936193ba125f8849f572a97ea4d1275b6add8a093deba33e62e27c21b8da6424e0bf0624365c5054b7e5021c9c8bf38b5cedcb5635ef7afa331b1444a7294794899134a9ac87d5cebaadee8985a9c736bb093b555dd724af0de9f1574ed95cf9cfb9a40>',
    '<b 0xc40000000114da86df3374676c85909b49b958a4a3a51441ade914ce77bb73c41df4b8ea228e8339e8b84166729bd2008000047c1102cb5bbc44781e2065a7422b4100f2a7c03010399685b68d6e405dc7a988fac5de8841bd63eff95e372c0666c0676294c72e137b202fcf5ff5894f62a03e4e9c9d29f514571705d9dfe944123e8020c83fb6c1bcd23d7326759c0754710e6dd8f3797d62299dc8e648ad46af0551668aa32826a345a134d19d7c00d1b5f636b4065ef14ff69099cc14780a652b1cb8ec6206732c105ec7bd4f66e970095f0d403ec798252d83293bc249563d09eb0638bf1a55782db8e835ef6cbb804d9815d0bc5d2ad0765d09e0b40b6edd9d6cca7c31b09ff36538f72f5d7c5956f0b7ae297690af86cdcad2c4370ede269638f33b7348a4e3f81bc75fdbd0a941995d021fe86559e1db9e93ca4265d6ba7e28253c009ba2a2c5cd861f946162751795ec2c9ddef5d1aa84ce7277c50a64bede436c04087c72fdf11e27333af1e84cd1a0f3a312cef89488a3419d9fefdc27470f2528332b112c27035d58f2bc611fccb84cab705548ac8dab3e9b8f6f51276898e4f7860c3c15e839a8d5c23db13d7db3356d3165e69857a09402b4da80725c88272b58fc0e5cc3bd8f02cc2828b8a063ddd7605c95f505958c570fca64458dee72ac6eb59b8d69f485792c1cad8a40e557bb0a30c9403995fda72c1089871d027d4d726eb5b8315f69cb9cbddcdd198a8c70a2fee7cbafc2f39a0bed87080313c5726f2c95b44a8f1cdd44cdb89591a07cd48bdde78cd1ffc9bef8faa9ce38beaf4f32f73a47fe11dfdb0642451fbdc7cd12c996678d487acd12a660c3859208488e962a20c23eb07422ca02fc9af2bc4baad76bf07d45b8281fa944f82d3afb67a179ed7571c0c406ea4da92b235d3a6b520a7ae5642be18e9acc097e4f82c2462e39df4d293a78f97834ad951361e2f47a08d9964440dd83920f84e11d3d3fd284f44d6bc3a14fd2053a42cdd529344a2cab1466c6d97563a5811736488cc5ab9676082f8e7eeb8da25731d2a652b36faaf9670cda1551db0853283ee27456bbd6254c8b3ec1a905bf8bafb3fbabe1e3cc355a195bd7e6f8050d905112cae47f73db6b71ccc69a5eb056f5efe02f757c4e70333b7c473160b1f3f3744b9871d73b50d48fe3c3be810016a5e86e509b038610934f9f2320addbab2b641fc00ebd314ab550f0f1ce7313e94bb6c8dbab378899ca992e534ea1af1aa27de070cfce7868e25375fc87b6897af385b42d1ef66fe94e85d9568a1b537893cadeb766a183a3490401ce5b7f94d01a81cd9867508274f54f2182724abf7bd5b7e592b03474def0eedf6a0576cb5cb56f580739bed1be6ec515b46891c7f65b46f263b734d3f08884cf48baa0d9cc5f80b07dab22b19b0a298866ceb0f87a146aa0a404673eccfe441887180666b0e347f20cde72d8355a5bcf6aac498a2d895fc16dc7ffeea6dbccf21a9b877d3ef92d9526f43455c28a1a792d43a946a036913fe27b2767820762852ded657d6e842d8e153f546e389876622edcd2283f6f02b954386ac44888f2849c16c9ff084ab8bf2a9fae541821d7239ef575b73af3b6c2b2a36d98dbf41ca2e065861ed88f106f8360757f77abe44dc37dfc8b12cb6f84d44d7f28b682be0e4271387dbe85>',
    '<b 0xc90000000114393a7160021c3dcd62e2b7d881b89e2d09eaaadd147b36f70d051286ea3107ddf473052b15e7206e50008000047c10fa2da0062b1ebd22df2972412495ff81baa6c65011dc788c8508aedeff2e74a4ee64461fc8012f4fd9ce8d94e9632def6e61601042b7ae63365e8cabcd524a0e4fadcd4aa0416190a5c8f04773598b1e70130b0feee42c1a613b42b98e80af913a3bc2f94d5e40ac34e63074fc2882114f978cec6da2262134463bc7192ce980537fc299f31b9977b88093b32308986ee5d8b905250a04de2aca1a33f24aff24982b471b31a6363c2a97a94a6863a8ba54912b9f2e64996d8e92a19bafe09305c1f88bbdec8f3bb37f67b722d0fdf44d140e5113bd0ca2d360f724d063673d16a94e9d2066694daae8f7fb5e27883bc7036a202cb9d48adcc4838a67ffd3b286c61faf1c82bd55a9636f381b2e33f378e3fa8f3b7c874bc84c3a9afbe00af9fc59304f2d417634abf04466900fa1860377d8f9e00d706153a3810778822d36a5efdfb06c2373fdacf611aa65e43d17dd1cd874e37282d6414c1178eccd55e64647efedcb43940dba739496a05b01daa1e5e208b97c94b2fec8535d8fabde28982a1733e610477108330ba9d08d6df53ac1d5fed83b3b0eb0ced20facd3ed9e435a868d359db0fbb2f11993e9d97f6abe3ad5fc1d566f8551b3dea062f635b21a4890ebbfc5a1938aa4ad91c610b029770bf8c80615498ffedc2c2d73b207be6cc81c226722eb37327f359e5e02eda3713c06179e2502854a851d9f08b44588d46030555b5e1b9123591720bc69a85115edd36ecd03d0eeff934a3313dec07307f47cfe63aaaf3b75eaaf71a2efd2f1cb8fe978ab020ec9df63e7149ac3f40c7c0baec7f35322a754cc4e219d28ea93836922c4ef3c8c3be83b3a43b830a71cc551dfce48245767491175166668f64db85c795af2152159da3608d160b4d5975609670ebebeed52c09f1bc4387db36de4d7190efd05beaead3912ea1f146e716c792e1b3175f4b9448619f44a4a8500fe8f16beb40212dfd601bfaa6ac9ceb3443cd9acf6ae16c79cba2f304f04f6d2c153e612cac9aab52dcb0a16b124aa8ab76c456d79405b421a03f0059148f02c9f99e0e05f7bafd6c92728836c65242378b9a2875343a2583c8c85170a14ab58e873ec5ee2d5cf269f22214b12ce531dbaefcac4e89b7f7a42f96d57b7c1b3271b64c9358966c7662fc7261f782f23f54e89e88bdd5d14502c5a8735a056a7a9ec0c6d905cf58225651e09eff99ab06fcb66ee05c003b0c0d794336e22df00c3ce99c7608d6161d8f7b5f85dfe4922454acd128e3ae68689fbd1575d5a647e679b4a4fa92c186ce29e5da68f682d0e90103f9636b1ccbc3edd5054648da71d7cc1708ed850ca834374cb926fa3d2f5331374d98d50a49c41cd17417e10534c3cf27bee4f21158b2f9a8ee9c69675b2b09e320aac09c8139d52813721141d8acfdd3cc50bb6da2d35099b2c73308ca934bf90fcba0a7aa4986c2548119f2836c9df7df4307e1613dac8f6a96e13178eac84ec849473707a42ef8c268d4aa6a6c2c98dda684ffaa656cee0a8db132c5cdf25c8568237b7f26f604abd4246f899d87f565db934d3ede41cf4bb2d72c3339d47800040d598b6e738aee6a03b85b33b3bfa33277c6ce63144ddbec0>',
    '<b 0xc10000000114f1a7ab88cd4280b9c57aecc38d46ba291ef0994314c67e475d376ef9012550be2719a8f5294997f552008000047cdf03e7a48b8fa5c37e28194ca1a38c397aaae6ebc77976249cb74c4b5e3e6a1b271a87217f655494a763edba9f250df6ce63796fa68c3d77d727f1d0055200ac43a26147428e706ddbd151268a7792f37827669dfa1f8b5f7f63075a6a8e8c9558f0e77905c953f27a63d9e480eb57247eb5f61069ac53e9121ccb488d0af288b74bb627df30001a4d51bd24b0b5e147947c2afca796fb12d198a1844fd039d1de011ace755f7b9a964ab85316a925686751657a8f68285fc4b0a6b539b49e4c0cca1f2778f8e41aed8a19defac75d9aa2b54b29d833e8b236de7d0c9cbc4c9de50bbc4c67e712a3541ca86e1bb73aae9d229dae75dfedc8cf1f1751fe866007d30f8f16bd398d5af21cbd6b278602026febf55fcea684c0bb8cf4f53431fae53ad0d192143bd8e46d43e1e7e5b75e04430709384ca149b9fa24839cc756762fc7fd62ab3ad8cf160ea50f5d21c5a55da35ef7a9857d93c2e2d027fc00838617546cc2678dd1709c1097765dd40827a0fabb7385802d5f6d29ff76dd8676cd0fce74a520732cc6990153a9ac88f65bce60ef587f64c0902af9371ef075f1a23eaef00a90bdd5faed2f5e04686b00f93cf9b6b27f93348039010115cd1594326ca369adc75cdac3c17463e69da56e87927655676d2ecf4ff859ae67b03ffa2354683419baa566ee13d63776b1ec54d31987c87e40491e4233ecb9cf425081adf6288ca2dbe3cd5dbde934162eb5060b4ace15ca4b828c3234592bbec1f5ad23672869e3dceabeb31b036561a8ed158af10a84b8f7e51ea04e9c27cfddb018dd46f4c2a2ede93f6edcf2d91e2af615b29ed4542da64e4a768a045c351db9b007f4cb24f3b30414336d095fdddecd82e53fc758b16693742a277f9075665c3e29d689f2aad149dea43911085f9e6fbdb832f213b120d6b8035d6f4cd17735368f1064cd769fbb72d27ef901210d3dcb0a37d7aaaf66c3bed3d919eb9a993aec8f88cca762eda9fc9bc3da3f70862ba338fa35023c20113a027cb7ff39bab5d697cc8fdd6e1dcb9f64ff3416d00e53f9988b2f630ebe726ad225a7a2c8b31b225fae75a01290dda5bae1444e1cb40758a37efc418e64ed236e325faa0606207444024441f042484be3e5a0796173d3a7051e7a9209aac7670e948687390cf918f86eb73a8277aad2aded487c9d38c788e11bb759dba8c618ba825012432f4470a2e832fd6e9981ce78df0f4ebeffff6a2c281b47ab6fa0b91b68b091cd6cd5724ab83b97dadebfe3e6f7439c64b5e25c15dfe96398e8c5963544a99a0828fdf5b7df8a30983e990e4325bd9ee542815bc70cf43bbbd119db073977ad0e61e78b971a624ef4dd397b9d238c5d63d31c719cfa4a0afc2fc50f7975902a25d05f7bd50c70d1db1d10a062c3c8be3b86fe45cbfa0c8cf071a33ed2ed70decadec8cdf583ef7e72f68b9a3263e8cb761f02d131252f92ec9704c8a49850003a913542feadd2f2baaad2c7ecdb7b35ab036a6e50ca05ed68c71fb421630a34dc299eacd81688b3a879e8ce016bca1883c1ef92a3c883df42578bd39ed5e47e63a9a136645d98fa1818c1d0da7c1e1a3b2e8dd21c5c404b08ae30887351a4d3eeeb>'
  ];
  const RandomHex = Hex[Math.floor(Math.random() * Hex.length)];
  
  // Заполняем только I1 по умолчанию, остальные оставляем пустыми
  document.getElementById('i1').value = RandomHex;
  document.getElementById('i2').value = RandomHex;
  document.getElementById('i3').value = '<b 0x494e56495445207369703a626f624062696c6f78692e636f6d205349502f322e300d0a5669613a205349502f322e302f55445020706333332e61746c616e74612e636f6d3b6272616e63683d7a39684734624b3737366173646864730d0a4d61782d466f7277617264733a2037300d0a546f3a20426f62203c7369703a626f624062696c6f78692e636f6d3e0d0a46726f6d3a20416c696365203c7369703a616c6963654061746c616e74612e636f6d3e3b7461673d313932383330313737340d0a43616c6c2d49443a20613834623463373665363637313040706333332e61746c616e74612e636f6d0d0a435365713a2033313431353920494e564954450d0a436f6e746163743a203c7369703a616c69636540706333332e61746c616e74612e636f6d3e0d0a436f6e74656e742d547970653a206170706c69636174696f6e2f7364700d0a436f6e74656e742d4c656e6774683a20300d0a0d0a>';
  document.getElementById('i4').value = '<b 0x5349502f322e302031303020547279696e670d0a5669613a205349502f322e302f55445020706333332e61746c616e74612e636f6d3b6272616e63683d7a39684734624b3737366173646864730d0a546f3a20426f62203c7369703a626f624062696c6f78692e636f6d3e0d0a46726f6d3a20416c696365203c7369703a616c6963654061746c616e74612e636f6d3e3b7461673d313932383330313737340d0a43616c6c2d49443a20613834623463373665363637313040706333332e61746c616e74612e636f6d0d0a435365713a2033313431353920494e564954450d0a436f6e74656e742d4c656e6774683a20300d0a0d0a>';
  document.getElementById('i5').value = '';
  
  convert();
};

document.querySelectorAll('.randombtn')[2].onclick = function() {
  const domains = ['my.mail.ru', 'consultant.ru', 'profi.ru', 'autonews.ru'];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  document.getElementById('id').value = randomDomain;
  
  convert();
};

/*
document.querySelector('.randombtn2').onclick = function() {
  const generateRandomPair = () => {
    const first = getRandomInt(1, 50);
    const second = getRandomInt(first + 1, 120);
    return `${first}-${second}`;
  };
  document.getElementById('fp1').value = generateRandomPair();
  document.getElementById('fps1').value = generateRandomPair();
  document.getElementById('fpd1').value = generateRandomPair();
  document.getElementById('fake3').checked = true;
  convert()
};*/

const COUNTRY_FLAGS = {
      'JP': '🇯🇵 JP',
      'US': '🇺🇸 US',
      'NL': '🇳🇱 NL',
      'DE': '🇩🇪 DE',
      'FR': '🇫🇷 FR',
      'GB': '🇬🇧 GB',
      'CA': '🇨🇦 CA',
      'AU': '🇦🇺 AU',
      'RO': '🇷🇴 RO',
	  'MX': '🇲🇽 MX',      
	  'NO': '🇳🇴 NO',      
	  'SG': '🇸🇬 SG',      
      'CH': '🇨🇭 CH',
      'PL': '🇵🇱 PL'
    };
let proxyList = [];
function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function generateAmneziaDefaults() {
  const selectedOption = document.querySelector('input[name="junk"]:checked').id;
  let jc, jmin, jmax;
  switch(selectedOption) {
    case 'junk1':
      jc = 1;
      jmin = 1;
      jmax = 1;
      break;
    case 'junk2':
      jc = 3;
      jmin = 1;
      jmax = 3;
      break;
    case 'junk3':
      jc = 30;
      jmin = 10;
      jmax = 30;
      break;
    case 'junk4':
      jc = 4;
      jmin = 40;
      jmax = 70;
      break;
    case 'junk5':
      jc = parseInt(document.getElementById('jc1').value) || 128;
      jmin = parseInt(document.getElementById('jmin1').value) || 1279;
      jmax = parseInt(document.getElementById('jmax1').value) || 1280;
      break;
    default:
      jc = 128;
      jmin = 1279;
      jmax = 1280;
  }

  if (jmax <= jmin) {
    jmax = jmin + 1;
  }

  return {
    jc: jc,
    jmin: jmin,
    jmax: jmax,
    s1: 0,
    s2: 0,
    s3: 0,
    s4: 0,
    h1: 1,
    h2: 2,
    h3: 3,
    h4: 4
  };
}

function parseWGConfig(text) {
  const config = { 
    interface: { amneziaOptions: {} },
    peers: []
  };
  let currentSection = null;
  let peerIndex = -1;

  const lines = text.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) continue;

    // Обработка секций
    if (line.startsWith('[') && line.endsWith(']')) {
      currentSection = line.slice(1, -1).toLowerCase();
      if (currentSection === 'peer') {
        peerIndex++;
        config.peers.push({ amneziaOptions: {} });
        
        // Проверяем следующую строку на наличие имени (комментария)
        if (i + 1 < lines.length) {
          const nextLine = lines[i + 1].trim();
          const nameMatch = nextLine.match(/^#\s*(.+)/);
          if (nameMatch) {
            config.peers[peerIndex].name = nameMatch[1].trim();
            i++; // Пропускаем обработанную строку с именем
          }
        }
      }
      continue;
    }

    // Парсинг ключ=значение
    const equalsIndex = line.indexOf('=');
    if (equalsIndex === -1) continue;

    const key = line.substring(0, equalsIndex).trim();
    const value = line.substring(equalsIndex + 1).trim();
    const cleanKey = key.toLowerCase();

    if (currentSection === 'interface') {
      if (['jc', 'jmin', 'jmax', 's1', 's2', 's3', 's4', 'h1', 'h2', 'h3', 'h4'].includes(cleanKey)) {
        config.interface.amneziaOptions[cleanKey] = value;
      } else {
        config.interface[cleanKey] = value;
      }
    } else if (currentSection === 'peer' && peerIndex >= 0) {
      const peer = config.peers[peerIndex];
      if (['jc', 'jmin', 'jmax', 's1', 's2', 's3', 's4', 'h1', 'h2', 'h3', 'h4'].includes(cleanKey)) {
        peer.amneziaOptions[cleanKey] = value;
      } else if (cleanKey === 'presharedkey') {
        peer.presharedKey = value;
      } else {
        peer[cleanKey] = value;
      }
    }
  }

  // Если имя не было найдено через комментарий после [Peer], пробуем извлечь из комментариев
  if (config.peers.length > 0 && !config.peers[0].name) {
    // Ищем любое вхождение # NL-FREE#43 в тексте
    const nameMatch = text.match(/#\s*(NL-FREE#?\d+)/);
    if (nameMatch) {
      config.peers[0].name = nameMatch[1];
    }
  }

  return config;
}

function convertToClashProxy(wgConfig, fileName) {
  const interfaceData = wgConfig.interface;
  const peerData = wgConfig.peers[0];
  const dnsList = interfaceData.dns ? interfaceData.dns.split(',').map(d => d.trim()) : [];
  const defaultAmnezia = generateAmneziaDefaults();
  let proxyName = peerData.name || fileName.replace('.conf', '');
  let originalName = proxyName;
  
  if (!proxyName) {
    proxyName = `Random_${Math.random().toString(36).substr(2, 5)}`;
  } else {
    proxyName = proxyName.replace(/FREE#?/g, '');
    proxyName = proxyName.replace(/-$/, '');
    
    const flagMatch = proxyName.match(/^([A-Z]{2})[-_]/);
    if (flagMatch && COUNTRY_FLAGS[flagMatch[1]]) {
      proxyName = proxyName.replace(flagMatch[1], COUNTRY_FLAGS[flagMatch[1]]);
    }
  }

  const addresses = interfaceData.address.split(',').map(addr => addr.trim());
  let ipv4 = '';
  let ipv6 = '';
  
  addresses.forEach(addr => {
    // Проверяем, содержит ли адрес двоеточие (признак IPv6)
    if (addr.includes(':')) {
      ipv6 = addr;
    } else {
      ipv4 = addr;
    }
  });

  const amneziaOptions = {};
  for (const key of ['jc', 'jmin', 'jmax', 's1', 's2', 's3', 's4', 'h1', 'h2', 'h3', 'h4']) {
    const interfaceValue = interfaceData.amneziaOptions[key];
    const peerValue = peerData.amneziaOptions[key];
    amneziaOptions[key] = interfaceValue || peerValue || defaultAmnezia[key];
  }

  return {
    name: proxyName,
    originalName: originalName,
    type: "wireguard",
    server: peerData.endpoint.split(':')[0],
    port: parseInt(peerData.endpoint.split(':')[1]),
    ip: interfaceData.address,
	ipv4: ipv4,
	ipv6: ipv6,
    private_key: interfaceData.privatekey,
    public_key: peerData.publickey,
    preshared_key: peerData.presharedKey, 
    allowed_ips: peerData.allowedips.split(',').map(ip => `'${ip.trim()}'`),
    udp: true,
    mtu: 1280,
    remote_dns_resolve: true,
    dns: dnsList,
    'amnezia-wg-option': amneziaOptions,
    isDefaultAmnezia: !(interfaceData.amneziaOptions.jc || peerData.amneziaOptions.jc)
  };
}

function generateAmneziaOptionsYAML(options) {
      const nojunkEnabled = document.getElementById('nojunk').checked;
	  const awg15Enabled = document.getElementById('awg15').checked;  
	  let yaml = '  amnezia-wg-option:\n';
	  if (nojunkEnabled) {} else {
      for (const [key, value] of Object.entries(options)) {
        yaml += `    ${key}: ${value}\n`;
      }}
	  if (awg15Enabled) {
		const i1 = document.getElementById('i1').value.trim() || '<b 0xc30000000114daa73277bd0ff9721741f2d99d8224ed80a539861486cb4a5d493bad74ed92959c0254a0a05916b96b008000047c887351089ae9bf34abeb64d07694b6f9112679e394826c40d6cb12684d28b1921337c0706accf886c6c59ee4057b1b1d9480f9a16d544eafe71091ba1de5762f14bbd5cf7442dff5dc1130efe1a2dc66adb23cbc5dc1233a91bea00fc33665a5068b8595a18438a5f700d130126eace94d2b15001f4741a831af4819b01766c184480a78ed0ce5789e4d3d491fe302e6b08cb97b7e12154f43d2e58e9167d89710c60aeae5e6bdcaf1b53fe76415945d45d053aadcc3b4926b6cfd625252c3e9ad7af08403c3f0abcbfea311732e8457b89e1251b8099471fa1b560c795c6dee7c4899fc5296d69e4c49f8b65b86c2c4e338c3d5ae0df22feea580f77c37ffd092a5649ac6a869f6b5d793d31d3697a8bec52d13164b35bc53fadf754ee27623bb02b8548e4e3838e3361c051494162b8124e87e6cd193556e7ecf21b079269e3abcc40335d2bd5568b95085e67c82287b69bd4e6887ebe6dec4e9b96cefb1faf973b56b605b0ba6ed661f1833d9ce37778a1742ed22dc37998ccac712f932e912a82637eaf09bc4e39cb562959ec987d0d8c233dd6ba25e1da8954d2bfa1fe6400bda00683c6b4419cce0eba094c989c0ec8ac71ac7c9aa5fe8f54925403d1586c134e5ad4b552162f10b6d4ad33975f96d2bba66e9c63da04bbcc8135f15987167238d2c711a7128612d28da10f98d2281913789a2bf74d057646980e2d668a109ac130abd21ef60b53e6081f1e40836be0ec0e4b4dcdc6fdfbc5999b3474c7b03a708b4978924d356be8230db46037ceb8e3d97b784065d770b0a74bdbae2073742b597ee357967385cdabc47c117123beee93f161f4078e64b9e47a16788ef7df4db8f764160ae8f88394571a48141bf148ce150d91230e57c029be771ceb7fe4be9d65001004c37de41bc9990ff488bf207833fb0639fd774c9e63dee98a8407123391de40f0ffcfb8322e8082c855f89f85a87088b5fcf94df88645491a4984efed3c24a1193aad682a281bbff73b541f209970f9bf04b8908082ac3c6eb75e81a4207f415dba8f1d7e844e3bda426c9811992e1c8b1e8b848fbb19dab41f1da07c1295b45aa6f0c62d93ae9f112fc0f2cde1bd3fba0677959282dc3c5bbfd7119187e28c1f9dee318088a0142be3b0cc5d623ab76de2c2d115c18801655a06dc3530979c230849105ffb01041c7a9db9a824d3378049d0eb499b7dbe1e02d4aa319ecf5b432fad90951c48f63cfa11fb4606bb3f35da79e2da2f577d9f8d37e22f85d214eb09bc85a6283172397a14d49d28ec5f657dced32d7a7b74c4d29d9e944d20d856fc1987f0513636a5f9777cdc9345200d731e11b50011ec5cdb2c9643dfed4a81dc877e4960df7a7fa78d88caae29e6d52ddd8ba598626e432ee189884dcb710fb446a089530e633c1fc850d13233c8b705f99517fee643f55c5bffd776797c3604f3ca375330a509b770395fac91e95e936193ba125f8849f572a97ea4d1275b6add8a093deba33e62e27c21b8da6424e0bf0624365c5054b7e5021c9c8bf38b5cedcb5635ef7afa331b1444a7294794899134a9ac87d5cebaadee8985a9c736bb093b555dd724af0de9f1574ed95cf9cfb9a40>';
		const i2 = document.getElementById('i2').value.trim() || '<b 0xc30000000114daa73277bd0ff9721741f2d99d8224ed80a539861486cb4a5d493bad74ed92959c0254a0a05916b96b008000047c887351089ae9bf34abeb64d07694b6f9112679e394826c40d6cb12684d28b1921337c0706accf886c6c59ee4057b1b1d9480f9a16d544eafe71091ba1de5762f14bbd5cf7442dff5dc1130efe1a2dc66adb23cbc5dc1233a91bea00fc33665a5068b8595a18438a5f700d130126eace94d2b15001f4741a831af4819b01766c184480a78ed0ce5789e4d3d491fe302e6b08cb97b7e12154f43d2e58e9167d89710c60aeae5e6bdcaf1b53fe76415945d45d053aadcc3b4926b6cfd625252c3e9ad7af08403c3f0abcbfea311732e8457b89e1251b8099471fa1b560c795c6dee7c4899fc5296d69e4c49f8b65b86c2c4e338c3d5ae0df22feea580f77c37ffd092a5649ac6a869f6b5d793d31d3697a8bec52d13164b35bc53fadf754ee27623bb02b8548e4e3838e3361c051494162b8124e87e6cd193556e7ecf21b079269e3abcc40335d2bd5568b95085e67c82287b69bd4e6887ebe6dec4e9b96cefb1faf973b56b605b0ba6ed661f1833d9ce37778a1742ed22dc37998ccac712f932e912a82637eaf09bc4e39cb562959ec987d0d8c233dd6ba25e1da8954d2bfa1fe6400bda00683c6b4419cce0eba094c989c0ec8ac71ac7c9aa5fe8f54925403d1586c134e5ad4b552162f10b6d4ad33975f96d2bba66e9c63da04bbcc8135f15987167238d2c711a7128612d28da10f98d2281913789a2bf74d057646980e2d668a109ac130abd21ef60b53e6081f1e40836be0ec0e4b4dcdc6fdfbc5999b3474c7b03a708b4978924d356be8230db46037ceb8e3d97b784065d770b0a74bdbae2073742b597ee357967385cdabc47c117123beee93f161f4078e64b9e47a16788ef7df4db8f764160ae8f88394571a48141bf148ce150d91230e57c029be771ceb7fe4be9d65001004c37de41bc9990ff488bf207833fb0639fd774c9e63dee98a8407123391de40f0ffcfb8322e8082c855f89f85a87088b5fcf94df88645491a4984efed3c24a1193aad682a281bbff73b541f209970f9bf04b8908082ac3c6eb75e81a4207f415dba8f1d7e844e3bda426c9811992e1c8b1e8b848fbb19dab41f1da07c1295b45aa6f0c62d93ae9f112fc0f2cde1bd3fba0677959282dc3c5bbfd7119187e28c1f9dee318088a0142be3b0cc5d623ab76de2c2d115c18801655a06dc3530979c230849105ffb01041c7a9db9a824d3378049d0eb499b7dbe1e02d4aa319ecf5b432fad90951c48f63cfa11fb4606bb3f35da79e2da2f577d9f8d37e22f85d214eb09bc85a6283172397a14d49d28ec5f657dced32d7a7b74c4d29d9e944d20d856fc1987f0513636a5f9777cdc9345200d731e11b50011ec5cdb2c9643dfed4a81dc877e4960df7a7fa78d88caae29e6d52ddd8ba598626e432ee189884dcb710fb446a089530e633c1fc850d13233c8b705f99517fee643f55c5bffd776797c3604f3ca375330a509b770395fac91e95e936193ba125f8849f572a97ea4d1275b6add8a093deba33e62e27c21b8da6424e0bf0624365c5054b7e5021c9c8bf38b5cedcb5635ef7afa331b1444a7294794899134a9ac87d5cebaadee8985a9c736bb093b555dd724af0de9f1574ed95cf9cfb9a40>';
		const i3 = document.getElementById('i3').value.trim() || '<b 0x494e56495445207369703a626f624062696c6f78692e636f6d205349502f322e300d0a5669613a205349502f322e302f55445020706333332e61746c616e74612e636f6d3b6272616e63683d7a39684734624b3737366173646864730d0a4d61782d466f7277617264733a2037300d0a546f3a20426f62203c7369703a626f624062696c6f78692e636f6d3e0d0a46726f6d3a20416c696365203c7369703a616c6963654061746c616e74612e636f6d3e3b7461673d313932383330313737340d0a43616c6c2d49443a20613834623463373665363637313040706333332e61746c616e74612e636f6d0d0a435365713a2033313431353920494e564954450d0a436f6e746163743a203c7369703a616c69636540706333332e61746c616e74612e636f6d3e0d0a436f6e74656e742d547970653a206170706c69636174696f6e2f7364700d0a436f6e74656e742d4c656e6774683a20300d0a0d0a>';
		const i4 = document.getElementById('i4').value.trim() || '<b 0x5349502f322e302031303020547279696e670d0a5669613a205349502f322e302f55445020706333332e61746c616e74612e636f6d3b6272616e63683d7a39684734624b3737366173646864730d0a546f3a20426f62203c7369703a626f624062696c6f78692e636f6d3e0d0a46726f6d3a20416c696365203c7369703a616c6963654061746c616e74612e636f6d3e3b7461673d313932383330313737340d0a43616c6c2d49443a20613834623463373665363637313040706333332e61746c616e74612e636f6d0d0a435365713a2033313431353920494e564954450d0a436f6e74656e742d4c656e6774683a20300d0a0d0a>';
		const i5 = document.getElementById('i5').value.trim();  
		  
		 yaml += `    i1: ${i1}\n`;
      if (i2) yaml += `    i2: ${i2}\n`;
      if (i3) yaml += `    i3: ${i3}\n`;
      if (i4) yaml += `    i4: ${i4}\n`;
      if (i5) yaml += `    i5: ${i5}\n`;
	  }
      return yaml;
    }

function generateProxyGroups(proxies) {
  const groups = [];
  const protonProxies = [];
  const otherProxies = [];

  proxies.forEach(proxy => {
    const isProton = /(^|[_-])([A-Z]{2})([-_]FREE)?([#_-]|$)/i.test(proxy.originalName || proxy.name);
    
    if (isProton) {
      protonProxies.push(proxy.name);
    } else {
      otherProxies.push(proxy.name);
    }
  });

  if (protonProxies.length > 0) {
    groups.push(`
- name: Proton
  type: select
  icon: https://res.cloudinary.com/dbulfrlrz/image/upload/v1703162849/static/logos/icons/vpn_f9embt.svg
  proxies:
    - ${protonProxies.join('\n    - ')}
  url: 'http://speed.cloudflare.com/'
  unified-delay: true
  interval: 300`);
  }

  if (otherProxies.length > 0) {
    groups.push(`
- name: Other
  type: select
  icon: https://raw.githubusercontent.com/zaeboba/page/refs/heads/main/archive/amnezia.svg
  proxies:
    - ${otherProxies.join('\n    - ')}
  url: 'http://speed.cloudflare.com/'
  unified-delay: true
  interval: 300`);
  }

  return groups.join('\n');
}

function convert() {
  const files = document.getElementById('wgFiles').files;
  if (!files.length) return alert('Выберите файлы .conf');

  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  enableToggles();
  
  proxyList = [];
  document.getElementById('fileList').innerHTML = `Обрабатываются файлы: ${Array.from(files).map(f => f.name).join(', ')}`;
  let filesProcessed = 0;
  
  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = function() {
      try {
        const wgConfig = parseWGConfig(reader.result);
        const proxy = convertToClashProxy(wgConfig, file.name);
        proxyList.push(proxy);
        filesProcessed++;
        if (filesProcessed === files.length) {
          switch(selectedOption) {
            case 'clash':
              generateClashYaml();
              break;
            case 'awg':
              generateAWGYaml();
              break;
            case 'karing':
              generateAWGYaml();
              break;
            default:
              generateClashYaml();
          }
        }
      } catch (e) {
        alert(`Ошибка в файле ${file.name}: ${e.message}`);
        filesProcessed++; 
        if (filesProcessed === files.length) {
          generateClashYaml();
        }
      }
    };
    reader.onerror = function() {
      alert(`Ошибка чтения файла ${file.name}`);
      filesProcessed++;
      if (filesProcessed === files.length) {
        generateClashYaml();
      }
    };
    reader.readAsText(file);
  });
}

function generateClashYaml() {
  if (proxyList.length === 0) {
    alert('Не удалось обработать ни один файл');
    return;
  }




  const yamlProxies = proxyList.map(proxy => {
    let yaml = `- name: ${proxy.name}\n`;
    yaml += `  type: ${proxy.type}\n`;
    yaml += `  server: ${proxy.server}\n`;
    yaml += `  port: ${proxy.port}\n`;
    yaml += `  ip: ${proxy.ipv4}\n`;
	if (proxy.ipv6) {
    yaml += `  ipv6: ${proxy.ipv6}\n`;
    }
    yaml += `  private-key: ${proxy.private_key}\n`;
    yaml += `  public-key: ${proxy.public_key}\n`;
    yaml += `  allowed-ips: [${proxy.allowed_ips.join(', ')}]\n`;
	if (proxy.preshared_key) {
    yaml += `  pre-shared-key: ${proxy.preshared_key}\n`;}
    yaml += `  udp: ${proxy.udp}\n`;
    yaml += `  mtu: ${proxy.mtu}\n`;
    yaml += `  remote-dns-resolve: ${proxy.remote_dns_resolve}\n`;
    yaml += `  dns: [${proxy.dns.join(', ')}]\n`;
    yaml += generateAmneziaOptionsYAML(proxy['amnezia-wg-option'], proxy.isDefaultAmnezia);
    return yaml;
  }).join('\n');

  const proxyGroups = generateProxyGroups(proxyList);
  const fullYaml = `proxies:\n${yamlProxies}\nproxy-groups:${proxyGroups}`;
  
  document.getElementById('yamlOutput').value = fullYaml;
  document.getElementById('downloadBtn').classList.remove('hidden');
  document.getElementById('copyBtn').classList.remove('hidden');
  document.getElementById('btn-cont').classList.remove('hidden');
  document.getElementById('downloadBtn').onclick = () => downloadYAML(fullYaml, 'clash-config.yaml');
  document.getElementById('copyBtn').onclick = () => {
    navigator.clipboard.writeText(fullYaml)
      .then(() => alert('Конфиг скопирован в буфер обмена!'))
      .catch(err => alert('Не удалось скопировать: ', err));
  };
}

function generateAWGYaml() {
  if (proxyList.length === 0) {
    alert('Не удалось обработать ни один файл');
    return;
  }

  const awgConfigs = proxyList.map(proxy => generateSingleAWGConfig(proxy));
  const finalOutput = awgConfigs.join('\n\n');

  document.getElementById('yamlOutput').value = finalOutput;
  document.getElementById('downloadBtn').classList.remove('hidden');
  document.getElementById('downloadBtn').onclick = downloadAWGConfigs;
  document.getElementById('copyBtn').classList.remove('hidden');
  document.getElementById('btn-cont').classList.remove('hidden');
  document.getElementById('copyBtn').onclick = () => {
    navigator.clipboard.writeText(fullYaml)
      .then(() => alert('Конфиг скопирован в буфер обмена!'))
      .catch(err => alert('Не удалось скопировать: ', err));
  };
}

/* function generateKaringYaml() {
  if (proxyList.length === 0) {
    alert('Не удалось обработать ни один файл');
    return;
  }

  const fakeOption = document.querySelector('input[name="fake"]:checked').id;
  let fakePackets, fakePacketsSize, fakePacketsDelay;

  switch(fakeOption) {
    case 'fake1':
      fakePackets = "3";
      fakePacketsSize = "1";
      fakePacketsDelay = "3";
      break;
    case 'fake2':
      fakePackets = "1-10";
      fakePacketsSize = "10-30";
      fakePacketsDelay = "10-30";
      break;
    case 'fake3':
      fakePackets = document.getElementById('fp1').value || "5-10";
      fakePacketsSize = document.getElementById('fps1').value || "40-100";
      fakePacketsDelay = document.getElementById('fpd1').value || "20-250";
      break;
    default:
      fakePackets = "5-10";
      fakePacketsSize = "40-100";
      fakePacketsDelay = "20-250";
  }

  const outbounds = proxyList.map(proxy => ({
    "type": "wireguard",
    "tag": proxy.name,
    "local_address": [`${proxy.ip}/32`],
    "private_key": proxy.private_key,
    "peer_public_key": proxy.public_key,
    "mtu": proxy.mtu,
    "fake_packets": fakePackets,
    "fake_packets_size": fakePacketsSize,
    "fake_packets_delay": fakePacketsDelay,
    "fake_packets_mode": "m4",
    "server": proxy.server,
    "server_port": proxy.port
  }));
  const karingConfig = {
    "outbounds": outbounds
  };

  const fullYaml = JSON.stringify(karingConfig, null, 2);
  document.getElementById('yamlOutput').value = fullYaml;
  document.getElementById('downloadBtn').classList.remove('hidden');
  document.getElementById('copyBtn').classList.remove('hidden');
    document.getElementById('btn-cont').classList.remove('hidden');
  document.getElementById('downloadBtn').onclick = () => downloadYAML(fullYaml, 'karing-config.json');
  document.getElementById('copyBtn').onclick = () => {
    navigator.clipboard.writeText(fullYaml)
      .then(() => alert('Конфиг скопирован в буфер обмена!'))
      .catch(err => alert('Не удалось скопировать: ', err));
  };
}
*/
function downloadYAML(yamlContent, fileName) {
  const blob = new Blob([yamlContent], { type: 'text/yaml; charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName || 'config.yaml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadAWGConfigs() {
  if (proxyList.length === 0) return;
  const downloadFrame = document.createElement('iframe');
  downloadFrame.style.display = 'none';
  document.body.appendChild(downloadFrame);
  proxyList.forEach((proxy, index) => {
    setTimeout(() => {
      const awgConfig = generateSingleAWGConfig(proxy);
      const fileName = getAWGFileName(proxy, index);
      
      const blob = new Blob([awgConfig], { type: 'application/x-config; charset=utf-8' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      downloadFrame.contentDocument.body.appendChild(link);
      link.click();
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 10000);
    }, 1000 * index);
  });
  setTimeout(() => {
    document.body.removeChild(downloadFrame);
  }, 1000 * proxyList.length + 1000);
}

function generateSingleAWGConfig(proxy) {
  const amneziaOptions = proxy['amnezia-wg-option'];
  const awg15Enabled = document.getElementById('awg15').checked;
  const nojunkEnabled = document.getElementById('nojunk').checked;
  const nolanEnabled = document.getElementById('nolan').checked;
  
  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  
  let awgConfig = '';
  
  if (proxy.originalName) {
    awgConfig += `# ${proxy.originalName}\n`;
  } else {
    awgConfig += `# Безымянный конфиг\n`;
  }
  
  awgConfig += `[Interface]\n`;
  awgConfig += `PrivateKey = ${proxy.private_key}\n`;
  awgConfig += `Address = ${proxy.ip}\n`;
  
  if (proxy.dns && proxy.dns.length > 0) {
    awgConfig += `DNS = ${proxy.dns.join(', ')}\n`;
  }
  
  awgConfig += `MTU = ${proxy.mtu}\n`;
  if (nojunkEnabled) {} else {
  awgConfig += `S1 = 0\n`;
  awgConfig += `S2 = 0\n`;
  awgConfig += `S3 = 0\n`;
  awgConfig += `S4 = 0\n`;
  awgConfig += `Jc = ${amneziaOptions.jc}\n`;
  awgConfig += `Jmin = ${amneziaOptions.jmin}\n`;
  awgConfig += `Jmax = ${amneziaOptions.jmax}\n`;
  awgConfig += `H1 = ${amneziaOptions.h1}\n`;
  awgConfig += `H2 = ${amneziaOptions.h2}\n`;
  awgConfig += `H3 = ${amneziaOptions.h3}\n`;
  awgConfig += `H4 = ${amneziaOptions.h4}\n`;
  }
  if (awg15Enabled) {
	  if (selectedOption === 'awg') {
	  const i1 = document.getElementById('i1').value.trim() || '<b 0xc30000000114daa73277bd0ff9721741f2d99d8224ed80a539861486cb4a5d493bad74ed92959c0254a0a05916b96b008000047c887351089ae9bf34abeb64d07694b6f9112679e394826c40d6cb12684d28b1921337c0706accf886c6c59ee4057b1b1d9480f9a16d544eafe71091ba1de5762f14bbd5cf7442dff5dc1130efe1a2dc66adb23cbc5dc1233a91bea00fc33665a5068b8595a18438a5f700d130126eace94d2b15001f4741a831af4819b01766c184480a78ed0ce5789e4d3d491fe302e6b08cb97b7e12154f43d2e58e9167d89710c60aeae5e6bdcaf1b53fe76415945d45d053aadcc3b4926b6cfd625252c3e9ad7af08403c3f0abcbfea311732e8457b89e1251b8099471fa1b560c795c6dee7c4899fc5296d69e4c49f8b65b86c2c4e338c3d5ae0df22feea580f77c37ffd092a5649ac6a869f6b5d793d31d3697a8bec52d13164b35bc53fadf754ee27623bb02b8548e4e3838e3361c051494162b8124e87e6cd193556e7ecf21b079269e3abcc40335d2bd5568b95085e67c82287b69bd4e6887ebe6dec4e9b96cefb1faf973b56b605b0ba6ed661f1833d9ce37778a1742ed22dc37998ccac712f932e912a82637eaf09bc4e39cb562959ec987d0d8c233dd6ba25e1da8954d2bfa1fe6400bda00683c6b4419cce0eba094c989c0ec8ac71ac7c9aa5fe8f54925403d1586c134e5ad4b552162f10b6d4ad33975f96d2bba66e9c63da04bbcc8135f15987167238d2c711a7128612d28da10f98d2281913789a2bf74d057646980e2d668a109ac130abd21ef60b53e6081f1e40836be0ec0e4b4dcdc6fdfbc5999b3474c7b03a708b4978924d356be8230db46037ceb8e3d97b784065d770b0a74bdbae2073742b597ee357967385cdabc47c117123beee93f161f4078e64b9e47a16788ef7df4db8f764160ae8f88394571a48141bf148ce150d91230e57c029be771ceb7fe4be9d65001004c37de41bc9990ff488bf207833fb0639fd774c9e63dee98a8407123391de40f0ffcfb8322e8082c855f89f85a87088b5fcf94df88645491a4984efed3c24a1193aad682a281bbff73b541f209970f9bf04b8908082ac3c6eb75e81a4207f415dba8f1d7e844e3bda426c9811992e1c8b1e8b848fbb19dab41f1da07c1295b45aa6f0c62d93ae9f112fc0f2cde1bd3fba0677959282dc3c5bbfd7119187e28c1f9dee318088a0142be3b0cc5d623ab76de2c2d115c18801655a06dc3530979c230849105ffb01041c7a9db9a824d3378049d0eb499b7dbe1e02d4aa319ecf5b432fad90951c48f63cfa11fb4606bb3f35da79e2da2f577d9f8d37e22f85d214eb09bc85a6283172397a14d49d28ec5f657dced32d7a7b74c4d29d9e944d20d856fc1987f0513636a5f9777cdc9345200d731e11b50011ec5cdb2c9643dfed4a81dc877e4960df7a7fa78d88caae29e6d52ddd8ba598626e432ee189884dcb710fb446a089530e633c1fc850d13233c8b705f99517fee643f55c5bffd776797c3604f3ca375330a509b770395fac91e95e936193ba125f8849f572a97ea4d1275b6add8a093deba33e62e27c21b8da6424e0bf0624365c5054b7e5021c9c8bf38b5cedcb5635ef7afa331b1444a7294794899134a9ac87d5cebaadee8985a9c736bb093b555dd724af0de9f1574ed95cf9cfb9a40>';
	  const i2 = document.getElementById('i2').value.trim() || '<b 0xc30000000114daa73277bd0ff9721741f2d99d8224ed80a539861486cb4a5d493bad74ed92959c0254a0a05916b96b008000047c887351089ae9bf34abeb64d07694b6f9112679e394826c40d6cb12684d28b1921337c0706accf886c6c59ee4057b1b1d9480f9a16d544eafe71091ba1de5762f14bbd5cf7442dff5dc1130efe1a2dc66adb23cbc5dc1233a91bea00fc33665a5068b8595a18438a5f700d130126eace94d2b15001f4741a831af4819b01766c184480a78ed0ce5789e4d3d491fe302e6b08cb97b7e12154f43d2e58e9167d89710c60aeae5e6bdcaf1b53fe76415945d45d053aadcc3b4926b6cfd625252c3e9ad7af08403c3f0abcbfea311732e8457b89e1251b8099471fa1b560c795c6dee7c4899fc5296d69e4c49f8b65b86c2c4e338c3d5ae0df22feea580f77c37ffd092a5649ac6a869f6b5d793d31d3697a8bec52d13164b35bc53fadf754ee27623bb02b8548e4e3838e3361c051494162b8124e87e6cd193556e7ecf21b079269e3abcc40335d2bd5568b95085e67c82287b69bd4e6887ebe6dec4e9b96cefb1faf973b56b605b0ba6ed661f1833d9ce37778a1742ed22dc37998ccac712f932e912a82637eaf09bc4e39cb562959ec987d0d8c233dd6ba25e1da8954d2bfa1fe6400bda00683c6b4419cce0eba094c989c0ec8ac71ac7c9aa5fe8f54925403d1586c134e5ad4b552162f10b6d4ad33975f96d2bba66e9c63da04bbcc8135f15987167238d2c711a7128612d28da10f98d2281913789a2bf74d057646980e2d668a109ac130abd21ef60b53e6081f1e40836be0ec0e4b4dcdc6fdfbc5999b3474c7b03a708b4978924d356be8230db46037ceb8e3d97b784065d770b0a74bdbae2073742b597ee357967385cdabc47c117123beee93f161f4078e64b9e47a16788ef7df4db8f764160ae8f88394571a48141bf148ce150d91230e57c029be771ceb7fe4be9d65001004c37de41bc9990ff488bf207833fb0639fd774c9e63dee98a8407123391de40f0ffcfb8322e8082c855f89f85a87088b5fcf94df88645491a4984efed3c24a1193aad682a281bbff73b541f209970f9bf04b8908082ac3c6eb75e81a4207f415dba8f1d7e844e3bda426c9811992e1c8b1e8b848fbb19dab41f1da07c1295b45aa6f0c62d93ae9f112fc0f2cde1bd3fba0677959282dc3c5bbfd7119187e28c1f9dee318088a0142be3b0cc5d623ab76de2c2d115c18801655a06dc3530979c230849105ffb01041c7a9db9a824d3378049d0eb499b7dbe1e02d4aa319ecf5b432fad90951c48f63cfa11fb4606bb3f35da79e2da2f577d9f8d37e22f85d214eb09bc85a6283172397a14d49d28ec5f657dced32d7a7b74c4d29d9e944d20d856fc1987f0513636a5f9777cdc9345200d731e11b50011ec5cdb2c9643dfed4a81dc877e4960df7a7fa78d88caae29e6d52ddd8ba598626e432ee189884dcb710fb446a089530e633c1fc850d13233c8b705f99517fee643f55c5bffd776797c3604f3ca375330a509b770395fac91e95e936193ba125f8849f572a97ea4d1275b6add8a093deba33e62e27c21b8da6424e0bf0624365c5054b7e5021c9c8bf38b5cedcb5635ef7afa331b1444a7294794899134a9ac87d5cebaadee8985a9c736bb093b555dd724af0de9f1574ed95cf9cfb9a40>';
	  const i3 = document.getElementById('i3').value.trim() || '<b 0x494e56495445207369703a626f624062696c6f78692e636f6d205349502f322e300d0a5669613a205349502f322e302f55445020706333332e61746c616e74612e636f6d3b6272616e63683d7a39684734624b3737366173646864730d0a4d61782d466f7277617264733a2037300d0a546f3a20426f62203c7369703a626f624062696c6f78692e636f6d3e0d0a46726f6d3a20416c696365203c7369703a616c6963654061746c616e74612e636f6d3e3b7461673d313932383330313737340d0a43616c6c2d49443a20613834623463373665363637313040706333332e61746c616e74612e636f6d0d0a435365713a2033313431353920494e564954450d0a436f6e746163743a203c7369703a616c69636540706333332e61746c616e74612e636f6d3e0d0a436f6e74656e742d547970653a206170706c69636174696f6e2f7364700d0a436f6e74656e742d4c656e6774683a20300d0a0d0a>';
	  const i4 = document.getElementById('i4').value.trim() || '<b 0x5349502f322e302031303020547279696e670d0a5669613a205349502f322e302f55445020706333332e61746c616e74612e636f6d3b6272616e63683d7a39684734624b3737366173646864730d0a546f3a20426f62203c7369703a626f624062696c6f78692e636f6d3e0d0a46726f6d3a20416c696365203c7369703a616c6963654061746c616e74612e636f6d3e3b7461673d313932383330313737340d0a43616c6c2d49443a20613834623463373665363637313040706333332e61746c616e74612e636f6d0d0a435365713a2033313431353920494e564954450d0a436f6e74656e742d4c656e6774683a20300d0a0d0a>';
	  const i5 = document.getElementById('i5').value.trim();
      
      awgConfig += `I1 = ${i1}\n`;

      if (i2) {
        awgConfig += `I2 = ${i2}\n`;
      }
      if (i3) {
        awgConfig += `I3 = ${i3}\n`;
      }
      if (i4) {
        awgConfig += `I4 = ${i4}\n`;
      }
      if (i5) {
        awgConfig += `I5 = ${i5}\n`;
      }

   } else if (selectedOption === 'karing') {
	  const idValue = document.getElementById('id').value.trim() || 'my.mail.ru';
      const ipValue = document.getElementById('ip').value || 'quic';
      const ibValue = document.getElementById('ib').value || 'firefox';
	  awgConfig += `Id = ${idValue}\n`;
      awgConfig += `Ip = ${ipValue}\n`;
      awgConfig += `Ib = ${ibValue}\n`;
    }
  }
  awgConfig += `\n[Peer]\n`;
  awgConfig += `PublicKey = ${proxy.public_key}\n`;
  if (proxy.preshared_key) {
  awgConfig += `PresharedKey = ${proxy.preshared_key}\n`;}
   if (nolanEnabled) {
    awgConfig += `AllowedIPs = 1.0.0.0/8, 2.0.0.0/7, 4.0.0.0/6, 8.0.0.0/7, 11.0.0.0/8, 12.0.0.0/6, 16.0.0.0/4, 32.0.0.0/3, 64.0.0.0/3, 96.0.0.0/4, 112.0.0.0/5, 120.0.0.0/6, 124.0.0.0/7, 126.0.0.0/8, 128.0.0.0/3, 160.0.0.0/5, 168.0.0.0/8, 169.0.0.0/9, 169.128.0.0/10, 169.192.0.0/11, 169.224.0.0/12, 169.240.0.0/13, 169.248.0.0/14, 169.252.0.0/15, 169.255.0.0/16, 170.0.0.0/7, 172.0.0.0/12, 172.32.0.0/11, 172.64.0.0/10, 172.128.0.0/9, 173.0.0.0/8, 174.0.0.0/7, 176.0.0.0/4, 192.0.0.0/9, 192.128.0.0/11, 192.160.0.0/13, 192.169.0.0/16, 192.170.0.0/15, 192.172.0.0/14, 192.176.0.0/12, 192.192.0.0/10, 193.0.0.0/8, 194.0.0.0/7, 196.0.0.0/6, 200.0.0.0/5, 208.0.0.0/4, 224.0.0.0/4, ::/1, 8000::/2, c000::/3, e000::/4, f000::/5, f800::/6, fe00::/9, fec0::/10, ff00::/8\n`;
  } else {
    awgConfig += `AllowedIPs = ${proxy.allowed_ips.join(', ').replace(/'/g, '')}\n`;
  }
  awgConfig += `Endpoint = ${proxy.server}:${proxy.port}\n`;
  awgConfig += `PersistentKeepalive = 5\n`;

  return awgConfig;
}

function getAWGFileName(proxy, index) {
  if (proxy.originalName) {
    const cleanedName = proxy.originalName.replace(/-FREE/g, '');
    return `${cleanedName.replace(/[^a-z0-9]/gi, '_')}.conf`;
  }
  return `config_${index + 1}.conf`;
}

function fallbackDownload(proxies) {
  proxies.forEach((proxy, index) => {
    const awgConfig = generateSingleAWGConfig(proxy);
    const fileName = getAWGFileName(proxy, index);
    
    const blob = new Blob([awgConfig], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100 * index);
  });
}

function replaceMobileText() {
    if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) return;

    // Заменяем подписи к полям ввода
    const labels = document.querySelectorAll('.musor2 .jc');
    labels[0].previousSibling.textContent = "fake_packets = ";
    labels[1].previousSibling.textContent = "fake_packets_size = ";
    labels[2].previousSibling.textContent = "fake_packets_delay = ";
}

// Вызываем при загрузке и при изменении размера окна
window.addEventListener('DOMContentLoaded', replaceMobileText);
window.addEventListener('resize', replaceMobileText);

function enableToggles() {
  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  const awg15Toggle = document.getElementById('awg15');
  const nojunkToggle = document.getElementById('nojunk');
  const nolanToggle = document.getElementById('nolan');
  awg15Toggle.disabled = false;
  nojunkToggle.disabled = false;
  nolanToggle.disabled = false;
  
  toggleAWG15Containers();
  toggleJunkContainer();
}

['nolan', 'awg15', 'nojunk', 'clash', 'awg', 'karing', 'fake1', 'fake2', 'fake3', 'junk1', 'junk2', 'junk3', 'junk4', 'junk5', 'i1', 'i2', 'i3', 'i4', 'i5', 'id', 'ip', 'ib'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', function() {
		
        if (!this.disabled) {
            // Если изменился awg15 или option, обновляем видимость контейнеров
            if (id === 'awg15' || id === 'clash' || id === 'awg' || id === 'karing') {
                toggleAWG15Containers();
            }
			if (id === 'nojunk') {
                toggleJunkContainer();
            }
            convert();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Получаем все textarea с классом jc
const textareas = document.querySelectorAll('.jc');
    
    textareas.forEach(textarea => {
        textarea.addEventListener('keydown', function(e) {
            // Если нажата клавиша Enter без Shift
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault(); // Отменяем стандартное поведение (перенос строки)
                this.blur();
            }
        });
    });
});

// Открытие modal
document.querySelector('.genbtn')?.addEventListener('click', function() {
    const modal = document.getElementById('Modal');
    if (modal) {
        modal.style.display = 'block';
    }
});

// Закрытие модального окна при клике на крестик
function closeModal() {
    const modal = document.getElementById('Modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Закрытие модального окна при клике вне его области
window.addEventListener('click', function(event) {
    const modal = document.getElementById('Modal');
    if (modal && event.target === modal) {
        modal.style.display = 'none';
    }
});

// Обработчик для кнопки подтверждения в модальном окне
const selectDomainBtn = document.getElementById('selectDomain');
if (selectDomainBtn) {
    selectDomainBtn.addEventListener('click', async function() {
    const domainInput = document.getElementById('domain');
    const domain = domainInput.value.trim();
    
    if (domain) {
        const i1 = await generateI1FromDomain(domain);
		document.getElementById('i1').value = i1;
		document.getElementById('i2').value = i1;
        closeModal();
        convert();
		
    } else {
        alert('Пожалуйста, введите домен');
    }
});
}

// NolanClash
function toggleNolanContainer() {
  const nolanEnabled = document.getElementById('nolan').checked;
  const selectedOption = document.querySelector('input[name="option"]:checked').id;
  
  // Отключаем свитч nolan при выборе clash
  if (selectedOption === 'clash') {
    const nolanToggle = document.getElementById('nolan');
    if (nolanToggle) {
      nolanToggle.disabled = true;
      nolanToggle.checked = false;
    }
  } else {
    const nolanToggle = document.getElementById('nolan');
    if (nolanToggle) {
      nolanToggle.disabled = false;
    }
  }
}
