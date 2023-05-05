function result(){
    var nom = document.getElementById("nombre").value;
    var ape = document.getElementById("ap").value;
    var ame = document.getElementById("am").value;
    var año = document.getElementById("añ").value;
    var mes = document.getElementById("mn").value;
    var dia = document.getElementById("dn").value;

    var ext1 = nom.charAt("0");
    var ext2 = ape.substring("0", "2");
    var ext3 = ame.charAt("0");
    var ext4 = año.substring("2", "4");
    var ext5 = mes.substring("0", "2");
    var ext6 = dia.substring("0", "2");

    var res = ext1 + ext2 + ext3 + ext4 + ext5 + ext6;
    var mayus = res.toUpperCase();

    document.getElementById("resultado").value=mayus;
}