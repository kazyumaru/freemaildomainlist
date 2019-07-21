/* JavaScript（Jquery Validator用）フリーメールバリデーション */

<script>
var methods = {
					freemail: function(value,element){
						const ary = ["/gmail.com/","/outlook.com/","/outlook.jp/","/xxne.jp/","/msn.com/","/goo.ne.jp/","/freemail.ne.jp/","/tokyo24.com/","/excite.co.jp/","/infoseek.jp/","/infoseek.co.jp/","/comeon.to/","/comeon.cx/","/cuib.or.jp/","/ziplip.co.jp/","/zdnetmail.ne.jp/","/supermail.com/","/smoug.net/","/sailormoon.com/","/lycos.ne.jp/","/lycos.com/","/clubaa.com/","/prontomail.ne.jp/","/itpmail.itp.ne.jp/","/bizoffi.com/","/xaque.com/","/safe-mail.ne.jp/","/100100.co.jp/","/mailkun.com/","/curio-city.com/","/teamgear.net/","/24h.co.jp/","/gariya.net/","/pub.ne.jp/","/jmail.co.jp/","/kigaru.zzn.com/","/goomail.com/","/iloveyou-jp.com/","/wbs-club.ne.jp/","/otegami.com/","/piyomail.com/","/iat.ne.jp/","/aol.com/","/tok2.com/","/kobe-city.com/","/xmail.to/","/club.wonder.ne.jp/","/pub.to/","/csc.ne.jp/","/club.ne.jp/","/mcn.ne.jp/","/postpet.co.jp/","/manbow.com/","/ijk.com/","/drive.co.jp/","/yagi.net/","/pospe.jp.prg/","/estyle.ne.jp/","/eastmail.com/","/shagami.com/","/voo.to/","/julex.to/","/yi-web.com/","/mailfriend.net/","/koei.nu/","/goo.jp/","/kobej.zzn.com/","/pc_run.zzn.com/","/fact-mail.com/","/walkerplus.com/","/keyakiclub.net/","/yesyes.jp/","/fubako.com/","/meritmail.net/","/vjp.jp/","/melmel.tv/","/ultrapostman.com/","/uymail.com/","/glaystyle.net/","/hsjp.net/","/1kw.jp/","/gooo.jp/","/lunashine.net/","/aamail.jp/","/dbzmail.com/","/doramail.com/","/astroboymail.com/","/saku2.com/","/kyouin.com/","/Netidol.jp/","/csc.jp/","/kanagawa.to/","/mukae.com/","/anet.ne.jp/","/@kagi.be/","/@nagi.be/","/@honeys.be/","/@mbox.re/","/@kbox.li/","/@popn.be/","/@risu.be/","/@kksm.be/","/@usako.net/","/@eay.jp/","/@via.tokyo.jp/","/@ichigo.me/","/@choco.la/","/@cream.pink/","/@merry.pink/","/@neko2.net/","/@fuwamofu.com/","/@ruru.be/","/@macr2.com/","/@f5.si/","/@ahk.jp/","/@svk.jp/","/@tensi.org/","/@1timl.com/","/@gomen-da.com/","/@instance-email.com/","/@yopmail.com/","/@sharklasers.com/","/@guerrillamail/","/@grr.la/","/@guerrillamailblock/","/@pokemail.net/","/@spam4.me/","/@mt2015.com/","/@mt2014/","/@trashymail.com/","/@0box.eu/","/@contbay.com/","/@damnthespam.com/","/@kurzepost.de/","/@objectmail.com/","/@trashmail.io/","/@trashmail.me/","/@trashmail.net/","/@wegwerfmail.de/","/@wegwerfmail.net/","/@wegwerfmail.org/"];
						ary.forEach(function(val){
							reg = new RegExp(val);
							if(reg.test(value)){
								return false;
							}else{
								return true;
							};
						});
};

$("#form-comment").validate({
rules: {
      email:{
        required: true,
        freemail: true,
        }
      },
});
</script>
