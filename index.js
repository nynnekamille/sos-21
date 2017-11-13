$(window).on("load", startHistorien);
$("#eva_container").addClass("startpos_eva_container");
$("#tjek_telefon").hide();
/// START ///
function startHistorien() {
    console.log("startHistorien");
    $("#vingebask_sound")[0].play();
    $("#fugl_container").removeClass("fugl_start_pos");
    $("#fugl_container").addClass("fugl_flyver");
    $("#fugl_sprite").addClass("fugl_flyvecycle");
    $("#startknap").hide();
    $("#fugl_container").on("animationend", fuglenErInde);
}

function fuglenErInde() {
    $("#startknap").show();
    $("#startknap").on("click", eva_ind);
}

function eva_ind() {
    console.log("eva_ind");
    $("#startknap").off("click", eva_ind);
    $("#startknap").hide();
    $("#eva_container").addClass("eva_container_kommer_ind");
    $("#eva_walkcycle").addClass("eva_walkcycle_10frames");
    $("#eva_container").css("animation-play-state", "running");
    $("#eva_container").on("animationend", eva_drejer);
}

function eva_drejer() {
    console.log("Eva kigger");
    $("#eva_container").removeClass("startpos_eva_container");
    $("#eva_container").removeClass("eva_container_kommer_ind");
    $("#eva_container").addClass("kigpos_eva_container");
    $("#eva_walkcycle").removeClass("eva_walkcycle_10frames");
    $("#eva_container").addClass("eva_drejer");
    $("#eva_walkcycle").addClass("eva_kig_cycle");
    $("#eva_container").on("animationend", sms_lyd);
}

function sms_lyd() {
    console.log("sms_lyd");
    $("#sms_sound")[0].play();
    $("#tjek_telefon").show("slow");
    $("#tjek_telefon").on("click", start_zoomind)
}

function start_zoomind() {
    $("#tjek_telefon").hide();
    $("#scene").addClass("zoomind");
}