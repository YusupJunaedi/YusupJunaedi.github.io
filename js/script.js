//event pada saat link di klik
$('.page-scroll').on('click',newfunction(e){

    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen bersangkutan
    var elemenTujuan= $(tujuan);

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    });

    e.preventDefault();
    
});