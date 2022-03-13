// Localizejs Translation Code
//LazyLoad.js(['https://global.localizecdn.com/localize.js'], function () {
//  !function (a) { if (!a.Localize) { a.Localize = {}; for (var e = ["translate", "untranslate", "phrase", "initialize", "translatePage", "setLanguage", "getLanguage", "detectLanguage", "getAvailableLanguages", "untranslatePage", "bootstrap", "prefetch", "on", "off"], t = 0; t < e.length; t++)a.Localize[e[t]] = function () { } } }(window);

//  Localize.initialize({
//    key: 'OoHqlrh1RISgX',
//    rememberLanguage: true,
//    saveNewPhrases: false
//  });
  /*Localize.initialize({
    key: 'OoHqlrh1RISgX',
    rememberLanguage: true
  });*/
//});

// Sweet alert JavaScript Library load
LazyLoad.js(src = "https://cdn.jsdelivr.net/npm/sweetalert2@8");

//  Global Variables
//var app_id = Knack.app.id;
//var user = Knack.getUserToken();

const versionNbr = '1.01';
let debug_on = 1;
const test_mode_on = 1;
var admin_testing = "No";
//var current_page = "";

var regex = /.*\- \$(.*)/;


function log_console(data) {
  if (debug_on == 1) {
    console.log(data);
  }
}

function log_alert(data) {
  if (debug_on == 1) {
    alert(data);
  }
}

const admin_scene = 'scene_39';
const admin_menu_view = 'view_923';
//const admin_menu_view = 'view_63'; Replaced due to Knack corruption issue
const lawyer_table_view = 'view_1286';
const lawyer_table_retired_view = 'view_1265';

const add_lawyer_menu_view = 'view_1288';
const add_retired_lawyer_menu_view = 'view_1266';

const max_liability_reached_view = 'view_449';

const years_view = 'view_728';

const province_view = 'view_729';

const ls_view = 'view_731';

const add_law_firm_view = 'view_1006';
const user_add_law_firm_view = 'view_984';

//const sacyber_firm_information_view = 'view_1400';

//const app_global_scene = 'scene_111'; Renumbered due to Knack corruption
//const app_global_view = 'view_221'; Renumbered due to Knack corruption
const app_global_scene = 'scene_389';
const app_global_view = 'view_942';

//const all_applications_scene = 'scene_68'; Renumbered due to Knack corruption
const all_applications_scene = 'scene_414';
//const all_applications_view = 'view_121'; Renumbered due to Knack corruption
const all_applications_view = 'view_1007';
//const all_applications_api_view = 'view_846'; Renumbered due to Knack corruption
const all_applications_api_view = 'view_1066';

const law_firms_view = 'view_591';
const fields_of_practice_view = 'view_1292';

const members_of_firm_staff_scene = 'scene_6';
const create_application_scene = 'scene_510';
const identification_view = 'view_1243';
const members_of_firm_staff_view = 'view_1291';
const retired_members_of_firm_staff_view = 'view_1268';
const retired_members_of_firm_staff_scene = 'scene_312';
const declaration_invoices_scene = 'scene_318';
const retired_declaration_invoices_scene = 'scene_335';
const cybersa_declaration_invoices_scene = 'scene_363';
const application_cybersa_declaration_invoices_scene = 'scene_367';

const update_claim_scene = 'scene_174';
const update_claim_view = 'view_365';

const additional_info_scene = 'scene_538';
const additional_info_view = 'view_1325';
const retired_additional_info_view = 'view_1282';
const retired_additional_info_scene = 'scene_526';

const payment_email_view = 'view_765';
const payment_admin_testing_email_view = 'view_854';
const add_application_year_view = 'view_751';

const sacyber_identification_scene = 'scene_572';
const sacyber_identification_view = 'view_1400';

// API Module
const api_data_scene = "scene_201";
const api_liability_rates_view = "view_448";

const dashboard_initial_scene = 'scene_1';
const application_view = 'view_552';
const application_update_redirect = '#home/create-application/';

const api_application_data_scene = 'scene_316';

const api_certificate_view = 'view_732';
const api_invoice_view = 'view_733';
const api_applications_view = 'view_725';
const api_global_data_view = 'view_730';

const api_user_view = 'view_860';
const api_firm_view = 'view_861';

const declaration_view = 'view_1344';
const declaration2_view = 'view_1330';
const retired_declaration_view = 'view_1285';

const add_endorsement_view = 'view_711';
const payment_cc_view = 'view_717';
const payment_cc_admin_testing_view = 'view_718';
const payment_scene = 'scene_311';
const invoice_details_view = 'view_714';
const payment_admin_testing_scene = 'scene_357';

const coverage_desired_scene = 'scene_537';

const coverage_desired_view = 'view_1299';
const retired_coverage_desired_view = 'view_1270';
const coverage_desired_certificate_view = 'view_1333';
const coverage_desired_invoice_view = 'view_1334';

// Law Firm Object
const law_firm_admin_testing_field = 'field_1391';
const law_firm_firm_name_field = 'field_1239';

// Liability Rates Object
const liability_rates_new_application_field = 'field_892';
const liability_rates_premium_field_raw = 'field_110_raw';
const liability_rates_new_field = 'field_892';
const liability_rates_year_conn_field = 'field_1362'; //Done
const liability_rates_type_field = 'field_1361'; //Done
const liability_rate_new_application_field = 'field_1009';
const liability_rates_sage_code_field = 'field_183';
const liability_rates_sage_discount_code_field = 'field_194';
const liability_prorate_field = 'field_1611';

// Lawyers Object
const lawyers_name_field = 'field_38';

//  Application Object 
const application_liability_rate_conn_field = 'field_113';
const application_liability_rate_conn_field_raw = 'field_113_raw';
const application_cyber_coverage_field = 'field_115';
const application_cyber_firewall_field = 'field_116';
const application_cyber_backup_field = 'field_117';
const application_cyber_virus_field = 'field_118';
const application_cyber_good_field = 'field_1624';
const application_prov_conn_field = 'field_132';
const application_prov_conn_field_raw = 'field_132_raw';
const application_new_application_field = 'field_999';
const application_year_conn_field = 'field_1244'; //Done
const application_year_conn_field_raw = 'field_1244_raw'; //Done
const application_max_liability_field = 'field_1389'; //Done
const application_max_liability_field_raw = 'field_1389_raw'; //Done
const application_invcreated_field = 'field_1386'; //Done
const application_invcreated_field_raw = 'field_1386_raw'; //Done
const application_vepcount_field = 'field_1387'; //Done
const application_vepcount_field_raw = 'field_1387_raw'; //Done
const application_cybercount_field = 'field_1388'; //Done
const application_firm_type_field = 'field_24';
const application_firm_name_field = 'field_21';
const application_inactive_lawyer_field = 'field_1355'; //Done
const application_firmid_field = 'field_386';
const application_ls_conn_field = 'field_172';
const application_nbr_retired_field = 'field_1012';
const application_coverage_other_lawyers = 'field_36';
const application_firm_conn_field = 'field_1245';
const application_firm_conn_field_raw = 'field_1245_raw';
const application_approved_field = 'field_150';
const application_approved_date_field = 'field_280';
const application_lawyer_count_field = 'field_1401';
const application_admin_testing_field = 'field_1385';
const application_vep_certificate_lawyer_count_field = 'field_1567';
const application_count_of_lawyers_field = 'field_417';
const application_cybersa_rate_conn_field = 'field_1587';
const application_cybersa_rate_conn_field_raw = 'field_1587_raw';
const application_cybersa_good_field = 'field_1603';
const application_ce_option_field = 'field_1588';
const application_ce_good_field = 'field_1604';
const application_cyberce_rate_conn_field = 'field_1593';
const application_cyberce_rate_conn_field_raw = 'field_1593_raw';
const application_cybersa_phishing_field = 'field_1582';
const application_cybersa_mfa_field = 'field_1578';
const application_cybersa_claim_declaration_field = 'field_1586';
const application_cybersa_backup_field = 'field_1574';
const application_cybersa_revenue_threshold_field = 'field_1584';
const application_vep_selected_field = 'field_1572';
const application_cybersa_selected_field = 'field_1573';
const application_cybersa_submitted_field = 'field_1596';
const application_vep_invoice_field = 'field_1615';
const application_sacyber_invoice_field = 'field_1616';
const application_submitted_field = 'field_149';

// Certificate Object
const cert_cert_type_field = 'field_1282'; //Done
const cert_cert_type_field_raw = 'field_1282_raw'; //Done
const cert_prov_tax_rate_field = 'field_1306'; //Done
const cert_prov_tax_rate_field_raw = 'field_1306_raw'; //Done
const cert_retired_lawyers_discount_rate_field = 'field_1299'; //Done
const cert_retired_lawyers_discount_rate_field_raw = 'field_1299_raw'; //Done
const cert_retired_lawyers_count = 'field_1298';
const cert_year_connect_field = 'field_1286'; //Done
const cert_year_connect_field_raw = 'field_1286_raw'; //Done
const cert_prov_connect_field = 'field_1287'; //Done
const cert_prov_connect_field_raw = 'field_1287_raw'; //Done
//const cert_commission_rate_field = 'field_1291';
//const cert_commission_rate_field_raw = 'field_1291_raw';
const cert_application_connect_field = 'field_1284'; //Done
const cert_application_connect_field_raw = 'field_1284_raw'; //Done
const cert_inv_connect_field = 'field_1294'; //Done
const cert_inv_connect_field_raw = 'field_1294_raw'; //Done
const cert_liability_rate_conn_field = 'field_1301'; //Done
const cert_liability_rate_conn_field_raw = 'field_1301_raw'; //Done
const cert_current_rate_field = 'field_1302'; //Done
const cert_current_rate_field_raw = 'field_1302_raw'; //Done
const cert_previous_rate_field = 'field_1303'; //Done
const cert_credit_rate_field = 'field_1308'; //Done
const cert_credit_rate_field_raw = 'field_1308_raw'; //Done
const cert_firm_name_change_new_field = 'field_1323'; //Done
const cert_firm_name_change_transfer_lawyers_field = 'field_1326'; //Done
const cert_sage_code_field = 'field_1317';
const cert_sage_discount_code_field = 'field_1318';
const cert_transfering_lawyers_field = 'field_1326';
const cert_admin_testing_field = 'field_1397';
const cert_approved_field = 'field_1332';
const cert_approved_date_field = 'field_1333';
const cert_lawyers_covered_field = 'field_1297';
const cert_application_date_field = 'field_1285';
const cert_date_submitted_field = 'field_1467';
const cert_firm_id_field = 'field_1296';
const cert_cyber_firewall_field = 'field_1329';
const cert_cyber_backup_field = 'field_1330';
const cert_cyber_virus_field = 'field_1331';
const cert_prorate_field = 'field_1609';

// Province Table
const prov_tax_rate_field = 'field_129';
const prov_tax_rate_field_raw = 'field_129_raw';
const prov_tax_type_field = 'field_131';
const prov_short_code_field = 'field_412';
const prov_name_field = 'field_128';

// Year Table
const year_retired_lawyers_cyber_discount_rate_field = 'field_1269'; //Done
const year_retired_lawyers_cyber_discount_rate_field_raw = 'field_1269_raw'; //Done
const year_retired_lawyers_discount_rate_field = 'field_1268';  //Done
const year_retired_lawyers_discount_rate_field_raw = 'field_1268_raw'; //Done
const year_credit_rate_field = 'field_1266';  //Done
const year_credit_rate_field_raw = 'field_1266_raw'; //Done
//const year_commission_rate_field = 'field_1333';
//const year_commission_rate_field_raw = 'field_1333_raw';
const year_next_invnbr_field = 'field_1271'; //Done
const year_next_invnbr_field_raw = 'field_1271_raw'; //Done
const year_year_field = 'field_1221';

// Invoice Table
const inv_application_connect_field = 'field_1274';
const inv_application_connect_field_raw = 'field_1274_raw';
const inv_year_connect_field = 'field_1280';
const inv_year_connect_field_raw = 'field_1280_raw';
const inv_invnbr_field = 'field_1273';
const inv_invnbr_field_raw = 'field_1273_raw';
const inv_prov_taxtype_field = 'field_1349';
const inv_payment_connect_field = 'field_1383';
const inv_admin_testing_field = 'field_1396';
const inv_firm_id_field = 'field_1279';
const inv_app_type_field = 'field_1621';

const cc_payment_view = 'view_457';
//var cc_payment_view_submit = 'view_453';
const cc_payment_firm_name = 'field_21';
const cc_payment_amount = 'field_143';
const cc_payment_amount_raw = 'field_143_raw';
const cc_payment_customer = 'field_191';
const cc_invoiced_paid = 'field_254';
const cc_admin_payment_view = "view_458";
const cc_details_payment_view = "view_459";

// App Global Data
const app_global_data_firmid_field = "field_388";
const app_global_data_firmid_field_raw = "field_388_raw";

// Firm Data
const firm_firmid_field = 'field_1240'; //Done

// Law Society Data
const ls_name_field = 'field_170';
const ls_short_code_field = 'field_1365'; //Done

// Claims Data
const claims_status_field = 'field_531';
const claims_ls_res_indemnity_field = 'field_948';
const claims_ls_res_adjusting_field = 'field_949';
const claims_ls_res_expert_legals_field = 'field_950';
const claims_ls_res_legal_field = 'field_951';
const claims_ls_res_other_field = 'field_952';
const claims_ls_res_recov_reins_field = 'field_953';
const claims_ls_res_recov_other_field = 'field_954';
const claims_ls_res_deductible_field = 'field_956';
const claims_clia_res_indemnity_field = 'field_709';
const claims_clia_res_indemnity_field_raw = 'field_709_raw';
const claims_clia_res_adjusting_field = 'field_965';
const claims_clia_res_experts_legal_field = 'field_966';
const claims_clia_res_legal_field = 'field_711';
const claims_clia_res_legal_field_raw = 'field_711_raw';
const claims_clia_res_other_field = 'field_967';
const claims_clia_res_recov_reins_field = 'field_968';
const claims_clia_res_recov_other_field = 'field_969';
const claims_clia_res_deductible_field = 'field_926';
const claims_excess_res_indemnity_field = 'field_985';
const claims_excess_res_adjusting_field = 'field_986';
const claims_excess_res_experts_legal_field = 'field_987';
const claims_excess_res_legal_field = 'field_988';
const claims_excess_res_other_field = 'field_989';
const claims_excess_res_recov_reins_field = 'field_990';
const claims_excess_res_recov_other_field = 'field_991';
const claims_excess_res_deductible_field = 'field_993';

//Users Data
const user_email_field = 'field_12';
const user_firm_field = 'field_1252';
const user_firm_field_raw = 'field_1252_raw';

//Quote Data
const quote_view = 'view_813';

//Quote Request Data
const quote_request_view = 'view_818';
const quote_firm_name_field = 'field_1477';

// Add Lawyers Invoice View from button to add Lawysers in All Applications Detail View
//const add_lawyers_invoice_view = 'view_845';
const add_lawyers_invoice_view = 'view_1051';

const closed_test = [claims_ls_res_indemnity_field, claims_ls_res_adjusting_field, claims_ls_res_expert_legals_field, claims_ls_res_legal_field, claims_ls_res_other_field, claims_ls_res_recov_reins_field, claims_ls_res_recov_other_field, claims_ls_res_deductible_field, claims_clia_res_adjusting_field, claims_clia_res_experts_legal_field, claims_clia_res_other_field, claims_clia_res_recov_reins_field, claims_clia_res_recov_other_field, claims_clia_res_deductible_field, claims_excess_res_indemnity_field, claims_excess_res_adjusting_field, claims_excess_res_experts_legal_field, claims_excess_res_legal_field, claims_excess_res_other_field, claims_excess_res_recov_reins_field, claims_excess_res_deductible_field, claims_excess_res_recov_other_field,];
const closed_test_num = [claims_clia_res_indemnity_field_raw, claims_clia_res_legal_field_raw];
const msgtext = ["LS Reserve Indemnity", "LS Reserve Adjusting", "LS Reserve Expert_Legal", "LS Reserve Legal", "LS Reserve Other", "LS Reserve Recov Reins", "LS Reserve Recov Other", "LS Reserve Deductible", "CLIA Reserve Adjusting", "CLIA Reserve Expert_Legal", "CLIA Reserve Other", "CLIA Reserve Recov Reins", "CLIA Reserve Recov Other", "CLIA Reserve Deductible", "Excess Reserve Indemnity", "Excess Reserve Adjusting", "Excess Reserve Expert_Legal", "Excess Reserve Legal", "Excess Reserve Other", "Excess Reserve Recov Reins", "Excess Reserve Recov Other", "Excess Reserve Deductible"];
const msgtext_num = ["CLIA Reserve Indemnity", "CLIA Reserve Legal"];
//const app_global_data_invno_field = "field_389";
//const app_global_data_invno_field_raw = "field_389_raw";

var max_liability_var = 0;

$(document).on('knack-scene-render.any', function (event, scene) {
  //console.log('localStorage.admin_testing: '+localStorage.admin_testing);
  if (localStorage.admin_testing == 'Yes') {
    debug_on = 1;
  }
  //$('#knack-dist_1').append("<ipd='versoinMsg'>V: "+versionNbr+"&nbsp;&nbsp;</p>");
  localStorage.setItem("prevPage", localStorage.currPage);
  //current_page = window.location.href;
  localStorage.setItem("currPage", window.location.href);
  //log_console('current_page: ' +current_page);
  log_console('prevPage: ' + localStorage.prevPage + ' currPage: ' + localStorage.currPage);
})

// Scroll to top of Error message to show.
$(document).on('knack-view-render.any', function (event, view, data) {
  $("button.kn-button.is-primary").on("click", function () {
    //var info = $("button.kn-button.is-primary")[0].parentNode.parentNode.parentNode.parentNode.parentNode;
    //log_console(info);
    //log_console(info[0].parentNode.parentNode);
    setTimeout(function () {
      if ($(".kn-message").is(":visible")) {
        var myEle = document.getElementById('knack-body');
        if (myEle == null) {
          //var info1 = $(".kn-form-confirmation");
          //log_console(info1);
          $('html, body').animate({
            scrollTop: $("#wsite-content").offset().top
            //scrollTop: $(".kn-form-confirmation")[0].offset().top
            //scrollTop: $(info).offset().top
          }, 500);
        } else {
          $('html, body').animate({
            scrollTop: $("#knack-body").offset().top
          }, 500);
        }
      }
      else {
        notVisible = 1;
      }
    }, 500);
  });
});

// Hide Firm Information View until VEP submission validated
/*const sacyber_firm_information_scene = 'scene_572';
$(document).on('knack-scene-render.'+sacyber_firm_information_scene, function(event, scene) {
  log_console('Scene: sacyber_firm_information_scene')
  var y = document.getElementById(sacyber_firm_information_view);
  log_console(y);
  y.style.display = "none";
});*/
// Skip SACyber Firm Inforamtion screen if VEP Application already submitted.
/*$(document).on('knack-view-render.'+sacyber_firm_information_view, function(event, view, data) {
  //debug_on = 1;
  Knack.showSpinner();
  log_console('View: sacyber_firm_information_view '+view.key);
  log_console(data);
  if ( data[application_submitted_field] == "Yes") {
    log_console('matched');
    var pagebutton = document.getElementsByClassName('kn-button');
    log_console(pagebutton);
    Knack.hideSpinner();
    pagebutton[0].click();
  } else {
    var y = document.getElementById(sacyber_firm_information_view);
    y.style.display = "block";
  }
  Knack.hideSpinner();
});*/
// Hide Incomplete Application Table when there are no applications.
const incomplete_application_view = 'view_1236';
$(document).on('knack-view-render.' + incomplete_application_view, function (event, view, data) {
  //debug_on = 1;
  log_console('View: incomplete_application_selection_view ' + view.key);
  if (data.length == 0) {
    var y = document.getElementById(incomplete_application_view);
    y.style.display = "none";
  }
});

const dashboard_application_selection_view = 'view_902';
$(document).on('knack-view-render.' + dashboard_application_selection_view, function (event, view, data) {
  //debug_on = 1;
  log_console('View: dashboard_application_selection_view ' + view.key);
  log_console(data);
  let z = document.getElementsByClassName('kn-table-table');
  log_console(z[0].rows);
  for (j = 0; j < z[0].rows.length; j++) {
    log_console('working on row: ' + j);
    if (j == 0 || (j > 0 && data.length > 0)) {
      z[0].rows[j].cells[2].style.display = "none";
      z[0].rows[j].cells[3].style.display = "none";
    }
    if (j > 0 && data.length > 0) {
      log_console(data[j - 1][application_submitted_field]);
      //if (data[j-1]['field_149'] == 'No' && data[j-1]['field_1596'] == 'No') {
      //  if (data[j-1]['field_1244_raw'][0].identifier > 2020) {
      //    z[0].rows[j].cells[1].innerHTML = z[0].rows[j].cells[1].innerHTML.replace("Application","Excess & Stand Alone Cyber Applications");
      //  } else {
      //    z[0].rows[j].cells[1].innerHTML = z[0].rows[j].cells[1].innerHTML.replace("Application","Excess Application");
      //  }
      //} else if (data[j-1]['field_149'] == 'No') {
      if (data[j - 1][application_submitted_field] == 'No') {
        z[0].rows[j].cells[1].innerHTML = z[0].rows[j].cells[1].innerHTML.replace("Application", "Excess Application");
        //} else if (data[j-1]['field_1596'] == 'No') {
        //  if (data[j-1]['field_1244_raw'][0].identifier > 2020) {
        //log_console(data[j-1]['field_1244_raw'][0].identifier);
        //    z[0].rows[j].cells[1].innerHTML = z[0].rows[j].cells[1].innerHTML.replace("Application","Stand Alone Cyber Application");
      } else {
        z[0].rows[j].cells[1].innerHTML = '';
      }
      //}
    }
  }
});
//$(document).on('knack-scene-render.' + declaration_invoices_scene + ' knack-scene-render.' + retired_declaration_invoices_scene + ' knack-scene-render.' + cybersa_declaration_invoices_scene + ' knack-scene-render.' + application_cybersa_declaration_invoices_scene, function (event, scene) {
//$(document).on('knack-scene-render.' + declaration_invoices_scene + ' knack-scene-render.' + retired_declaration_invoices_scene + ' knack-scene-render.' + cybersa_declaration_invoices_scene, function (event, scene) {
//  log_console(scene.scene_id);
//  invRedirect(scene.scene_id,scene.key);
//});
/*$(document).on('knack-scene-render.' + retired_declaration_invoices_scene, function (event, scene) {
  log_console('Scene: retired_declaration_invoices_scene'+scene.id);
  log_console(scene.scene_id);
  invRedirect(scene.scene_id,scene.key);
});*/

async function invRedirect(recId, viewSceneId) {
  log_console('Function: invRedirect');
  log_console('viewSceneId: ' + viewSceneId);
  Knack.showSpinner();
  var inv_paused = 'No';
  var vep_search_val = '?view-application-details2_id=' + recId + '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"VEP"}]';

  //if (viewSceneId == application_cybersa_declaration_invoices_scene) {
  if (viewSceneId == application_sacyber_declaration_view) {
    const appResponseData = await getApplicationRecord(recId);
    log_console(appResponseData);
    if (appResponseData[application_vep_invoice_field] != appResponseData[application_sacyber_invoice_field]) {
      if (appResponseData[application_excess_paused_field] == 'Yes') {
        vep_search_val = '?view-application-details2_id=' + recId + '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"CyberSA"}]';
      }
    }
  } else {
    //const vep_search_val = '?filters={"match":"and","rules":[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"VEP"},{"field":"' + cert_application_connect_field + '", "operator":"is", "value":"' + scene.scene_id + '"}]}';
    if (viewSceneId == cybersa_declaration_invoices_scene || viewSceneId == sacyber_cefailed_view) {
      vep_search_val = '?view-application-details2_id=' + recId + '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"CyberSA"}]';
    }
  }
  const certResponsedata = await getCertificatebyQuery(vep_search_val);
  log_console(certResponsedata);
  var redirect_url = '#law-offices-details/view-application-details/' + recId + '/invoice-details2/' + certResponsedata.records[0][cert_inv_connect_field_raw][0].id;
  const invResponseData = await getInvoiceRecord(recId);
  log_console(invResponseData);
  for (j = 0; j < invResponseData.total_records; j++) {
    log_console('inv: ' + invResponseData.records[j].id + ' certInv: ' + certResponsedata.records[0][cert_inv_connect_field_raw][0].id)
    if (invResponseData.records[j].id == certResponsedata.records[0][cert_inv_connect_field_raw][0].id) {
      if (invResponseData.records[j][inv_invoice_paused_field] == 'Yes') {
        inv_paused = 'Yes';
        redirect_url = '#law-offices-details/view-application-details/' + recId;
      }
    }
  }

  log_console('Cert Admin Testing setting: ' + certResponsedata.records[0][cert_admin_testing_field]);
  if ((certResponsedata.records[0][cert_admin_testing_field] == "Yes" || test_mode_on == 1) && inv_paused == 'No') {
    //if (certResponsedata.records[0][cert_admin_testing_field] == "Yes") {
    log_console('In Cert Admin Yes Redirect setting');
    redirect_url = '#law-offices-details/view-application-details/' + recId + '/admin-testing-invoice-details/' + certResponsedata.records[0][cert_inv_connect_field_raw][0].id;
  }
  log_console('redirect_url: ' + redirect_url);
  Knack.hideSpinner();
  window.location.replace(redirect_url);
}

/*async function invRedirect(scene) {
  Knack.showSpinner();
  log_console('Function: invRedirect');
  //const vep_search_val = '?filters={"match":"and","rules":[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"VEP"},{"field":"' + cert_application_connect_field + '", "operator":"is", "value":"' + scene.scene_id + '"}]}';
  var vep_search_val = '?view-application-details2_id=' + scene.scene_id + '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"VEP"}]';
  if (scene.key == cybersa_declaration_invoices_scene || scene.key == application_cybersa_declaration_invoices_scene) {
    vep_search_val = '?view-application-details2_id=' + scene.scene_id + '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"CyberSA"}]';
  }
  const certResponsedata = await getCertificatebyQuery(vep_search_val);
  log_console(certResponsedata);
  var redirect_url = '#law-offices-details/view-application-details/' + scene.scene_id + '/invoice-details2/' + certResponsedata.records[0][cert_inv_connect_field_raw][0].id;
  log_console('Cert Admin Testing setting: '+certResponsedata.records[0][cert_admin_testing_field]);
  if (certResponsedata.records[0][cert_admin_testing_field] == "Yes" || test_mode_on == 1) {
  //if (certResponsedata.records[0][cert_admin_testing_field] == "Yes") {
    log_console('In Cert Admin Yes Redirect setting');
    redirect_url = '#law-offices-details/view-application-details/' + scene.scene_id + '/admin-testing-invoice-details/' + certResponsedata.records[0][cert_inv_connect_field_raw][0].id;
  }
  log_console('redirect_url: ' + redirect_url);
  Knack.hideSpinner();
  window.location.replace(redirect_url);
}*/

// Javascript function to check total Field of Practice is 100%
$(document).on('knack-view-render.' + fields_of_practice_view, function (event, view, data) {
  log_console('View: fields_of_practice_view ' + view.key)
  $("#" + fields_of_practice_view + " .kn-button").on("click", function () {
    if (data[application_firm_type_field] != "Retired") {
      if ($("#field_153").val() != "100.0000") {
        Swal.fire({
          html: 'Percentage total must equal 100%. Current value: <var>' + Number($("#field_153").val()) + '</var>%',
          confirmButtonColor: '#af5149',
          confirmButtonAriaLabel: 'Ok'
        })
        //alert ("Percentage total must equal 100%. Current value: " + Number($("#field_153").val()) + "%");
        return false;
      }
    }
  });
});

var lawyer_view_displayed = '';
var retired_lawyer = 'No';
var redirect_retired_lawyer_url = '';

$(document).on('knack-view-render.' + retired_members_of_firm_staff_view, function (event, view, data) {
  log_console('View: retired_members_of_firm_staff_view ' + view.key);
  log_console(view);
  //if (typeof data[application_admin_testing_field] === 'undefined') {
  //  log_console('No admin_testing field');
  //} else {
  //  admin_testing = data[application_admin_testing_field];
  //}
  //log_console('admin_testing: '+admin_testing);
  $("#" + retired_members_of_firm_staff_view + " .kn-button").on("click", function () {
    const data_view_records = Knack.models[lawyer_table_retired_view].data.toJSON();
    //log_console('lawyer_vew_displayed: ' + lawyer_view_displayed);
    log_console(data_view_records);
    if (data_view_records.length == 0) {
      Swal.fire({
        text: 'Need at least one Retired Lawyer added.',
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
      return false;
    }
    //redirect_retired_lawyer_url = '#home/retired-members-of-the-firm/' + data.id + '/past-insurance--loss-history/' + data.id + '/';
    //window.location.replace(redirect_retired_lawyer_url);
  });
});

$(document).on('knack-record-update.' + retired_members_of_firm_staff_view, function (event, view, record) {
  log_console('Record Update: retired_members_of_firm_staff_view ' + view.key);
  log_console(record);
  Knack.showSpinner();
  updateRetiredLawyerCount(record);
  Knack.hideSpinner();
});

async function updateRetiredLawyerCount(record) {
  log_console('Function: updateRetiredLawyerCount');
  //const vep_search_val = '?view-application-details2_id=' + record.id;
  const vep_search_val = '?view-application-details2_id=' + record.id + '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"VEP"}]';
  const certResponseData = await getCertificatebyQuery(vep_search_val);
  log_console(certResponseData);
  for (j = 0; j < certResponseData.total_records; j++) {
    var data = {};
    log_console('Update Retired Lawyer Count on Certs');
    data[cert_retired_lawyers_count] = record[application_nbr_retired_field];
    updateCertificateRecordTest(certResponseData.records[j].id, data);
  }
}

$(document).on('knack-view-render.' + members_of_firm_staff_view, function (event, view, data) {
  log_console('View: members_of_firm_staff_view ' + view.key);
  //if (typeof data[application_admin_testing_field] === 'undefined') {
  //  log_console('No admin_testing field');
  //} else {
  //  admin_testing = data[application_admin_testing_field];
  //}
  //log_console('admin_testing: '+admin_testing);
  $("#kn-input-" + application_coverage_other_lawyers).on("change", function () {
    log_console('In coverage change');
    log_console($("#kn-input-" + application_coverage_other_lawyers + " :checked").val());
    if ($("#kn-input-" + application_coverage_other_lawyers + " :checked").val() == 'Yes') {
      Swal.fire({
        text: 'Contract Lawyers are Required to be added to the list of Covered Lawyers',
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
    }
  });

  $("#" + members_of_firm_staff_view + " .kn-button").on("click", function () {
    const data_view_records = Knack.models[lawyer_view_displayed].data.toJSON();
    log_console('lawyer_vew_displayed: ' + lawyer_view_displayed);
    log_console(data_view_records);
    if (data_view_records.length == 0) {
      log_console('in need lawyer');
      Swal.fire({
        text: 'Need at least one Lawyer in Firm',
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
      return false;
    }
  });
});

/*$(document).on('knack-view-render.' + additional_info_view, function (event, view, data) {
  log_console('View: additinal_info_view: '+view.key);
  if (typeof data[application_admin_testing_field] === 'undefined') {
    log_console('No admin_testing field');
  } else {
    admin_testing = data[application_admin_testing_field];
  }
  log_console('admin_testing: '+admin_testing);
});*/

$(document).on('knack-record-update.' + additional_info_view + ' knack-record-update.' + retired_additional_info_view, function (event, view, record) {
  log_console('Record Update: additional_info_view ' + view.key);
  log_console(record);
  Knack.showSpinner();
  localStorage.application_excess_paused_field = record[application_excess_paused_field];
  //if (record[application_excess_paused_field] == 'Yes') {
  //  var invData = {};
  //  invData[inv_invoice_paused_field] = 'Yes';
  //  updateInvoiceRecord(localStorage.application_vep_invoice_field, invData);
  //}
  checkCertRecForInvConnection(record.id);
  checkCertRecForMissingData(record);
  Knack.hideSpinner();
});

async function checkCertRecForMissingData(record) {
  log_console('Function: checkCertRecForMissingData');
  //const search_val = '?view-application-details2_id=' + knackId + '&filters=[{"field":"' + cert_inv_connect_field + '", "operator":"is blank"}]';
  const search_val = '?view-application-details2_id=' + record.id;
  checkCertRecs = await getCertificatebyQuery(search_val);
  for (j = 0; j < checkCertRecs.total_records; j++) {
    log_console(checkCertRecs.records[j]);
    var update = 0;
    var data = {};
    if (checkCertRecs.records[j][cert_lawyers_covered_field] == "") {
      data[cert_lawyers_covered_field] = record[application_lawyer_count_field];
      update = 1;
    }
    if (checkCertRecs.records[j][cert_cert_type_field] == "VEP") {
      if (checkCertRecs.records[j][cert_liability_rate_conn_field] != "") {
        if (checkCertRecs.records[j][cert_liability_rate_conn_field_raw][0].id != record[application_liability_rate_conn_field_raw][0].id) {
          data[cert_liability_rate_conn_field] = [record[application_liability_rate_conn_field_raw][0].id];
          const query_url = rates_url + '/' + record[application_liability_rate_conn_field_raw][0].id;
          log_console('query_url: ' + query_url);
          const responseLiabilityData = await getKnackRecord(query_url);
          log_console('responseLiabilityData');
          log_console(responseLiabilityData);
          data[cert_prorate_field] = responseLiabilityData[liability_prorate_field];
          data[cert_current_rate_field] = responseLiabilityData[liability_rates_premium_field_raw];
          data[cert_sage_code_field] = responseLiabilityData[liability_rates_sage_code_field];
          data[cert_sage_discount_code_field] = responseLiabilityData[liability_rates_sage_discount_code_field];
          update = 1;
        }
      } else {
        data[cert_liability_rate_conn_field] = [record[application_liability_rate_conn_field_raw][0].id];
        const query_url = rates_url + '/' + record[application_liability_rate_conn_field_raw][0].id;
        log_console('query_url: ' + query_url);
        const responseLiabilityData = await getKnackRecord(query_url);
        log_console('responseLiabilityData');
        log_console(responseLiabilityData);
        data[cert_prorate_field] = responseLiabilityData[liability_prorate_field];
        data[cert_current_rate_field] = responseLiabilityData[liability_rates_premium_field_raw];
        data[cert_sage_code_field] = responseLiabilityData[liability_rates_sage_code_field];
        data[cert_sage_discount_code_field] = responseLiabilityData[liability_rates_sage_discount_code_field];
        update = 1;
      }
    }
    if (checkCertRecs.records[j][cert_cert_type_field] == "Cyber" && checkCertRecs.records[j][cert_liability_rate_conn_field] == "") {
      search_data = '?filters={"match": "and", "rules": [{"field":"' + liability_rates_year_conn_field + '", "operator":"is", "value":"' + record[application_year_conn_field_raw][0].id + '"},{"field":"' + liability_rates_type_field + '", "operator":"is", "value":"Cyber"}]}';
      const query_url = rates_url + search_data;
      log_console('query_url: ' + query_url);
      const responseLiabilityData = await getKnackRecord(query_url);
      log_console('responseLiabilityData');
      data[cert_liability_rate_conn_field] = [responseLiabilityData.records[0].id];
      data[cert_prorate_field] = responseLiabilityData.records[0][liability_prorate_field];
      data[cert_current_rate_field] = responseLiabilityData.records[0][liability_rates_premium_field_raw];
      data[cert_sage_code_field] = responseLiabilityData.records[0][liability_rates_sage_code_field];
      data[cert_sage_discount_code_field] = responseLiabilityData.records[0][liability_rates_sage_discount_code_field];
      update = 1;
    }
    if (update == 1) {
      log_console('update record with:');
      log_console(data);
      updateCertificateRecordTest(checkCertRecs.records[j].id, data);
    }
  }
}

$(document).on('knack-record-update.' + members_of_firm_staff_view, function (event, view, record) {
  log_console('Record Update: members_of_firm_staff_view ' + view.key);
  log_console(record);
  Knack.showSpinner();
  updateLawyerCount(record);
  Knack.hideSpinner();
});

async function updateLawyerCount(record) {
  log_console('Function: updateLawyerCount');
  if (record[application_vepcount_field] == 1 || record[application_cybercount_field] == 1) {
    if (record[application_vepcount_field] == 1) {
      log_console('Updating VEP Record with LawyerCount')
      //Update Province Info
      const vep_search_val = '?view-application-details2_id=' + record.id + '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"VEP"}]';
      const certResponsedata = await getCertificatebyQuery(vep_search_val);
      var data = {};
      data[cert_lawyers_covered_field] = record[application_lawyer_count_field];
      updateCertificateRecordTest(certResponsedata.records[0].id, data);
    }
    if (record[application_cybercount_field] == 1) {
      log_console('Updating Cyber Record with LawyerCount')
      //Update Province Info
      const vep_search_val = '?view-application-details2_id=' + record.id + '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"Cyber"}]';
      const certResponsedata = await getCertificatebyQuery(vep_search_val);
      var data = {};
      data[cert_lawyers_covered_field] = record[application_lawyer_count_field];
      updateCertificateRecordTest(certResponsedata.records[0].id, data);
    }
  }
}

$(document).on('knack-view-render.' + lawyer_table_view, function (event, view, data) {
  log_console('View: lawyer_table_view ' + view.key);
  lawyer_view_displayed = lawyer_table_view;
  log_console('lawyer_view_displayed: ' + lawyer_view_displayed);
})

var retired_lawyer_count = 0;
$(document).on('knack-view-render.' + lawyer_table_retired_view, function (event, view, data) {
  log_console('View: lawyer_table_retired_view ' + view.key);
  lawyer_view_displayed = lawyer_table_retired_view;
  log_console('lawyer_view_displayed: ' + lawyer_view_displayed);
  retired_lawyer_count = data.length;
  //if (data.length > 0) {
  //var y = document.getElementById(add_retired_lawyer_menu_view);
  //log_console(y);
  //y.style.display = "none";
  //var z = document.querySelector(".view_11 .view-header .kn-title");
  /*var z = document.querySelector(".view_11 .view-header h2");
  log_console(z);
  z.style.display = "none";
  var a = document.querySelector(".view_11 .kn-form-group-1 .kn-input-section_break");
  log_console(a);
  a.style.display = "none";*/
  //}
})


// Hide Add Lawyer Button
$(document).on('knack-view-render.' + add_retired_lawyer_menu_view, function (event, view, data) {
  log_console('View: add_lawyer_menu_view ' + view.key);
  //if (retired_lawyer_count > 0 && lawyer_view_displayed == lawyer_table_retired_view) {
  if (retired_lawyer_count > 0) {
    var y = document.getElementById(add_retired_lawyer_menu_view);
    log_console('y: ' + y);
    y.style.display = "none";
  }
})

const add_lawyer_view = 'view_118';
const add_retired_lawyer_view = 'view_676';
const lawyer_date_joined_firm_field = 'field_40';
const add_lawyer_scene = 'scene_531';
const add_retired_lawyer_scene = 'scene_1267';
const fields_of_practice_scene = 'scene_12';
const past_insurance_loss_history_scene = 'scene_14';
const past_insurance_loss_history_view = 'view_24';

/*$(document).on('knack-scene-render.' + past_insurance_loss_history_scene, function (event, scene) {
  log_console('Scene: past_insurance_loss_history_scene'+past_insurance_loss_history_scene);
  var x = document.getElementsByClassName('ang-link');
  //var oldUrl = $(x)attr('href');
  $(x).attr('href', 'https://abc.com');
  log_console(oldUrl);

  //log_console(x[0].href);
});*/
// Javascript function to change field header for Retired Lawyer
//$(document).on('knack-view-render.' + add_lawyer_view, function (event, view, data) {
$(document).on('knack-scene-render.' + add_lawyer_scene + ' knack-scene-render.' + add_retired_lawyer_scene, function (event, scene) {
  log_console('Scene: add_lawyer_scene ' + scene.key);
  log_console(event);
  log_console(scene);
  $("#" + add_lawyer_view + "-" + lawyer_date_joined_firm_field).datepicker("option", "onSelect", function () {
    log_console('hi');
    const currdate = new Date();
    const testdateparts = $("#" + add_lawyer_view + "-" + lawyer_date_joined_firm_field).val().split('/');
    log_console('month is: ' + testdateparts[1]);
    const testdate = new Date(testdateparts[2], testdateparts[1] - 1, testdateparts[0]);
    log_console(currdate);
    log_console(testdate);
    if (testdate.getDate() > currdate.getDate()) {
      Swal.fire({
        text: 'Joined Firm Date After current date.',
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
    }
  });

  /*$("#" + add_retired_lawyer_view + "-" + lawyer_date_joined_firm_field).datepicker("option", "onSelect", function () {
    log_console('hi');
    const currdate = new Date();
    const testdateparts = $("#" + add_retired_lawyer_view + "-" + lawyer_date_joined_firm_field).val().split('/');
    const testdate = new Date(testdateparts[2], testdateparts[1] - 1, testdateparts[0]);
    log_console('currdate: ' + currdate.getTime());
    log_console('testdate: ' + testdate.getTime());
    if (testdate.getTime() > currdate.getTime()) {
      Swal.fire({
        text: 'Date Retired After current date.',
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
    }
  });*/

  //fixLawyerHeading(scene.scene_id);

});

/*
$(document).on('knack-scene-render.' + fields_of_practice_scene, function (event, scene) {
  log_console(event);
  log_console(scene);
  log_console('In Retired Lawyer Scene');
  //redirect_retired_lawyer_url = 'https://calendarclia.knack.com/calendarclia/2020-vep-v1#home/members-of-the-firm-and-staff/' + scene.scene_id + '/fields-of-practice/' + scene.scene_id + '/procedures-and-controls/' + scene.scene_id + '/past-insurance--loss-history/' + scene.scene_id + '/';
  redirect_retired_lawyer_url = 'https://calendarclia.knack.com/calendarclia/2020-vep-v1#home/members-of-the-firm-and-staff/' + scene.scene_id + '/past-insurance--loss-history/' + scene.scene_id + '/';

  isRetiredLawyer(scene.scene_id, 'Yes');
})*/

//async function fixLawyerHeading(recId) {
//  var url = 'https://api.knack.com/v1/pages/' + create_application_scene + '/views/' + identification_view + '/records/' + recId;

//  var applicationRecord = await getKnackRecord(url);
//  log_console(applicationRecord);
//log_console($("#" + add_lawyer_firm_type_view + "-" + application_firm_type_field).val());
//if (applicationRecord[application_firm_type_field] == 'Retired') {
//  log_console('Found Retired');
//  $("label[for=" + lawyer_date_joined_firm_field + "]").html("<span>Date Retired</span>");
//} else {
//  $("label[for=" + lawyer_date_joined_firm_field + "]").html("<span>Date Joined Firm</span>");
//}
//}
// Javascript function to check at least one Lawyer has been added on Members of Firm View

const reported_claims_view = 'view_1304';
const unreported_claims_view = 'view_1311';
const retired_reported_claims_view = 'view_1272';
const retired_unreported_claims_view = 'view_1277';
$(document).on('knack-scene-render.' + additional_info_scene + ' knack-scene-render.' + retired_additional_info_scene, function (event, scene) {
  log_console('Scene: additional_info ' + scene.key);
  log_console(scene);
  //var x = document.querySelector('#view_31 .kn-submit input[name="id"]');
  //log_console(x);
  //const knackId = x.value;
  //log_console(knackId);
  $("#" + retired_additional_info_view + " .kn-button").on("click", function () {
    var alertyes = 0;
    var alertmsg = "";
    var myView38 = document.getElementById(retired_reported_claims_view);
    if (myView38 != null) {
      var data_view_38 = Knack.models[retired_reported_claims_view].data.toJSON();
      if (data_view_38.length == 0) {
        //alert ("Need at least one Reported Claims defined since Reported Claims was set to Yes");
        //return false;
        if (alertyes == 1) {
          alertmsg = alertmsg + "<br>"
        } else {
          alertyes = 1;
        }
        alertmsg = alertmsg + "Need at least one Reported Claims defined since Reported Claims was set to Yes.";
      }
    }
    var myView48 = document.getElementById(retired_unreported_claims_view);
    if (myView48 != null) {
      var data_view_48 = Knack.models[retired_unreported_claims_view].data.toJSON();
      if (data_view_48.length == 0) {
        if (alertyes == 1) {
          alertmsg = alertmsg + "<br>"
        } else {
          alertyes = 1;
        }
        alertmsg = alertmsg + "Need at least one Potential Claims defined since Potential Claims was set to Yes.";
      }
    }
    if (alertyes == 1) {
      Swal.fire({
        html: alertmsg,
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
      //alert (alertmsg);
      return false;
    }
    // Call Integromat Approve Application Process
    approveApplication(scene.scene_id);
  });

  $("#" + additional_info_view + " .kn-button").on("click", function () {
    var alertyes = 0;
    var alertmsg = "";
    //var myView32 = document.getElementById("view_32");
    //if (myView32 != null) {
    //  var data_view_32 = Knack.models['view_32'].data.toJSON();
    //  if (data_view_32.length == 0) {
    //    if (alertyes == 1) {
    //      alertmsg = alertmsg + "<br>"
    //    } else {
    //      alertyes = 1;
    //    }
    //    alertmsg = alertmsg + "Need at least one Branch Office defined since Branch Offices was set to Yes.";
    //  }
    //}
    var myView38 = document.getElementById(reported_claims_view);
    if (myView38 != null) {
      var data_view_38 = Knack.models[reported_claims_view].data.toJSON();
      if (data_view_38.length == 0) {
        //alert ("Need at least one Reported Claims defined since Reported Claims was set to Yes");
        //return false;
        if (alertyes == 1) {
          alertmsg = alertmsg + "<br>"
        } else {
          alertyes = 1;
        }
        alertmsg = alertmsg + "Need at least one Reported Claims defined since Reported Claims was set to Yes.";
      }
    }
    var myView48 = document.getElementById(unreported_claims_view);
    if (myView48 != null) {
      var data_view_48 = Knack.models[unreported_claims_view].data.toJSON();
      if (data_view_48.length == 0) {
        if (alertyes == 1) {
          alertmsg = alertmsg + "<br>"
        } else {
          alertyes = 1;
        }
        alertmsg = alertmsg + "Need at least one Potential Claims defined since Potential Claims was set to Yes.";
      }
    }
    //var myView53 = document.getElementById("view_53");
    //if (myView53 != null) {
    //  var data_view_53 = Knack.models['view_53'].data.toJSON();
    //  if (data_view_53.length == 0) {
    //    if (alertyes == 1) {
    //      alertmsg = alertmsg + "<br>"
    //    } else {
    //      alertyes = 1;
    //    }
    //    alertmsg = alertmsg + "Need at least one Professional Services Outside Canada defined since Professional Services Outside Canada was set to Yes.";
    //  }
    //}
    if (alertyes == 1) {
      Swal.fire({
        html: alertmsg,
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
      //alert (alertmsg);
      return false;
    }
    // Call Integromat Approve Application Process
    approveApplication(scene.scene_id);
    //checkCertRecForInvConnection(scene.scene_id);
  });
});

async function checkCertRecForInvConnection(knackId) {
  log_console('Function: checkCertRecForInvConnection');
  Knack.showSpinner();
  const search_val = '?view-application-details2_id=' + knackId + '&filters=[{"field":"' + cert_inv_connect_field + '", "operator":"is blank"}]';
  emptyCertRecs = await getCertificatebyQuery(search_val);
  //var invDataRec;
  var invId;
  for (j = 0; j < emptyCertRecs.total_records; j++) {
    log_console('Found Certificate Missing Inv j: ' + j);
    log_console(emptyCertRecs.records[j]);
    if (j == 0) {
      const invDataRec = await getInvoiceRecord(knackId);
      log_console(invDataRec);
      if (invDataRec.total_records == 0) {
        const appDataRec = await getApplicationRecord(knackId);
        log_console(appDataRec);
        const invCreateRec = await addAppInv(appDataRec);
        log_console(invCreateRec);
        const invDataRec1 = await getInvoiceRecord(knackId);
        log_console(invDataRec1);
        invId = invDataRec1.records[0].id;
      } else {
        invId = invDataRec.records[0].id;
      }
    }
    var data = {};
    data[cert_inv_connect_field] = [invId];
    log_console(data);
    const certificates_url = 'https://api.knack.com/v1/pages/' + coverage_desired_scene + '/views/' + coverage_desired_certificate_view + '/records/' + emptyCertRecs.records[j].id;
    updateResponse = await updateKnackRecord(certificates_url, data);
    log_console(updateResponse);
    //await updateCertificateRecordTest(emptyCertRecs.records[j].id,data);
  }
  Knack.hideSpinner();
}

// Update the Premium Select Option
function updatePremiumSelect(max_liability, new_record) {
  log_console('Function: updatePremiumSelect');
  $.ajax({
    url: rates_url,
    type: 'GET',
    headers: {
      'Authorization': Knack.getUserToken(),
      'X-Knack-Application-ID': Knack.application_id,
      'X-Knack-REST-API-KEY': 'knack'
      //'Content-Type': 'application/json',
      //'Access-Control-Allow-Origin': 'https://api.knack.com'
    }
  }).done(function (responsePremiumData) {
    //alert("Got responsePremiumData");
    //console.log("Max Liabilty: " + max_liability + " new_record: " + new_record);
    //console.log(responsePremiumData);
    var options =
      $("#view_274-field_433 option").filter(function (e) {
        var selectval = $(this).context.value
        var choiceval = $(this).context.text
        //var fields = $(this).context.text.split(regex);
        for (j = 0; j < responsePremiumData.total_records; j++) {
          if (new_record == "Yes") {
            //alert("field_110_raw: " + responsePremiumData.records[j].field_110_raw + " max_liability: " + max_liability);
            if (responsePremiumData.records[j].field_110_raw > max_liability && responsePremiumData.records[j].id == selectval && responsePremiumData.records[j][liability_rate_new_application_field] == "Yes") {
              return choiceval;
            }
          } else {
            if (responsePremiumData.records[j].field_110_raw > max_liability && responsePremiumData.records[j].id == selectval) {
              return choiceval;
            }
          }
        }
        //  Return Select Option
        if (selectval == "") {
          return choiceval;
        }
      }).clone();
    //console.log(options.length);
    if (options.length < 2) {
      Swal.fire({
        text: 'Maximum Payment Options Reached. No Liablity Endorsement Available. Returning you to Previous screen.',
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
      var url = "#law-offices-details/endorsements";
      $(location).attr('href', url);
    }
    // View 274 Add Liablity Endorsement Field 433 Liablity Rate in that View        
    $("#view_274-field_433").empty();
    $("#view_274-field_433").append(options);
    $("#view_274-field_433").trigger("liszt:updated");
  }).fail(function (responsePremiumData) {
    log_console(responsePremiumData);
  });
}

// Turn off Liability Add Button if no selections available
function checkSelectNotZero(max_liability, new_record, hide_element) {
  log_console('Function: checkSelectNotZero')
  var found = 0;
  //var premium_url = 'https://api.knack.com/v1/pages/' + api_data_scene + '/views/' + liability_rates_view + '/records';
  $.ajax({
    url: rates_url,
    type: 'GET',
    headers: {
      'Authorization': Knack.getUserToken(),
      'X-Knack-Application-ID': Knack.application_id,
      'X-Knack-REST-API-KEY': 'knack'
      //'Content-Type': 'application/json',
      //'Access-Control-Allow-Origin': 'https://api.knack.com'
    }
  }).done(function (responsePremiumData) {
    for (j = 0; j < responsePremiumData.total_records; j++) {
      if (new_record == "Yes") {
        //alert("field_110_raw: " + responsePremiumData.records[j].field_110_raw + " max_liability: " + max_liability);
        if (responsePremiumData.records[j].field_110_raw > max_liability && responsePremiumData.records[j][liability_rate_new_application_field] == "Yes") {
          found = 1;
          //alert("Found 1");
        }
      } else {
        if (responsePremiumData.records[j].field_110_raw > max_liability) {
          found = 1;
        }
      }
    }
    //alert("found is: " + found);
    if (found == 0) {
      hide_element.style.display = "none";
      var x = document.getElementById(max_liability_reached_view);
      x.style.display = "block";
    }
  }).fail(function (responsePremiumData) {
    log_console(responsePremiumData);
  });
}

// Pull all data to check available liabilty rates available. 
async function checkLiabilityRateOptions(check_type, hide_element) {
  log_console('Function: checkLiabilityRateOptions');
  //alert("In checkLiabilityRateOptions");
  var max_liability = 0;
  // Scene 136 view 269 is Liablity Endorsements Table in Endorsements View
  var endorsement_url = 'https://api.knack.com/v1/pages/scene_136/views/view_269/records';
  await $.ajax({
    url: endorsement_url,
    type: 'GET',
    headers: {
      'Authorization': Knack.getUserToken(),
      'X-Knack-Application-ID': Knack.application_id,
      'X-Knack-REST-API-KEY': 'knack'
      //'Content-Type': 'application/json',
      //'Access-Control-Allow-Origin': 'https://api.knack.com'
    }
  }).done(function (responseEndorsementData) {
    //alert("Got responseEndorsementData");
    //console.log(responseEndorsementData);
    // Scene 138 view 275 is Law Office Details in Add Endorsement
    var premium_url = 'https://api.knack.com/v1/pages/scene_138/views/view_275/records';
    $.ajax({
      url: premium_url,
      type: 'GET',
      headers: {
        'Authorization': Knack.getUserToken(),
        'X-Knack-Application-ID': Knack.application_id,
        'X-Knack-REST-API-KEY': 'knack'
        //'Content-Type': 'application/json',
        //'Access-Control-Allow-Origin': 'https://api.knack.com'
      }
    }).done(function (responsePremiumData) {
      //alert("Got responsePremiumData");
      //console.log(responsePremiumData);
      if (responseEndorsementData.total_records == 0) {
        //alert("No responseEndorsementData Records");
        // Field 113 is Liablity Rate in Law Offices Table
        //console.log(responsePremiumData);
        var fields = responsePremiumData[application_liability_rate_conn_field_raw][0].identifier.split(regex);
        //alert("0 endorsement check type is: " + check_type);
        if (check_type == "View") {
          updatePremiumSelect(fields[1], responsePremiumData[application_new_application_field]);
        } else {
          checkSelectNotZero(fields[1], responsePremiumData[application_new_application_field], hide_element);
        }
      } else {
        //alert("In Endorsement with count: " + responseEndorsementData.total_records);
        for (j = 0; j < responseEndorsementData.total_records; j++) {
          // Field 436 is Current Rate in Liablity Endorsements Table
          if (responseEndorsementData.records[j].field_436 > max_liability) {
            max_liability = responseEndorsementData.records[j].field_436
          }
        }
        //alert("Max Liablity is: " + max_liability);
        //alert("Some endorsement check type is: " + check_type);
        if (check_type == "View") {
          updatePremiumSelect(max_liability, responsePremiumData[application_new_application_field]);
        } else {
          checkSelectNotZero(max_liability, responsePremiumData[application_new_application_field], hide_element);
        }
      }
    }).fail(function (responsePremiumData) {
      log_console(responsePremiumData);
    });
  }).fail(function (responseEndorsementData) {
    log_console(responseEndorsementData);
  });
}

// Javascript function to update liability rates available
$(document).on('knack-view-render.view_274', function (event, view, data) {
  log_console('View: ' + view.key);
  checkLiabilityRateOptions("View");
});

// Update the Premium Select Option for New Applications
async function updateCoveragePremium(yearId, ratesView) {
  log_console('Function: updateCoveragePremium');
  log_console('yearId: ' + yearId + ' ratesView: ' + ratesView);
  const search_data = '?filters={"match": "and", "rules": [{"field":"' + liability_rates_year_conn_field + '", "operator":"is", "value":"' + yearId + '"},{"field":"' + liability_rates_type_field + '", "operator":"is", "value":"VEP"},{"field":"' + liability_rate_new_application_field + '", "operator":"is", "value":"Yes"}]}';
  const query_url = rates_url + search_data;
  //log_console('query_url: ' + query_url);
  const responsePremiumData = await getKnackRecord(query_url);

  //log_console('responsePremiumData');
  log_console(responsePremiumData);
  var options =
    //$("#" + coverage_desired_view + "-" + application_liability_rate_conn_field + " option").filter(function (e) {
    $("#" + ratesView + "-" + application_liability_rate_conn_field + " option").filter(function (e) {
      //log_console('this: '+$(this));
      var selectval = $(this).context.value
      var choiceval = $(this).context.text
      //log_console('selectval: '+selectval+' choiceval '+choiceval);
      //alert("choiceval: " + choiceval + " selectval: " + selectval);
      // Compare Field against table and any that match Yes on New we return
      for (j = 0; j < responsePremiumData.total_records; j++) {
        //log_console('record.id: '+responsePremiumData.records[j].id+' selectval: '+selectval);
        if (responsePremiumData.records[j].id == selectval) {
          return choiceval;
        }
      }
      //  Return Select Option
      if (selectval == "") {
        return choiceval;
      }
    }).clone();
  //log_console('options: ');
  //log_console(options);

  // View 30 Coverage Desired Field 113 Liablity Rate in that View        
  $("#" + ratesView + "-" + application_liability_rate_conn_field).empty();
  $("#" + ratesView + "-" + application_liability_rate_conn_field).append(options);
  $("#" + ratesView + "-" + application_liability_rate_conn_field).trigger("liszt:updated");
  //$("#" + coverage_desired_view + "-" + application_liability_rate_conn_field).empty();
  //$("#" + coverage_desired_view + "-" + application_liability_rate_conn_field).append(options);
  //$("#" + coverage_desired_view + "-" + application_liability_rate_conn_field).trigger("liszt:updated");

}

// Endorsements Scene - check if any Liability Rate increases available
$(document).on('knack-scene-render.scene_136', function (event, scene) {
  log_console('Scene: ' + scene.key);
  //alert("In scene_136");
  var y = document.getElementById(max_liability_reached_view);
  y.style.display = "none";
  var x = document.getElementById("view_271");
  checkLiabilityRateOptions("Scene", x);
});

// Javascript function to check Payment total equals split total of CLIA and Excess
$(document).on('knack-view-render.view_323', function (event, view, data) {
  log_console('View: ' + view.key);
  //console.log(data);
  var field_607 = data.field_607_raw;
  //console.log(field_607);
  //alert ("Payment value is: " + field_607 + " Split is: " + Number($("#field_960").val()));
  $("#view_323 .kn-button").on("click", function () {
    if (field_607 != $("#field_960").val()) {
      Swal.fire({
        html: 'Payment Total must equal Split total. Payment is: ' + field_607 + ' Split Total is: ' + Number($("#field_960").val()),
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
      //alert ("Payment Total must equal Split total. Payment is: " + field_607 + " Split Total is: " + Number($("#field_960").val()));
      return false;
    }
    //return false;
  });
});

// Place 0.00 instead of blank for Sum/Equation Fields
var label_fields = ['field_664', 'field_665', 'field_666', 'field_942', 'field_943', 'field_944', 'field_945',
  'field_946', 'field_947', 'field_948', 'field_949', 'field_950', 'field_951', 'field_952',
  'field_953', 'field_954', 'field_955', 'field_956'];
var no_label_fields = ['field_613', 'field_615', 'field_616', 'field_632', 'field_633', 'field_645',
  'field_646', 'field_709', 'field_711', 'field_715', 'field_717', 'field_922', 'field_926',
  'field_961', 'field_962', 'field_963', 'field_964', 'field_965', 'field_966', 'field_967',
  'field_968', 'field_969', 'field_981', 'field_982', 'field_983', 'field_984', 'field_985',
  'field_986', 'field_987', 'field_988', 'field_989', 'field_990', 'field_991', 'field_992',
  'field_993', 'field_994'];

$(document).on('knack-view-render.view_300', function (event, view, data) {
  log_console('View: ' + view.key)
  for (i = 0; i < label_fields.length; i++) {
    if ($('div.kn-detail.' + label_fields[i] + ' > .kn-detail-body span').text() == "") {
      $('div.kn-detail.' + label_fields[i] + ' > .kn-detail-body span').text("0.00");
    }
    //console.log($('div.kn-detail.' + label_fields[i] + ' > .kn-detail-label')[0].style);
    //$('div.kn-detail.' + label_fields[i] + ' > .kn-detail-label')[0].setAttribute('style', 'min-width: 170px');
    //$('div.kn-detail.' + label_fields[i] + ' > .kn-detail-label')[0].style.minWidth='170px';
    //$('div.kn-detail.' + label_fields[i] + ' > .kn-detail-label')[0].style.maxWidth='170px';
  }
  for (i = 0; i < no_label_fields.length; i++) {
    if ($('div.' + no_label_fields[i] + ' > .kn-detail-body span').text() == "") {
      $('div.' + no_label_fields[i] + ' > .kn-detail-body span').text("0.00");
    }
  }
});

$(document).on('knack-view-render.' + all_applications_view, function (event, view, data) {
  log_console('View: all_applications_view ' + view.key)
  addTableColumnChoose(view);
});

var addTableColumnChoose = function (view) {
  //See http://helpdesk.knackhq.com/support/discussions/topics/5000074312 and https://jsfiddle.net/HvA4s/
  // added support for cookies to keep selected columns between renders and sessions
  var clearFix = $('#' + view.key + ' div.kn-records-nav').not('.below');
  clearFix.append("<div class='clear'><a href='#' class='choose-columns'>▼ Choose Columns</a></div>");
  var hstring = getCookie("hstring_" + view.key);
  if (hstring != '') {
    var headers = JSON.parse(hstring);
    $.each(headers, function (i, show) {
      var cssIndex = i + 1;
      var tags = $('#' + view.key + '  table th:nth-child(' + cssIndex + '), #' + view.key + '  table td:nth-child(' + cssIndex + ')');
      if (show)
        tags.show();
      else
        tags.hide();

    });
  }

  $('#' + view.key + ' .choose-columns').click(function () {
    // remove other open columns set dialog on the same page
    if ($('#tableChooseColumns') != null) { $('#tableChooseColumns').remove(); }
    var headers = $('#' + view.key + ' table th').map(function () {
      var th = $(this);
      return { text: th.text(), shown: th.css('display') != 'none' };
    });
    var hs;
    //h = ['<div id=tableChooseColumns><table><thead><tr><th style="text-align:center;padding:5px;"><button id=done class="button_a">OK</button></th></tr></thead><tbody><tr>'];
    h = ['<div id=tableChooseColumns><table><thead><tr><td style="height: 0px; border-bottom: 2px solid; padding: 7px 0px 7px 0px;">Filter</td></tr></thead><tbody><tr>'];
    $.each(headers, function () {
      h.push('<tr><td style="padding:5px;"><input type=checkbox',
        (this.shown ? ' checked ' : ' '),
        '/> ',
        this.text,
        '</td></tr>');
    });
    //h.push('</tr></tbody></table></div>');
    h.push('</tr></tbody></table><button id=done>Apply</button></div>');
    hs = h.join('');

    $('body').append(hs);
    var pos = $('#' + view.key + ' .choose-columns').position();
    //$('#tableChooseColumns').css({'position': 'absolute','left': '20px', 'top': pos.top,'padding': '5px', 'border': '1px solid #666', 'border-radius':'3px','background': '#fff'});
    $('#tableChooseColumns').css({ 'position': 'absolute', 'right': '24px', 'margin-top': '-50px', 'z-index': '9999', 'top': pos.top, 'padding': '5px', 'background': 'rgb(175, 81, 73)', 'box-shadow': '0 0px 0px 0 rgba(0, 0, 0, 0.2), 0px 4px 10px 0 rgba(0, 0, 0, 0.19)', 'font-size': '14px', 'color': '#fff', 'border': '2px solid #fff', 'border-radius': '12px' });
    $('#done').click(function () {
      var showHeaders = $('#tableChooseColumns input').map(function () { return this.checked; });
      var columns = [];
      $.each(showHeaders, function (i, show) {
        var cssIndex = i + 1;
        var tags = $('#' + view.key + ' table th:nth-child(' + cssIndex + '), #' + view.key + ' table td:nth-child(' + cssIndex + ')');
        if (show)
          tags.show(300, "swing");
        else
          tags.hide(300, "swing");
        columns.push(show);
      });

      $('#tableChooseColumns').remove();
      setCookie("hstring_" + view.key, JSON.stringify(columns), 100);

      mixpanel.track("Preferences changes", { "Page": ("Knack: " + view.scene.name), "View": view.title });
      return false;
    });
    return false;
  });
}

/* Cookie support -----------------------------------------------*/

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// handler to dismiss dialog just with outside click
$(document).click(function (event) {
  if (!$(event.target).closest('#tableChooseColumns').length) {
    if ($('#tableChooseColumns').is(":visible")) {
      $('#tableChooseColumns').remove();
    }
  }
})

// Redirect User to CC payment
$(document).on('knack-form-submit.' + cc_payment_view + ' knack-view-render.' + cc_admin_payment_view + ' knack-form-submit.' + cc_details_payment_view, function (event, view, record) {
  log_console(record);
  //alert("In payment view submit");
  var data = new Array();
  data[0] = record.id;
  data[1] = record[cc_payment_firm_name];
  data[2] = record[cc_payment_amount];
  data[3] = record[cc_payment_amount_raw] * 100;
  data[4] = record[cc_payment_customer];
  data[5] = "return_user";
  if (view.key == cc_admin_payment_view) {
    if (record[cc_invoiced_paid] == "Yes") {
      alert("Invoiced has already been paid. Returning");
      return;
    }
    data[5] = "return_admin";
  }
  var packed = "";
  for (i = 0; (i < data.length); i++) {
    if (i > 0) {
      packed += ",";
    }
    packed += escape(data[i]);
  }
  var currentLanguage = Localize.getLanguage();
  //alert("language: " + currentLanguage);
  var url = "https://clia.ca/payment.html?" + packed;
  if (currentLanguage == 'fr-CA') {
    url = "https://clia.ca/paiement.html?" + packed;
  }
  $(location).attr('href', url);
});

// Javascript function to display Invoice popup message
$(document).on('knack-view-render.view_456', function (event, view, data) {
  $("#view_456 .kn-button").on("click", function () {
    Swal.fire({
      html: 'You have chosen to be invoiced and your invoice will arrive by email once it is generated.<br>Thank you.',
      confirmButtonColor: '#af5149',
      confirmButtonAriaLabel: 'Ok'
    })
  });
});

// Direct user to correct form on inital login
/*$(document).on('knack-scene-render.' + dashboard_initial_scene, function (event, view, record) {
  log_console('Scene: dashboard_initial_scene: ' + dashboard_initial_scene);
  var query_url = 'https://api.knack.com/v1/pages/' + dashboard_initial_scene + '/views/' + application_view + '/records';
  $.ajax({
    url: query_url,
    type: 'GET',
    headers: {
      'Authorization': Knack.getUserToken(),
      'X-Knack-Application-ID': Knack.application_id,
      'X-Knack-REST-API-KEY': 'knack'
      //'Content-Type': 'application/json',
      //'Access-Control-Allow-Origin': 'https://api.knack.com'
    }
  }).done(function (responseAppData) {
    //console.log(user_headers);
    log_console(responseAppData);
    log_console(responseAppData.total_records);
    if (responseAppData.total_records == 1) {
      let redirect_id = responseAppData.records[0].id;
      log_console('Redirect Here: ' + redirect_id);
      //window.location.replace(application_update_redirect + redirect_id);
    }
  }).fail(function (responseAppData) {
    log_console("Fail: ");
    log_console(responseAppData);
  });
});*/

// Update VEP Certificate if Liablity Rate Changes
var current_rate_choice = "";
//var current_cyber_choice = "";
var current_lateral_hire_choice = "";

var currInvDataRec;
var responseLiabilityData;

const rates_url = 'https://api.knack.com/v1/pages/' + api_data_scene + '/views/' + api_liability_rates_view + '/records';

$(document).on('knack-view-render.' + coverage_desired_view + ' knack-view-render.' + retired_coverage_desired_view, function (event, view, data) {
  log_console('View: coverage_desired_view ' + view.key);
  log_console(data);
  //if (typeof data[application_admin_testing_field] === 'undefined') {
  //  log_console('No admin_testing field');
  //} else {
  //  admin_testing = data[application_admin_testing_field];
  //}
  //log_console('admin_testing: '+admin_testing);
  getCoverageDesiredData(data);

  var abc = $("#kn-input-" + application_cyber_coverage_field + " :checked").val();
  log_console('abc: ' + abc);
  if ($("#kn-input-" + application_cyber_coverage_field + " :checked").val() == 'No') {
    log_console('In No');
    var y = document.querySelector("#kn-input-section-1519079108284");
    y.style.display = "none";
    var z = document.querySelector("#kn-input-section-1519079452767");
    z.style.display = "none";
    //var x = document.querySelector(".kn-back-link");
    //log_console(x);
    $('#kn-' + coverage_desired_scene).append("<br><br><br><br><br><br><br><br>");
    //x.append("<br>&nbsp;&nbsp;<br><br><br><br>");
  }

  if (data[application_new_application_field] == "Yes" && data[application_firm_type_field] != 'Retired') {
    //alert("premium select");
    updateCoveragePremium(data[application_year_conn_field_raw][0].id, view.key);
  }
  //current_rate_choice = $("#" + coverage_desired_view + '-' + application_liability_rate_conn_field + " option:checked").val();
  current_rate_choice = $("#" + view.key + '-' + application_liability_rate_conn_field + " option:checked").val();

  //current_cyber_choice = $("#kn-input-" + application_cyber_coverage_field + " :checked").val();

  log_console('current_rate_choice: ' + current_rate_choice);

  //log_console('current_rate_choice: ' + current_rate_choice + ' current_cyber_choice ' + current_cyber_choice);
  //$('#view_30-field_1390')[0].selectedIndex = 1;
  //log_console('Cyber Rate: ' + $('#view_30-field_1390 option:checked').val());
  //log_console('Cyber Rate: ' + $('#view_30-field_1390 option:checked').index());
  // Update Certificate Rates if they have changed and assign records to invoice if not alredy done so.
  //$(document).on('knack-form-submit.' + coverage_desired_view, function (event, view, record) {
  //$(document).on('knack-form-submit.' + coverage_desired_view + ' knack-form-submit.'+ retired_coverage_desired_view, function (event, view, record) {
  //  log_console('Submit: coverage_desired_view ' + view.key);
  //  const cyber_choice_val = $("#kn-input-" + application_cyber_coverage_field + " :checked").val();
  //  log_console('cyber_choice_val: ' + cyber_choice_val);
  //  doCertCheck(record, cyber_choice_val);
  //});
});

$(document).on('knack-record-update.' + coverage_desired_view + ' knack-record-update.' + retired_coverage_desired_view, function (event, view, record) {
  log_console('Record Update: coverage_desired_view ' + view.key);
  log_console(record);
  doCertCheck(record);
});

// Preload Coverage Desired Data
async function getCoverageDesiredData(data) {
  log_console('Function: getCoverageDesiredData');
  currInvDataRec = await getInvoiceRecord(data.id);
  log_console(currInvDataRec);

  search_data = '?filters={"match": "and", "rules": [{"field":"' + liability_rates_year_conn_field + '", "operator":"is", "value":"' + data[application_year_conn_field_raw][0].id + '"},{"field":"' + liability_rates_type_field + '", "operator":"is", "value":"Cyber"}]}';
  const query_url = rates_url + search_data;
  log_console('Get Cyber Liability Record');
  log_console('query_url: ' + query_url);
  responseLiabilityData = await getKnackRecord(query_url);
  //log_console('responseLiabilityData');
  log_console(responseLiabilityData);
}

// Certificate Updates from Coverage Screen. Split out to use Async/Await
async function doCertCheck(record) {
  log_console('Function: doCertCheck');
  log_console(record);
  if (localStorage.application_vep_invoice_field == "") {
    log_console('Missing localStorage.application_vep_invoice_field value, Fixing');
    let search_val = '?filters={"match": "and", "rules": [{"field":"' + inv_app_type_field + '", "operator":"is", "value":"Excess"},{"field":"' + inv_application_connect_field + '", "operator":"is", "value":"' + record.id + '"}]}';
    const url = 'https://api.knack.com/v1/pages/' + api_data_scene + '/views/' + api_inv_view + '/records' + search_val;
    const invDataRecord = await getKnackRecord(url);
    log_console(invDataRecord);
    localStorage.application_vep_invoice_field = invDataRecord.records[0].id;
  }

  const certificates_url = 'https://api.knack.com/v1/pages/' + coverage_desired_scene + '/views/' + coverage_desired_certificate_view + '/records';

  const vep_search_val = '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"VEP"}]'

  //const vep_query_url = certificates_url + '?coverage-desired_id=' + record.id + vep_search_val;
  const vep_query_url = '?view-application-details2_id=' + record.id + vep_search_val;

  log_console('Get VEP Certificate: query_url: ' + vep_query_url);
  //const responseCertVEPData = await getKnackRecord(vep_query_url);
  const responseCertVEPData = await getCertificatebyQuery(vep_query_url);
  log_console(responseCertVEPData);
  checkCertRecForUpdate(record, record[application_liability_rate_conn_field_raw][0].id, responseCertVEPData, "VEP");

  const cyber_search_val = '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"Cyber"}]'
  //const cyber_query_url = certificates_url + '?coverage-desired_id=' + record.id + cyber_search_val;
  const cyber_query_url = '?view-application-details2_id=' + record.id + cyber_search_val;
  log_console('Get Cyber Certificate: query url: ' + cyber_query_url);
  //const responseCertCyberData = await getKnackRecord(cyber_query_url);
  const responseCertCyberData = await getCertificatebyQuery(cyber_query_url);
  log_console(responseCertCyberData);

  //const cyber_choice_val = $("#kn-input-" + application_cyber_coverage_field + " :checked").val();
  //const cyber_choice_val = $("#kn-input-field_115 :checked").val();
  //const test_val = $("#kn-input-" + application_cyber_coverage_field).val();
  //log_console('cyber_choice_val: '+cyber_choice_val);
  //log_console('test_val: '+test_val);
  //log_console("Field 115: " + cyber_choice_val + " current: " + current_cyber_choice);
  //if ((cyber_choice_val != current_cyber_choice)) {
  //alert("Need to update Cyber");
  log_console('good: ' + record[application_cyber_good_field] + ' choice: ' + record[application_cyber_coverage_field] + ' firewall: ' + record[application_cyber_firewall_field] + ' backup: ' + record[application_cyber_backup_field] + ' virus: ' + record[application_cyber_virus_field]);
  //if (record[application_cyber_coverage_field] == 'Yes' && record[application_cyber_firewall_field] == 'Yes' && record[application_cyber_backup_field] == 'Yes' && record[application_cyber_virus_field] == 'Yes') {
  if (record[application_cyber_good_field] == 'Yes') {

    log_console(responseCertCyberData.total_records);
    checkCertRecForUpdate(record, record[application_liability_rate_conn_field_raw][0].id, responseCertCyberData, "Cyber");
    //if (responseCertCyberData.records[0].field_1272 == ""
  } else {
    if (responseCertCyberData.total_records > 0) {
      //alert("Delete Record here");
      const delete_url = certificates_url + "/" + responseCertCyberData.records[0].id
      $.ajax({
        url: delete_url,
        type: 'DELETE',
        headers: {
          'Authorization': Knack.getUserToken(),
          'X-Knack-Application-ID': Knack.application_id,
          'X-Knack-REST-API-KEY': 'knack'
          //'Content-Type': 'application/json',
          //'Access-Control-Allow-Origin': 'https://api.knack.com'
        }
      }).done(function (responseCertCyberDelete) {
        log_console(responseCertCyberDelete);
      }).fail(function (responseCertCyberDelete) {
        log_console(responseCertCyberDelete);
      });
    }
  }
}

// Get Invoice Record
async function getAllInvoiceRecords(id) {
  log_console("Function: getAllInvoiceRecords");
  log_console("Values: id: " + id);
  const vep_search_val = '?filters=[{"field":"' + inv_application_connect_field + '", "operator":"is", "value":"' + id + '"}]';
  const url = 'https://api.knack.com/v1/pages/' + api_application_data_scene + '/views/' + api_invoice_view + '/records' + vep_search_val;
  return await getKnackRecord(url);
}

// Get Invoice Record
async function getInvoiceRecord(recordid) {
  log_console('Function: getInvoiceRecord');
  const invoices_url = 'https://api.knack.com/v1/pages/' + coverage_desired_scene + '/views/' + coverage_desired_invoice_view + '/records';
  //const query_url = invoices_url + '?coverage-desired_id=' + recordid + search_val;
  const url = invoices_url + '?coverage-desired_id=' + recordid;
  return await getKnackRecord(url);
}

// Get Invoice Record vie API View
async function getInvoiceRecordApi(recId, recordid) {
  log_console('Function: getInvoiceRecordApi');
  const invoices_url = 'https://api.knack.com/v1/pages/' + api_application_data_scene + '/views/' + api_invoice_view + '/records';
  //const vep_search_val = '?view-application-details2_id=' + record.id + '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"VEP"}]';
  const inv_search_val = '?view-application-details2_id=' + recId;
  //const inv_search_val = '?filters=[{"field":"' + inv_application_connect_field + '", "operator":"is", "value":"' + id + '"}]';
  //const query_url = invoices_url + '?coverage-desired_id=' + recordid + search_val;
  //const url = invoices_url + '?coverage-desired_id=' + recordid;
  //const url = invoices_url + '/'+ recordid;
  const url = invoices_url + inv_search_val;
  return await getKnackRecord(url);
}

// Get Liability Rates Records
async function getLiabilityRateRecord(liabilityId) {
  log_console('Function: getLiablityRateRecord');
  const url = rates_url + "/" + liabilityId;
  return await getKnackRecord(url);
}

// Update Certificates records 
async function updateCertificateRecord(certId, liabilityRateId, invoiceRecordId, updateinv, liabilityRecordData, updateliability) {
  log_console('Function: updateCertificateRecord');
  const certificates_url = 'https://api.knack.com/v1/pages/' + coverage_desired_scene + '/views/' + coverage_desired_certificate_view + '/records';
  const update_url = certificates_url + "/" + certId;
  var data = {};
  //if (updateliability == 1} {data[cert_liability_rate_conn_field] = [liabilityRateId]; }
  if (updateinv == 1) { data[cert_inv_connect_field] = [invoiceRecordId]; }
  //if (updateliability == 1) { data[cert_current_rate_field] = liabilityRecordData.field_110_raw; }
  if (updateliability == 1) {
    data[cert_liability_rate_conn_field] = [liabilityRateId];
    data[cert_prorate_field] = liabilityRecordData[liability_prorate_field];
    data[cert_current_rate_field] = liabilityRecordData[liability_rates_premium_field_raw];
    data[cert_sage_code_field] = liabilityRecordData[liability_rates_sage_code_field];
    data[cert_sage_discount_code_field] = liabilityRecordData[liability_rates_sage_discount_code_field];
  }
  //const data = { field_1278: liabiltyRateId, field_1310: liabilityRecordData.field_110_raw, field_1272: invoiceRecordData.records[0].id };

  log_console("data: ");
  log_console(data);
  //log_console("invoiceData:");
  //log_console(invoiceRecordData);
  log_console("liabilityData:");
  log_console(liabilityRecordData);
  log_console("After Data");
  return await updateKnackRecord(update_url, data);
}

async function checkCertRecForUpdate(record, certRecId, responseCertData, recType) {
  log_console("Function: checkCertRecForUpdate");
  log_console('rectype: ' + recType);
  log_console(responseCertData);
  var updateinv = 0;
  var updateliability = 0;
  var updatecnt = 0;
  //let invoiceRecordData;
  let liabilityRecordData;
  if (responseCertData.records[0][cert_inv_connect_field] == "") {
    log_console('No Invoce Record attached to Certificate - Fixing');
    log_console(currInvDataRec);
    updateinv = 1;
  }
  //log_console('app lawyer count: ' + record[application_lawyer_count_field]);
  //log_console('cert lawyer count: ' + responseCertData.records[0][cert_lawyers_covered_field]);
  //if (record[application_lawyer_count_field] != responseCertData.records[0][cert_lawyers_covered_field]) {
  //  log_console('Fix lawyer Count');
  //  updatecnt = 1;
  //}
  if (recType == "VEP") {
    if (certRecId != responseCertData.records[0][cert_liability_rate_conn_field_raw][0].id) {
      log_console('VEP Liablity need update');
      liabilityRecordData = await getLiabilityRateRecord(certRecId);
      //log_console(liabilityRecordData);
      updateliability = 1;
    }
  } else {
    log_console('Cert liability: ' + cert_liability_rate_conn_field);
    log_console(responseCertData.records[0][cert_liability_rate_conn_field]);
    if (responseCertData.records[0][cert_liability_rate_conn_field] == "") {
      log_console('Fix Cyber Rate');
      //const query_url = ''
      var data = {};
      data[cert_liability_rate_conn_field] = [responseLiabilityData.records[0].id];
      data[cert_prorate_field] = responseLiabilityData.records[0][liability_prorate_field];
      data[cert_current_rate_field] = responseLiabilityData.records[0][liability_rates_premium_field_raw];
      data[cert_sage_code_field] = responseLiabilityData.records[0][liability_rates_sage_code_field];
      data[cert_sage_discount_code_field] = responseLiabilityData.records[0][liability_rates_sage_discount_code_field];
      data[cert_inv_connect_field] = [localStorage.application_vep_invoice_field];
      updateinv = 0;
      await updateCertificateRecordTest(responseCertData.records[0].id, data);
      updateinv == 0;
      updateliability == 0;
    }
  }
  if (updateinv == 1 || updateliability == 1) {
    //log_alert("Records Rates don't match - Update Here");
    log_console('records do not match updateinv: ' + updateinv + ' updateliability: ' + updateliability);
    //const updateCertificateResponse = await updateCertificateRecord(responseCertVEPData.records[0].id,certRecId,invoiceRecordData,updateinv,liabilityRecordData,updateliability).then(data => {log_console("then return update Certificate Data");log_console(data);return data;})
    updateCertificateRecord(responseCertData.records[0].id, certRecId, localStorage.application_vep_invoice_field, updateinv, liabilityRecordData, updateliability).then(data => { log_console("then return updated Certificate Data"); log_console(data); })
  }
}

// Update Add Endorsement Data on Submit
$(document).on('knack-form-submit.' + add_endorsement_view, function (event, view, record) {
  log_console('Submit: add_endorsement_view ' + view.key);
  addEndorsementSubmit(record)
});

async function addEndorsementSubmit(record) {
  log_console('Function: addEndorsementSubmit');

  //***** Example ASYNC from Web for Testing *********/
  /*$("form").submit(function (e) {
    e.preventDefault(); // stops the default action
    //$("#loader").show(); // shows the loading screen
    window.swal({
      title: "Checking...",
      text: "Please wait",
      imageUrl: "images/ajaxloader.gif",
      showConfirmButton: false,
      allowOutsideClick: false
    });
    $.ajax({
        url: test.php,
        type: "POST"
        success: function (returnhtml) {
            //$("#loader").hide(); // hides loading sccreen in success call back
            window.swal({
              title: "Finished!",
              showConfirmButton: false,
              timer: 1000
            });
        }
    });
});*/
  //***** Example from Web for Testing ********/

  /*Swal.fire({
    text: 'Procssing Request, Please wait',
    timer: 6000,
    showConfirmButton: false,
        //title: 'Now loading',
    allowEscapeKey: false,
    allowOutsideClick: false,
    timerProgressBar: true,
    onOpen: () => {
      swal.showLoading();
    }
    })*/

  log_console(record);
  var newinv = 0;
  var newinv_id = '';
  var invoiceData;
  if (record[cert_cert_type_field] == 'Firm Name Change') {
    //log_console(record);
    if (record[cert_transfering_lawyers_field] == 'Yes') {
      log_console('Generating Firm Name Change Certificate');
      approveCertificate(record.id);
      integromatCreateCertificate(record.id);

    }
    //Knack.hideSpinner();
    return;
  }
  Swal.fire({
    title: "Processing Request...",
    text: "Please wait",
    //imageUrl: "images/ajaxloader.gif",
    showConfirmButton: false,
    allowOutsideClick: false,
    onOpen: () => {
      swal.showLoading();
    }
  });
  const provinceData = await getProvinceRecord(record[cert_prov_connect_field_raw][0].id);
  log_console(provinceData);
  if (record[cert_cert_type_field] == 'Cyber' || record[cert_cert_type_field] == 'Liability Increase') {
    log_console('Add Invoice Record');
    var data = {};
    data[inv_application_connect_field] = [record[cert_application_connect_field_raw][0].id];
    data[inv_year_connect_field] = [record[cert_year_connect_field_raw][0].id];
    data[inv_prov_taxtype_field] = provinceData[prov_tax_type_field];
    data[inv_admin_testing_field] = record[cert_admin_testing_field];
    data[inv_firm_id_field] = record[cert_firm_id_field];
    data[inv_app_type_field] = 'Excess';
    invoiceData = await addInvoiceRecord(data, record[cert_admin_testing_field]);
    newinv = 1;
    newinv_id = invoiceData.record.id;
    log_console('Invoice Data Rec with id: ' + newinv_id);
    log_console(invoiceData);
  }

  log_console(record[cert_year_connect_field_raw][0].id);
  let yearData = await getYearsRecord(record[cert_year_connect_field_raw][0].id);
  log_console(yearData);

  log_console('Now Update Certificate record');
  var data = {};
  if (newinv == 1) {
    data[cert_inv_connect_field] = [invoiceData.record.id];
  }
  data[cert_prov_tax_rate_field] = provinceData[prov_tax_rate_field_raw];
  if (record[cert_cert_type_field] == 'Cyber') {
    data[cert_retired_lawyers_discount_rate_field] = yearData[year_retired_lawyers_cyber_discount_rate_field_raw];
    //search_data = '?filters={"match": "and", "rules": [{"field":"' + liability_rates_year_conn_field + '", "operator":"is", "value":"' + yearData.id + '"},{"field":"' + liability_rates_type_field + '", "operator":"is", "value":"Cyber"}]}';

    //const query_url = rates_url + search_data;
    //log_console('query_url: ' + query_url);
    //const responseLiabilityData = await getKnackRecord(query_url);
    //log_console('responseLiabilityData');
    log_console(responseLiabilityData);
    data[cert_liability_rate_conn_field] = [responseLiabilityData.records[0].id];
    data[cert_current_rate_field] = responseLiabilityData.records[0][liability_rates_premium_field_raw];
  } else {
    data[cert_retired_lawyers_discount_rate_field] = yearData[year_retired_lawyers_discount_rate_field_raw];
    //const applicationData = getApplicationRecord(record[cert_application_connect_field_raw][0].id);
    data[cert_previous_rate_field] = max_liability_var;
    data[cert_credit_rate_field] = yearData[year_credit_rate_field_raw];
    //data[cert_commission_rate_field] = yearData[year_commission_rate_field_raw];
  }
  log_console(data);
  await updateCertificateRecordTest(record.id, data);
  //Knack.hideSpinner();
  await approveCertificate(record.id);
  Swal.fire({
    title: "Finished!",
    showConfirmButton: false,
    timer: 1000
  });
  await redirectAsync(record, newinv_id);
}

/*async function updateEndorsementDataOnSubmit(record) {
  log_console('Function: updateEndorsementDataOnSubmit');
  //log_alert('In Endorsement submit');
  Knack.showSpinner();
  log_console(record);
  var newinv = 0;
  var newinv_id = '';
  var invoiceData;
  if (record[cert_cert_type_field] == 'Firm Name Change') {
    return;
  }
  const provinceData = await getProvinceRecord(record[cert_prov_connect_field_raw][0].id);
  log_console(provinceData);
  if (record[cert_cert_type_field] == 'Cyber' || record[cert_cert_type_field] == 'Liability Increase') {
    log_console('Add Invoice Record');
    var data = {};
    data[inv_application_connect_field] = [record[cert_application_connect_field_raw][0].id];
    data[inv_year_connect_field] = [record[cert_year_connect_field_raw][0].id];
    data[inv_prov_taxtype_field] = provinceData[prov_tax_type_field];
    invoiceData = await addInvoiceRecord(data);
    newinv = 1;
    newinv_id = invoiceData.record.id;
    log_console('Invoice Data Rec with id: ' + newinv_id);
    log_console(invoiceData);
  }

  log_console(record[cert_year_connect_field_raw][0].id);
  let yearData = await getYearsRecord(record[cert_year_connect_field_raw][0].id);
  log_console(yearData);
  log_console('Now Update Certificate record');
  var data = {};
  if (newinv == 1) {
    data[cert_inv_connect_field] = [invoiceData.record.id];
  }
  data[cert_prov_tax_rate_field] = provinceData[prov_tax_rate_field_raw];
  if (record[cert_cert_type_field] == 'Cyber') {
    data[cert_retired_lawyers_discount_rate_field] = yearData[year_retired_lawyers_cyber_discount_rate_field_raw];
  } else {
    data[cert_retired_lawyers_discount_rate_field] = yearData[year_retired_lawyers_discount_rate_field_raw];
    //const applicationData = getApplicationRecord(record[cert_application_connect_field_raw][0].id);
    data[cert_previous_rate_field] = max_liability_var;
    data[cert_credit_rate_field] = yearData[year_credit_rate_field_raw];
    data[cert_commission_rate_field] = yearData[year_commission_rate_field_raw];
  }
  log_console(data);
  Knack.showSpinner();
  await updateCertificateRecordTest(record.id, data);
  Knack.hideSpinner();
  await redirectAsync(record, newinv_id);
}*/

async function redirectAsync(record, invId) {
  const application_declaration_redirect = '#law-offices-details/view-application-details/' + record[cert_application_connect_field_raw][0].id + '/invoice-details2/' + invId + '/';
  log_console('redirect: ' + application_declaration_redirect);
  //let redirect_id = responseAppData.records[0].id;
  // console.log('Redirect Here: '+ redirect_id);
  // window.location.replace(application_update_redirect + redirect_id);*/
  window.location.replace(application_declaration_redirect);
}

// Get Years Record
async function getYearsRecord(recordid) {
  const url = 'https://api.knack.com/v1/pages/' + api_data_scene + '/views/' + years_view + '/records/' + recordid;
  log_console("In getYearsRecord");
  return await getKnackRecord(url);
}

// Update Years Record
async function updateYearsRecord(recordid, data) {
  const url = 'https://api.knack.com/v1/pages/' + api_data_scene + '/views/' + years_view + '/records/' + recordid;
  log_console("In updateYearsRecord");
  return await updateKnackRecord(url, data);
}

// Get Proivnce Record
async function getProvinceRecord(recordid) {
  const url = 'https://api.knack.com/v1/pages/' + api_data_scene + '/views/' + province_view + '/records/' + recordid;
  log_console("In getProvinceRecord");
  const provinceData = await getKnackRecord(url);
  localStorage.prov_tax_type_field = provinceData[prov_tax_type_field];
  localStorage.prov_tax_rate_field_raw = provinceData[prov_tax_rate_field_raw]
  log_console('localStorage: prov_tax_type_field: ' + localStorage.prov_tax_type_field + ' prov_tax_rate_field_raw: ' + localStorage.prov_tax_rate_field_raw);
  return provinceData;
}

// Get Law Society Record
async function getLSRecord(recordid) {
  const url = 'https://api.knack.com/v1/pages/' + api_data_scene + '/views/' + ls_view + '/records/' + recordid;
  log_console("In getLSRecord");
  return await getKnackRecord(url);
}

// Get Application Record
async function getApplicationRecord(recordid) {
  const url = 'https://api.knack.com/v1/pages/' + api_data_scene + '/views/' + api_applications_view + '/records/' + recordid;
  log_console("In getApplicationRecord");
  return await getKnackRecord(url);
}

// Get Application Record for Admin User
async function getApplicationRecordAdmin(recordid) {
  const url = 'https://api.knack.com/v1/pages/' + all_applications_scene + '/views/' + all_applications_api_view + '/records/' + recordid;
  log_console("In getApplicationRecord");
  return await getKnackRecord(url);
}

// Update Certificate Record
async function updateCertificateRecordTest(certId, data) {
  log_console('Function: updateCertificateRecordTest');
  log_console(certId);
  log_console(data);
  //log_console
  //Knack.showSpinner();
  const url = 'https://api.knack.com/v1/pages/' + api_application_data_scene + '/views/' + api_certificate_view + '/records/' + certId;
  return await updateKnackRecord(url, data);
}

// Add Certificate Record
async function addCertificateRecord(data) {
  log_console('Function: addCertificateRecord');
  log_console(data);
  //log_console
  //Knack.showSpinner();
  const url = 'https://api.knack.com/v1/pages/' + api_application_data_scene + '/views/' + api_certificate_view + '/records/';
  return await addKnackRec(url, data);
}

// Add Invoice Record
async function addInvoiceRecord(data, adminTesting) {
  log_console('Function: addInvoiceRecord');
  //Knack.showSpinner();
  // Get next Invoice Number
  const nextInvNbr = await getNextInvNbr(data[inv_year_connect_field], adminTesting);
  data[inv_invnbr_field] = nextInvNbr;
  const url = 'https://api.knack.com/v1/pages/' + api_application_data_scene + '/views/' + api_invoice_view + '/records';
  return await addKnackRec(url, data);
}

// Update Invoice Record With Next InvNbr
async function updateInvoiceRecordWithInvNbr(id, yearin, adminTesting) {
  log_console('Function: updateInvoiceRecordWithInvNbr');
  log_console('Value: id: ' + id + ' yearin: ' + yearin + ' adminTesting: ' + adminTesting);
  var data = {};
  //Knack.showSpinner();
  // Get next Invoice Number
  const nextInvNbr = await getNextInvNbr(yearin, adminTesting);
  data[inv_invnbr_field] = nextInvNbr;
  const url = 'https://api.knack.com/v1/pages/' + api_application_data_scene + '/views/' + api_invoice_view + '/records/' + id;
  return await updateKnackRecord(url, data);
}

// Update Invoice Record With Next InvNbr
async function updateInvoiceRecord(id, data) {
  log_console('Function: updateInvoiceRecord');
  log_console('Value: id: ' + id + ' data: ' + data);
  const url = 'https://api.knack.com/v1/pages/' + api_application_data_scene + '/views/' + api_invoice_view + '/records/' + id;
  return await updateKnackRecord(url, data);
}

async function getNextInvNbr(yearId, adminTesting) {
  log_console('Function: getNextInvNbr');
  const yearData = await getYearsRecord(yearId);
  if (adminTesting == 'Yes') {
    return 'TST-' + yearData[year_year_field] + '-' + getRndInteger(0000, 9999)
  } else {
    var data = {};
    data[year_next_invnbr_field] = yearData[year_next_invnbr_field] + 1;
    await updateYearsRecord(yearId, data);
    return 'VEP-' + yearData[year_year_field] + '-' + yearData[year_next_invnbr_field]
  }
}

// Redirect Declaration to Invoice screen on Submit
//$(document).on('knack-form-submit.' + declaration_view, function (event, view, record) {
//  log_console('View: declaration_view ' + declaration_view);
//  log_console(view);
//invRedirect(view.scene);

//const relatedid = '?view-application-details2_id=' + record.id;
//const vep_search_val = relatedid + '&filters=[{"field":"' + certificates_certificate_type_field + '", "operator":"is", "value":"VEP"}]';
//const vep_search_val = relatedid;
//const vep_search_val = '&filters={"match":"and","rules":[{"field":"' + certificates_certificate_type_field + '", "operator":"is", "value":"VEP"},{"field":"' + cert_application_connect_field + '", "operator":"is", "value":"' + record.id + '"}]}';
//redirectDeclaration(vep_search_val, record);
//});

async function redirectDeclaration(query, record) {
  log_console('Function: redirectDeclaration');
  const certQueryData = await getCertificatebyQuery(query);
  log_console(certQueryData);
  //#law-offices-details-test/view-application-details/5e36ddb4238a930018f43a1c/invoice-details/5e811a8de812950015939709/
  const application_declaration_redirect = '#law-offices-details/view-application-details/' + record.id + '/invoice-details/' + certQueryData.records[0][cert_inv_connect_field_raw][0].id + '/';
  log_console('redirect: ' + application_declaration_redirect);
  //let redirect_id = responseAppData.records[0].id;
  // console.log('Redirect Here: '+ redirect_id);
  // window.location.replace(application_update_redirect + redirect_id);*/
  window.location.replace(application_update_redirect);
}

async function getCertificatebyQuery(query) {
  log_console("Function: getCertificatebyQuery");
  //const url = 'https://api.knack.com/v1/pages/' + api_application_data_scene + '/views/' + api_certificate_view + '/records';
  const url = 'https://api.knack.com/v1/pages/' + api_application_data_scene + '/views/' + api_certificate_view + '/records' + query;

  log_console("url: " + url);

  return await getKnackRecord(url);
}

$(document).on('knack-scene-render.scene_320', function (event, scene) {
  Swal.fire({
    text: 'Invoice will be emailed to Invoice Email address on application.',
    confirmButtonColor: '#af5149',
    confirmButtonAriaLabel: 'Ok'
  })
  const application_update_redirect = '#law-offices-details/';
  //console.log('Redirect Here: '+ redirect_id);
  //window.location.replace(application_update_redirect + redirect_id);
  window.location.replace(application_update_redirect);
});

var view_firm_name = '';
// Set Liability Rates on Add endorsements
$(document).on('knack-view-render.' + add_endorsement_view, function (event, view, data) {
  log_console('View: add_endorsement_view ' + add_endorsement_view);
  log_console(view);
  //log_console(view.scene);
  //const appId = view.scene.scene_id;
  setViewFirmName(view.scene.scene_id);

  var y = document.querySelector("#kn-input-section-1589657654857");
  //log_console(y);
  y.style.display = "none";
  var z = document.querySelector(".kn-submit");
  z.style.display = "none";
  //var submitbutton = $("#" + add_endorsement_view + "-" + cert_cert_type_field).val();
  //log_console(testjs);
  $("#" + add_endorsement_view + "-" + cert_cert_type_field).on("click", function () {
    var submitbutton = $("#" + add_endorsement_view + "-" + cert_cert_type_field).val();
    log_console(submitbutton);
    if (submitbutton != "") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }
    if ($("#" + add_endorsement_view + "-" + cert_cert_type_field).val() == 'Cyber') {
      log_console('Cyber Selected');
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  })
  $("#" + cert_firm_name_change_new_field).blur(function () {
    log_console('firm name change left');
    $("label[for=" + cert_firm_name_change_transfer_lawyers_field + "]").html("<span>Will all Lawyers from " + view_firm_name + " be transferring to " + $("#" + cert_firm_name_change_new_field).val() + "?</span> <span class=kn-required>*</span>");
  });
  doLiabilityCheck(view.scene.scene_id);
});

async function setViewFirmName(appId) {
  const appData = await getApplicationRecord(appId);
  log_console(appData);
  log_console(appData[application_firm_name_field]);
  view_firm_name = appData[application_firm_name_field];
}

async function doLiabilityCheck(appId) {
  Knack.showSpinner();
  log_console('Function: doLiabilitycheck');
  //log_console(event);
  //const patt = /.*view\-application\-details\/(.*?)\/.*/;
  //const temp = event.currentTarget.URL.split(patt);
  //const applicationId = temp[1];
  //log_console(applicationId);
  // Query Application Record for new
  const applications_url = 'https://api.knack.com/v1/pages/' + api_data_scene + '/views/' + api_applications_view + '/records/' + appId;
  //log_console(applications_url);
  const responseApplicationData = await getKnackRecord(applications_url);
  log_console('responseApplicationData');
  log_console(responseApplicationData);

  // Query Certificate Record for VEP/Liablity Records
  //const search_data = '?filters={"match": "or", "rules": [{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"Liability Increase"},{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"VEP"}]}';
  //const certificates_url = 'https://api.knack.com/v1/pages/' + api_application_data_scene + '/views/' + api_certificate_view + '/records' + search_data;
  //log_console(certificates_url);
  //const responseCertificateData = getKnackRecord(certificates_url);
  //log_console(responseCertificateData);
  // Query Rates Record Applicable
  var search_data = "";
  if (responseApplicationData[application_new_application_field] == "Yes" && responseApplicationData[application_firm_type_field] != 'Retired') {
    search_data = '?filters={"match": "and", "rules": [{"field":"' + liability_rates_year_conn_field + '", "operator":"is", "value":"' + responseApplicationData[application_year_conn_field_raw][0].id + '"},{"field":"' + liability_rates_type_field + '", "operator":"is", "value":"VEP"},{"field":"' + liability_rate_new_application_field + '", "operator":"is", "value":"Yes"}]}';
  } else {
    search_data = '?filters={"match": "and", "rules": [{"field":"' + liability_rates_year_conn_field + '", "operator":"is", "value":"' + responseApplicationData[application_year_conn_field_raw][0].id + '"},{"field":"' + liability_rates_type_field + '", "operator":"is", "value":"VEP"}]}';
  }
  const query_url = rates_url + search_data;
  //log_console('query_url: ' + query_url);
  const doresponseLiabilityData = await getKnackRecord(query_url);
  log_console('doresponseLiabilityData');
  log_console(doresponseLiabilityData);

  max_liability_var = responseApplicationData[application_max_liability_field_raw];
  //log_console('max_liability_var is: '+max_liability_var + ' app max: '+ responseLiabilityData[application_max_liability_field_raw]);

  // Check if any Lialbity Rates available
  var options =
    $("#" + add_endorsement_view + "-" + cert_liability_rate_conn_field + " option").filter(function (e) {
      var selectval = $(this).context.value
      var choiceval = $(this).context.text
      //var fields = $(this).context.text.split(regex);
      for (j = 0; j < doresponseLiabilityData.total_records; j++) {
        var checkval = doresponseLiabilityData.records[j][liability_rates_premium_field_raw].replace('\,', '');
        //log_console('Rates: max: ' + max_liability_var + ' Liability: ' + responseLiabilityData.records[j][liability_rates_premium_field_raw]);
        //if (doresponseLiabilityData.records[j][liability_rates_premium_field_raw] > max_liability_var && doresponseLiabilityData.records[j].id == selectval) {
        if (checkval > max_liability_var && doresponseLiabilityData.records[j].id == selectval) {
          return choiceval;
        }
      }
      //  Return Select Option
      if (selectval == "") {
        return choiceval;
      }
    }).clone();
  //console.log(options.length);
  if (options.length > 1) {
    //  Swal.fire({
    //    text: 'Maximum Payment Options Reached. No Liablity Endorsement Available. Returning you to Previous screen.',
    //    confirmButtonColor: '#af5149',
    //    confirmButtonAriaLabel: 'Ok'
    //  })
    //  var url = "#law-offices-details-test/view-application-details/" + applicationId;
    //  $(location).attr('href', url);
    //}
    // View 274 Add Liablity Endorsement Field 433 Liablity Rate in that View        
    $("#" + add_endorsement_view + "-" + cert_liability_rate_conn_field).empty();
    $("#" + add_endorsement_view + "-" + cert_liability_rate_conn_field).append(options);
    $("#" + add_endorsement_view + "-" + cert_liability_rate_conn_field).trigger("liszt:updated");
  }
  var certtypeoptions =
    $("#" + add_endorsement_view + "-" + cert_cert_type_field + " option").filter(function (e) {
      var selectval = $(this).context.value
      var choiceval = $(this).context.text
      //var fields = $(this).context.text.split(regex);
      //for (j = 0; j < responseLiabilityData.total_records; j++) {
      //  if (responseLiablityData.records[j][liability_rates_premium_field_raw] > responseApplicationData[application_max_liability_field_raw] && responseLiabilityData.records[j].id == selectval) {
      //    return choiceval;
      //  }
      //}
      //  Return Select Option
      //if (selectval == "" || (selectval == "Firm Name Change" && responseApplicationData[application_firm_type_field] != 'Retired') || (selectval == "Liability Increase" && options.length > 1) || (selectval == "Cyber" && (responseApplicationData[application_cybercount_field] == 0))) {
      if (selectval == "" || selectval == "Firm Name Change" || (selectval == "Liability Increase" && options.length > 1) || (selectval == "Cyber" && (responseApplicationData[application_cybercount_field] == 0))) {
        return choiceval;
      }
    }).clone();
  $("#" + add_endorsement_view + "-" + cert_cert_type_field).empty();
  $("#" + add_endorsement_view + "-" + cert_cert_type_field).append(certtypeoptions);
  $("#" + add_endorsement_view + "-" + cert_cert_type_field).trigger("liszt:updated");

  Knack.hideSpinner();

}

// Update Certificate Rates if they have changed and assign records to invoice if not alredy done so.
/*$(document).on('knack-form-submit.' + add_law_firm_view, async function (event, view, record) {
  log_console('View: add_law_firm_view '+add_law_firm_view);
  await updateFirmRec(record.id);
});*/

$(document).on('knack-record-create.' + add_law_firm_view + ' knack-record-create.' + user_add_law_firm_view, function (event, view, record) {
  log_console('Record Create: add_law_firm_view ' + add_law_firm_view);
  log_console(record);
  if (record[law_firm_admin_testing_field] == 'Yes') {
    updateFirmRecTesting(record.id)
  } else {
    updateFirmRec(record.id);
  }
});

$(document).on('knack-record-create.' + add_lawyer_view, function (event, view, record) {
  log_console('Record Create: add_lawyer_view ' + add_lawyer_view);
  log_console(record);
  getSimilarityKey(record.id, 'Name VEP', record[lawyers_name_field]);
})

// Call Integromat Get Similarity Key
async function getSimilarityKey(knackId, requestType, requestValue) {
  if (test_mode_on == 1) { return; }
  log_console('Function: getSimilarityKey');
  const url = 'https://hook.integromat.com/rc148bratqo8k2f20ml8oyrkybfxoqaf';
  data = { 'knackId': knackId, 'Type': requestType, 'Value': requestValue };
  const result = await $.ajax({
    url: url,
    type: 'POST',
    data: data,
  }).done(function (responseData) {
    log_console('getSimilarityKey response:');
    log_console(responseData);
    //return responseData;
  }).fail(function (responseData) {
    log_console('getSimilarityKey Failed:');
    log_console(responseData);
    //return responseData;
  });
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function updateFirmRecTesting(recordId) {
  var firmdata = {};
  firmdata[firm_firmid_field] = getRndInteger(10000, 20000);
  await updateFirmDataRec(recordId, firmdata);
}

async function updateFirmRec(recordId) {
  log_console('Function: updateFirmRec');
  const appGlobalData = await getAppGlobalDataRec();
  log_console(appGlobalData);
  var data = {};
  data[app_global_data_firmid_field] = appGlobalData.records[0][app_global_data_firmid_field_raw] + 1;
  await updateAppGlobalDataRec(appGlobalData.records[0].id, data);
  var firmdata = {};
  firmdata[firm_firmid_field] = appGlobalData.records[0][app_global_data_firmid_field_raw];
  await updateFirmDataRec(recordId, firmdata);
}

// Update Global App Data
async function updateAppGlobalDataRec(recId, data) {
  log_console('Function: updateAppGlobalDataRec');
  const url = 'https://api.knack.com/v1/pages/' + app_global_scene + '/views/' + app_global_view + '/records/' + recId;
  await updateKnackRecord(url, data);
}

// Update Invoice Data
async function updateInvDataRec(recId, data) {
  log_console('Function: updateInvDataRec');
  const url = 'https://api.knack.com/v1/pages/' + app_global_scene + '/views/' + app_global_view + '/records/' + recId;
  await updateKnackRecord(url, data);
}

// Update Application Data
async function updateApplicationDataRec(recId, data) {
  log_console('Function: updateApplicationDataRec');
  const url = 'https://api.knack.com/v1/pages/' + api_data_scene + '/views/' + api_applications_view + '/records/' + recId;
  await updateKnackRecord(url, data);
}

// Update Law Firm Data
async function updateFirmDataRec(recId, data) {
  log_console('Function: updateFirmDataRec');
  //const url = 'https://api.knack.com/v1/pages/' + all_applications_scene + '/views/' + law_firms_view + '/records/' + recId;
  const url = 'https://api.knack.com/v1/pages/' + api_data_scene + '/views/' + api_firm_view + '/records/' + recId;
  await updateKnackRecord(url, data);
}

// Get Global App data
async function getAppGlobalDataRec() {
  log_console('Function: getAppGlobalDataRec');
  const url = 'https://api.knack.com/v1/pages/' + app_global_scene + '/views/' + app_global_view + '/records';
  return await getKnackRecord(url);
}

// Knack Record Management
// Query Kanck Records
async function getKnackRecord(url) {
  log_console('Function: getKnackRecord');
  log_console('url: ' + url);
  //log_console('redirect would be: '+current_page);
  //const local_redirect = current_page;
  const result = await $.ajax({
    url: url,
    type: 'GET',
    headers: {
      'Authorization': Knack.getUserToken(),
      'X-Knack-Application-ID': Knack.application_id,
      'X-Knack-REST-API-KEY': 'knack'
      //'Content-Type': 'application/json',
      //'Access-Control-Allow-Origin': 'https://api.knack.com'
    },
    tryCount: 0,
    retryLimit: 3
  }).done(function (responseKnackData) {
    log_console('getKnackRecord done:');
    //log_console(responseKnackData);
  }).fail(function (responseKnackData) {
    log_console('getKnackRecord Failed');
    log_console('url: ' + url);
    log_console(responseKnackData);
    log_console('status: ' + responseKnackData.status);
    Knack.hideSpinner();
    if (responseKnackData.status == 403 || responseKnackData.status == 401) {
      log_console('Found Authorization Error');
      Swal.fire({
        html: 'Your logon requires reauthentication. Please click Ok and Login again.',
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
      //const login_url = 'https://builder.knack.com/calendarclia/2020-vep-v1#login';
      //window.location.replace(login_url);
    } else {
      log_console('Found Network Error');
      this.tryCount++;
      if (this.tryCount <= this.retryLimit) {
        log_console('ajax retry: ' + this.tryCount);
        $.ajax(this);
        return;
      }
      //if (admin_testing == "Yes") {
      Swal.fire({
        html: 'System has encountered a Network Error.  You will be redirected to the previous page to try again.',
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
      log_console('Redirecting to: ' + localStorage.prevPage);
      window.location.replace(localStorage.prevPage);
      //}
    }
  });
  return result;
}

// Update Knack Records
async function updateKnackRecord(url, data) {
  log_console('Function: updateKnackRecord');
  log_console(url);
  log_console(data);
  //log_console('redirect would be: '+current_page);
  //const local_redirect = current_page;
  const result = await $.ajax({
    url: url,
    type: 'PUT',
    headers: {
      'Authorization': Knack.getUserToken(),
      'X-Knack-Application-ID': Knack.application_id,
      'X-Knack-REST-API-KEY': 'knack',
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data),
    tryCount: 0,
    retryLimit: 3
  }).done(function (responseData) {
    log_console('Knack Update response: ');
    log_console(responseData);
    //return responseData;
  }).fail(function (responseKnackData) {
    log_console('Knack Update Failed');
    log_console(responseKnackData);
    Knack.hideSpinner();
    if (responseKnackData.status == 403 || responseKnackData.status == 401) {
      log_console('Found Authorization Error');
      Swal.fire({
        html: 'Your logon requires reauthentication. Please click Ok and Login again.',
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
      //const login_url = 'https://builder.knack.com/calendarclia/2020-vep-v1#login';
      //window.location.replace(login_url);
    } else {
      log_console('Found Network Error: status: ' + responseKnackData.status);
      this.tryCount++;
      if (this.tryCount <= this.retryLimit) {
        log_console('ajax retry: ' + this.tryCount + ' url: ' + url);
        log_console(data);
        $.ajax(this);
        return;
      }
      //if (admin_testing == "Yes") {
      Swal.fire({
        html: 'System has encountered a Network Error.  You will be redirected to the previous page to try again.',
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
      log_console('Redirecting to: ' + localStorage.prevPage);
      window.location.replace(localStorage.prevPage);
      //}
    }
    //return responseData;
  });
  return result;
}
//DEV Approve VEP Scenario URL
const integromatdevapprovevepurl = 'https://hook.integromat.com/oz8zfd7tpchf6yajtjz1kwsz95tiz0to';
//Prod Approve VEP Scenario URL
const integromatprodapprovevepurl = 'https://hook.integromat.com/hnhcj7fw32vjgef7ov8ixiz8ab463v7k';

var integromatapprovevepurl = integromatprodapprovevepurl;
if (test_mode_on == 1) {
  integromatapprovevepurl = integromatdevapprovevepurl;
}
// Call Integromat Approve Record Check for Applications
async function approveApplication(knackId) {
  data = { 'knackId': knackId };
  await integromat(integromatapprovevepurl, data);
}
//DEV Approve VEP Certificates Scenario URL
const integromatdevapprovevepcerturl = 'https://hook.integromat.com/2tkii7vfi33xohw0k11ou223be6ttdkv';
//Prod Approve VEP Certificates Scenario URL
const integromatprodapprovevepcerturl = 'https://hook.integromat.com/fcdk6d818l3ullql6h0bvpx2rpruz72f';

var integromatapprovevepcerturl = integromatprodapprovevepcerturl;
if (test_mode_on == 1) {
  integromatapprovevepcerturl = integromatdevapprovevepcerturl;
}
// Call Integromat Approve Record Check for Certificates
async function approveCertificate(knackId) {
  data = { 'knackId': knackId };
  await integromat(integromatapprovevepcerturl, data)
}

// Add Knack Record
async function addKnackRec(url, data) {
  log_console('Function: addKnackRec');
  log_console(url);
  log_console(data);
  //log_console('redirect would be: '+current_page);
  //const local_redirect = current_page;
  const result = await $.ajax({
    url: url,
    type: 'POST',
    headers: {
      'Authorization': Knack.getUserToken(),
      'X-Knack-Application-ID': Knack.application_id,
      'X-Knack-REST-API-KEY': 'knack',
      'Content-Type': 'application/json'
      //'Access-Control-Allow-Origin': 'https://api.knack.com'
    },
    data: JSON.stringify(data),
  }).done(function (responseData) {
    log_console('Knack Add response: ');
    log_console(responseData);
    //return responseData;
  }).fail(function (responseKnackData) {
    log_console('Knack Add Failed');
    log_console(responseKnackData);
    Knack.hideSpinner();
    if (responseKnackData.status == 403 || responseKnackData.status == 401) {
      log_console('Found Authorization Error');
      Swal.fire({
        html: 'Your logon requires reauthentication. Please click Ok and Login again.',
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
      //const login_url = 'https://builder.knack.com/calendarclia/2020-vep-v1#login';
      //window.location.replace(login_url);
    } else {
      log_console('Found Network Error');
      //if (admin_testing == "Yes") {
      Swal.fire({
        html: 'System has encountered a Network Error.  You will be redirected to the previous page to try again.',
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
      log_console('Redirecting to: ' + localStorage.prevPage);
      window.location.replace(localStorage.prevPage);
      //}
    }
    //return responseData;
  });
  return result;
}
//var currProv = '';
//var currLS = '';
var currProvName = '';
var currLSName = '';
$(document).on('knack-scene-render.' + create_application_scene, function (event, scene) {
  log_console('Scene: create_application_scene ' + create_application_scene);
  //currProvName = $("#kn-input-" + application_prov_conn_field + " :checked").text();
  currProvName = $("#kn-input-" + application_prov_conn_field + " :checked").closest('label').find('span').html();
  //setProvData(0);
  //currLSName = $("#kn-input-" + application_ls_conn_field + " :checked").text();
  currLSName = $("#kn-input-" + application_ls_conn_field + " :checked").closest('label').find('span').html();

  //setLSData(0);

  log_console($("#" + identification_view + "-" + application_firm_type_field).val());
  if ($("#" + identification_view + "-" + application_firm_type_field).val() == 'Retired') {
    $("label[for=" + application_firm_name_field + "]").html("<span>Name of Retired Lawyer</span> <span class=kn-required>*</span>");
  } else {
    $("label[for=" + application_firm_name_field + "]").html("<span>Name of Firm</span> <span class=kn-required>*</span>");
  }
  //log_console('scene_247');
  $("#" + identification_view + "-" + application_firm_type_field).on("click", function () {
    //log_alert('Clicked field');
    if ($("#" + identification_view + "-" + application_firm_type_field).val() == 'Retired') {
      log_console('Found Retired');
      $("label[for=" + application_firm_name_field + "]").html("<span>Name of Retired Lawyer</span> <span class=kn-required>*</span>");
    } else {
      $("label[for=" + application_firm_name_field + "]").html("<span>Name of Firm</span> <span class=kn-required>*</span>");
    }
  });

  log_console('currProvName: ' + currProvName + ' currLSName: ' + currLSName);
  $("#kn-input-" + application_prov_conn_field).on("click", function () {
    setProvData(1);
  });

  log_console('currLSName: ' + currLSName + ' curProvName: ' + currProvName);
  $("#kn-input-" + application_ls_conn_field).on("click", function () {
    setLSData(1);
  });
})

async function setProvData(showMsg) {
  log_console('Function: setProvData');
  //log_console($("#kn-input-" + application_prov_conn_field + " :checked").val());
  log_console($("#kn-input-" + application_prov_conn_field + " :checked").closest('label').find('span').html());
  currProvName = $("#kn-input-" + application_prov_conn_field + " :checked").closest('label').find('span').html();
  //if ($("#kn-input-" + application_prov_conn_field + " :checked").val() != '') {
  if ($("#kn-input-" + application_prov_conn_field + " :checked").closest('label').find('span').html() != '') {
    if (currProvName != currLSName && showMsg == 1 && currLSName != null && currProvName != null) {
      Swal.fire({
        html: 'Law Society: ' + currLSName + ' does not match firm province: ' + currProvName,
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
    }
  }
  log_console('setProvData: currLSName: ' + currLSName + ' curProvName: ' + currProvName);
}

async function setLSData(showMsg) {
  log_console('Function: setLSData');
  //log_console($("#kn-input-" + application_ls_conn_field + " :checked").val());
  log_console($("#kn-input-" + application_ls_conn_field + " :checked").closest('label').find('span').html());
  //log_console('currProv: ' + currProv);
  currLSName = $("#kn-input-" + application_ls_conn_field + " :checked").closest('label').find('span').html();
  //if ($("#kn-input-" + application_ls_conn_field + " :checked").val() != '') {
  if ($("#kn-input-" + application_ls_conn_field + " :checked").closest('label').find('span').html() != '') {
    if (currProvName != currLSName && showMsg && currProvName != '' && currProvName != null && currLSName != null) {
      Swal.fire({
        html: 'Law Society: ' + currLSName + ' does not match firm province: ' + currProvName,
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
    }
  }
  log_console('setLSData: currLSName: ' + currLSName + ' curProvName: ' + currProvName);
}

$(document).on('knack-view-render.' + identification_view, function (event, view, data) {
  log_console('View: identification_view ' + view.key);
  //log_console(data);
  //if(data[application_firmid_field] =="") {
  //  log_console('Need to fix FirmID');
  //}
  //if (typeof data[application_admin_testing_field] === 'undefined') {
  //  log_console('No admin_testing field');
  //} else {
  //  admin_testing = data[application_admin_testing_field];
  //}
  log_console('admin_testing: ' + admin_testing);
  $("#" + identification_view + " .kn-button").on("click", function () {
    //log_console('Inactive Value:' + $("#kn-input-" + application_inactive_lawyer_field).val());
    if ($("#" + identification_view + "-" + application_firm_type_field).val() == 'Retired' && $("#kn-input-" + application_inactive_lawyer_field + " :checked").val() == 'No') {
      Swal.fire({
        html: 'An active Lawyer may not apply for retiree coverage. Please update your status or change the Firm selection.',
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      })
      return false;
    }
    //if (currProv != currLS) {
    if (currProvName != currLSName) {

      const confirmMsg = 'Law Society: ' + currLSName + ' does not match firm province: ' + currProvName + '. Click Cancel to return and fix or OK to continue.';
      if (!confirm(confirmMsg)) return false;
    }
  });
})

$(document).on('knack-record-update.' + identification_view + ' knack-record-update.' + sacyber_identification_view, function (event, view, record) {
  log_console('Record Update: identification_view ' + identification_view);
  log_console(record);
  updateIdentification(record, view.key);
});

async function updateIdentification(record, viewKey) {
  log_console('Function: updateIdentification');
  log_console('working on view: ' + viewKey);
  Knack.showSpinner();
  await getProvinceRecord(record[application_prov_conn_field_raw][0].id);
  let search_val = '?filters={"match": "and", "rules": [{"field":"' + inv_app_type_field + '", "operator":"is", "value":"Excess"},{"field":"' + inv_application_connect_field + '", "operator":"is", "value":"' + record.id + '"}]}';
  if (viewKey == sacyber_identification_view) {
    search_val = '?filters={"match": "and", "rules": [{"field":"' + inv_app_type_field + '", "operator":"is", "value":"CyberSA"},{"field":"' + inv_application_connect_field + '", "operator":"is", "value":"' + record.id + '"}]}';
  }
  const url = 'https://api.knack.com/v1/pages/' + api_data_scene + '/views/' + api_inv_view + '/records' + search_val;
  var invRecId = "";
  var invNbr = "";
  if (record[application_vep_invoice_field] == "" && viewKey == identification_view) {
    const invDataRecord = await getKnackRecord(url);
    invRecId = invDataRecord.records[0].id
    log_console(invDataRecord);
    if (invDataRecord.records[0][inv_invnbr_field] == "") {
      const invUpdateData = await appUpdateInv(record, invDataRecord.records[0].id);
      invNbr = invUpdateData.record[inv_invnbr_field];
    } else {
      invNbr = invDataRecord.records[0][inv_invnbr_field];
    }
    var appDataUpdate = {};
    appDataUpdate[application_vep_invoice_field] = invNbr + ":" + invRecId;
    updateApplicationDataRec(record.id, appDataUpdate);
  }
  if (record[application_vep_invoice_field] != "" && viewKey == identification_view) {
    invNbr = record[application_vep_invoice_field].split(':')[0];
    invRecId = record[application_vep_invoice_field].split(':')[1];
  }
  if (record[application_sacyber_invoice_field] == "" && viewKey == sacyber_identification_view) {
    const invDataRecord = await getKnackRecord(url);
    invRecId = invDataRecord.records[0].id
    log_console(invDataRecord);
    if (invDataRecord.records[0][inv_invnbr_field] == "") {
      const invUpdateData = await appUpdateInv(record, invDataRecord.records[0].id);
      log_console('Fixing app sacyber invoice field');
      log_console(invUpdateData);
      invNbr = invUpdateData.record[inv_invnbr_field];
    } else {
      invNbr = invDataRecord.records[0][inv_invnbr_field];
    }
    var appDataUpdate = {};
    appDataUpdate[application_sacyber_invoice_field] = invNbr + ":" + invRecId;
    updateApplicationDataRec(record.id, appDataUpdate);
  }
  if (record[application_sacyber_invoice_field] != "" && viewKey == sacyber_identification_view) {
    invNbr = record[application_sacyber_invoice_field].split(':')[0];
    invRecId = record[application_sacyber_invoice_field].split(':')[1];
  }

  if (viewKey == identification_view) {
    localStorage.application_vep_invoice_field = invRecId;
  } else {
    localStorage.application_sacyber_invoice_field = invRecId;
  }

  //appDataUpdate[application_sacyber_invoice_field] = invDataRecord.records[0].id;
  getSimilarityKey(record.id, 'Firm VEP', record[application_firm_name_field]);
  updateFirmName(record[application_firm_conn_field_raw][0].id, record[application_firm_name_field]);
  //if (viewKey == identification_view) {
  //  updateProvData(record);
  //}
  log_console('localStorage.application_vep_invoice_field: ' + localStorage.application_vep_invoice_field);
  log_console('localStorage.application_sacyber_invoice_field: ' + localStorage.application_sacyber_invoice_field);
  Knack.hideSpinner();
}


const api_inv_view = 'view_898';

async function appUpdateInv(record, invId) {
  log_console('Function: appUpdateInv');
  const data = await updateInvoiceRecordWithInvNbr(invId, record[application_year_conn_field_raw][0].id, record[application_admin_testing_field]);
  log_console(data);
  return data;
  //appDataUpdate[application_vep_invoice_field] = invoiceData.record[inv_invnbr_field]+':'+newinv_id;
}

async function addAppInv(record) {
  log_console('Function: addAppInv');
  log_console(record);
  //const provinceData = await getProvinceRecord(record[application_prov_conn_field_raw][0].id);
  var invData = {};
  invData[inv_application_connect_field] = [record.id];
  invData[inv_year_connect_field] = [record[application_year_conn_field_raw][0].id];
  invData[inv_firm_id_field] = record[application_firmid_field];
  //invData[inv_prov_taxtype_field] = provinceData[prov_tax_type_field];
  invData[inv_prov_taxtype_field] = localStorage.prov_tax_type_field;
  invData[inv_admin_testing_field] = record[application_admin_testing_field];
  invoiceData = await addInvoiceRecord(invData, record[application_admin_testing_field]);
  newinv_id = invoiceData.record.id;
  log_console('Invoice Data Rec with id: ' + newinv_id);
  log_console(invoiceData);
  log_console('Update VEP App Invoice Information');
  log_console('SACyber Invoice Field: ' + record[application_sacyber_invoice_field] + ' SACyber Selected: ' + record[application_cybersa_selected_field]);
  var appDataUpdate = {};
  appDataUpdate[application_vep_invoice_field] = invoiceData.record[inv_invnbr_field] + ':' + newinv_id;
  //localStorage.application_vep_invoice_field = newinv_id;
  //localStorage.application_sacyber_invoice_field = record[application_sacyber_invoice_field].split(":")[1];
  if (record[application_sacyber_invoice_field] == "" && record[application_cybersa_selected_field] == "Yes") {
    appDataUpdate[application_sacyber_invoice_field] = invoiceData.record[inv_invnbr_field] + ':' + newinv_id;
    //localStorage.application_sacyber_invoice_field = newinv_id;
  }
  appUpdate = await updateApplicationDataRec(record.id, appDataUpdate);
  //log_console('localStorage application_vep_invoice_field: '+localStorage.application_vep_invoice_field+' application_sacyber_invoice_field: '+localStorage.application_sacyber_invoice_field);
}

async function updateProvData(record) {
  log_console('Function: updateProvData');
  if (record[application_vepcount_field] == 1 || record[application_cybercount_field] == 1) {
    //const provinceData = await getProvinceRecord(record[application_prov_conn_field_raw][0].id);
    if (record[application_vepcount_field] == 1) {
      log_console('Updating VEP Record with Prov Data')
      //Update Province Info
      const vep_search_val = '?view-application-details2_id=' + record.id + '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"VEP"}]';
      const certResponsedata = await getCertificatebyQuery(vep_search_val);
      var data = {};
      data[cert_prov_connect_field] = [record[application_prov_conn_field_raw][0].id];
      //data[cert_prov_tax_rate_field] = provinceData[prov_tax_rate_field_raw];
      data[cert_prov_tax_rate_field] = localStorage.prov_tax_rate_field_raw;
      updateCertificateRecordTest(certResponsedata.records[0].id, data);
      //Update Invoice Province Info
      var invdata = {};
      //invdata[inv_prov_taxtype_field] = provinceData[prov_tax_type_field];
      invdata[inv_prov_taxtype_field] = localStorage.prov_tax_type_field;
      updateInvoiceRecord(certResponsedata.records[0][cert_inv_connect_field_raw][0].id, invdata);
    }
    if (record[application_cybercount_field] == 1) {
      log_console('Updating Cyber Record with Prov')
      //Update Province Info
      const vep_search_val = '?view-application-details2_id=' + record.id + '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"Cyber"}]';
      const certResponsedata = await getCertificatebyQuery(vep_search_val);
      var data = {};
      data[cert_prov_connect_field] = [record[application_prov_conn_field_raw][0].id];
      //data[cert_prov_tax_rate_field] = provinceData[prov_tax_rate_field_raw];
      data[cert_prov_tax_rate_field] = localStorage.prov_tax_rate_field_raw;
      updateCertificateRecordTest(certResponsedata.records[0].id, data);
    }
  }
}

async function updateFirmName(knackId, newName) {
  log_console('Function: updateFirmName');
  data = {};
  data[law_firm_firm_name_field] = newName;
  log_console(data);
  updateResponse = await updateFirmDataRec(knackId, data);
  //log_console(updateResponse);
}

/*
async function fixBlankInvNbr(id) {
  log_console('Function: fixBlankInvNbr');
  invoiceRecordData = await getInvoiceRecord(id);
  log_console(invoiceRecordData);
  for (i = 0; i < invoiceRecordData.records.length; i++) {
    if (invoiceRecordData.records[i][inv_invnbr_field] == "") {
      log_console('Update InvNbr Here');
      updateInvoiceRecordWithInvNbr(invoiceRecordData.records[i].id, invoiceRecordData.records[i][inv_year_connect_field_raw][0].id, invoiceRecordData.records[i][inv_admin_testing_field]);
    }
  }
}*/

// Get Claims Data Record
async function getClaimsDataRec(url) {
  log_console("Function: getClaimsDataRec");
  log_console("url: " + url);
  return await getKnackRecord(url);
}

const claims_export_scene = 'scene_158';
const claims_export_view = 'view_330';

$(document).on('knack-view-render.' + update_claim_view, function (event, view, data) {

  log_console("In update claim scene render");
  log_console(update_claim_scene);
  $("#" + update_claim_view + "-" + claims_status_field).on("click", function () {
    if ($("#" + update_claim_view + "-" + claims_status_field).val() == 'CLOSED') {
      checkClaimsCloseData(data);
    }
  });

})

async function checkClaimsCloseData(data) {
  const url = 'https://api.knack.com/v1/pages/' + claims_export_scene + '/views/' + claims_export_view + '/records/' + data.id;
  log_console("url: " + url);
  log_console("In checkClaimsCloseData");
  var claimdata = await getKnackRecord(url);
  log_console('Found Closed Record Attempt');
  log_console(claimdata);
  log_console(claimdata[claims_clia_res_deductible_field]);
  var msg;
  var msgcheck = 0;
  closed_test.forEach(function (item, index) {
    //log_console('in forEach:');
    //log_console(item, index);
    if (claimdata[item] != "" && claimdata[item] != "0.00") {
      msg = msgtext[index] + " is not 0. Current value is: " + claimdata[item];
      msgcheck = 1;
    }

  });
  closed_test_num.forEach(function (item, index) {
    //log_console('in forEach:');
    //log_console(item, index);
    if (claimdata[item] != 0) {
      msg = msgtext_num[index] + " is not 0. Current value is: " + claimdata[item];
      msgcheck = 1;
    }
  });

  if (msgcheck == 1) {
    $("#" + update_claim_view + "-" + claims_status_field).val('OPEN');
    Swal.fire({
      html: 'Unable to Close Record: ' + msg,
      confirmButtonColor: '#af5149',
      confirmButtonAriaLabel: 'Ok'
    })
  }
}

//DEV Integromat Dev Invoice URL
const integromatdevinvoiceurl = 'https://hook.integromat.com/5rewimu43ib985tkxpnkqjy47owbqt4w';
//DEV Integromat Prod Invoice URL
const integromatprodinvoiceurl = 'https://hook.integromat.com/gvcdmkl88r6fgbhl1yk261l35fhuxyre';
var integromatinvoiceurl = integromatprodinvoiceurl;
if (test_mode_on == 1) {
  integromatinvoiceurl = integromatdevinvoiceurl;
}

var payment_application_rec_id = "";
const invoice_admin_testing_details_view = 'view_852';
const inv_invoice_sent_field = 'field_1608';

//$(document).on('knack-view-render.' + payment_email_view + 'knack-view-render.' + invoice_admin_testing_details_view, function (event, view, data) {
$(document).on('knack-view-render.' + invoice_details_view + ' knack-view-render.' + invoice_admin_testing_details_view, function (event, view, data) {
  log_console('payment_email_view: ' + view.key);
  log_console(data);
  log_console('Invoice recId: ' + data.id);
  payment_application_rec_id = data[inv_application_connect_field_raw][0].id;
  if (data[inv_invoice_sent_field] != "Yes") {
    log_console('Send Invoice to User');
    let invData = { 'knackId': data.id };
    integromat(integromatinvoiceurl, invData);
  }
})

// Manage Click on payment Email button
$(document).on('knack-view-render.' + payment_email_view + ' knack-view-render.' + payment_admin_testing_email_view, function (event, view, data) {
  log_console('View: payment_email_view ' + view.key);
  //log_console(view);
  //log_console(data);
  //log_console(view.scene.scene_id);
  var x = document.getElementsByClassName('kn-link-page');
  log_console(x);
  $(x).on("click", function () {
    log_console('clicked');
    Swal.fire({
      text: 'You have chosen to be invoiced and your invoice will arrive by email once it is generated. Thank you.',
      confirmButtonColor: '#af5149',
      confirmButtonAriaLabel: 'Ok'
    })
    if (view.key == payment_admin_testing_email_view) {
      data = { 'knackId': view.scene.scene_id };
      integromat(integromatinvoiceurl, data);
    }
    var w = document.getElementsByClassName('ang-link');
    //const application_declaration_redirect = '#law-offices-details/view-application-details/' + scene.scene_id;
    log_console('redirect: ' + $(w).attr('href'));
    window.location.replace($(w).attr('href'));
  });
  //var oldUrl = $(x)attr('href');
});
//})

/*$(document).on('knack-view-render.' + invoice_details_view, function (event, scene, data) {
  log_console('Scene: invoice_details_view ' + invoice_details_view);
  log_console(data);
  log_console(data[inv_application_connect_field_raw][0].id);

  payment_application_rec_id = data[inv_application_connect_field_raw][0].id;
});*/

const integromatdevreceipturl = 'https://hook.integromat.com/5ncplr4lmkqsbsrhrbnqr828nivyrblv';
const integromatprodreceipturl = 'https://hook.integromat.com/b7ta2547hx2301416tnmzgjrs6tvh84s';
let integromatreceipturl = integromatprodreceipturl;
if (test_mode_on == 1) {
  integromatreceipturl = integromatdevreceipturl;
}

// Invoice Payment Submitted
$(document).on('knack-checkout-submit.' + payment_scene + ' knack-checkout-submit.' + payment_admin_testing_scene, function (event, view, record) {
  log_console('Submit: payment_scene ' + payment_scene);
  //log_console(view);
  log_console(record);
  log_console(record.attributes.payment_record);
  // Send Receipt
  let sendData = { 'knackId': record.attributes.payment_record };
  integromat(integromatreceipturl, sendData);
  // Generate Certificate
  generateCertificate(record.attributes.payment_record);
});

const payment_app_redirect_view = 'view_908';
/*$(document).on('knack-view-render.'+payment_app_redirect_view, function (event, view, data) {
  log_console('View: payment_app_redirect_view '+view.key);
  //log_console(data.id);
  let button_msg;
  let button_redirect;
  if (data[application_submitted_field] != 'Yes' && data[application_vep_selected_field] == 'Yes') {
    button_msg = 'Continue to Excess Application';
    button_redirect = '#home/create-application/'+data.id;
  }
  if (data[application_cybersa_submitted_field] != 'Yes' && data[application_cybersa_selected_field] == 'Yes') {
    button_msg = 'Continue to Cyber Application';
    button_redirect = '#home/pick-application-type/'+data.id+'/stand-alone-cyber/'+data.id
  }
  if (data[application_vep_selected_field] != 'Yes' || data[application_cybersa_selected_field] != 'Yes' ) {
    button_msg = 'Continue to Product Selection';
    button_redirect = '#home/pick-application/'+data.id;
  }
  log_console('button_msg: '+button_msg);
  if (typeof button_msg !== "undefined") {
    $('#'+payment_app_redirect_view).append("<button id='paymentAppRedirect' class='kn-button is-primary'>"+button_msg+"</button>&nbsp;&nbsp;");
    document.getElementById('paymentAppRedirect').addEventListener('click', function() {
      window.location.replace(button_redirect);
    });
  }
})*/

async function generateCertificate(knackId) {
  log_console('Function: generateCertificate');
  //const query = 'https://api.knack.com/v1/pages/' + api_application_data_scene + '/views/' + api_certificate_view + '/records' + '?filters=[{"field":"' + cert_inv_connect_field + '", "operator":"is", "value":"' + knackId + '"}]';;
  //const knackRec = await getKnackRecord(query);
  log_console(knackId);
  //const vep_search_val = '?view-application-details2_id=' + data[inv_application_connect_field_raw][0].id + '&filters=[{"field":"' + cert_inv_connect_field + '", "operator":"is", "value":"' + data.id + '"}]';
  const vep_search_val = '?view-application-details2_id=' + payment_application_rec_id + '&filters=[{"field":"' + cert_inv_connect_field + '", "operator":"is", "value":"' + knackId + '"}]';

  const certResponseData = await getCertificatebyQuery(vep_search_val);
  log_console(certResponseData);
  for (j = 0; j < certResponseData.total_records; j++) {
    log_console('Generate Cert for: ' + certResponseData.records[j].id);
    await integromatCreateCertificate(certResponseData.records[j].id);
  }
}

async function integromatCreateCertificate(knackId) {
  log_console('Function: integromatCreateCertificate');
  if (test_mode_on == 1) { return; }
  const url = 'https://hook.integromat.com/va4jvzewliusxrxowhuywiq4cktusudo';
  data = { 'knackId': knackId };
  const result = await $.ajax({
    url: url,
    type: 'POST',
    data: data,
  }).done(function (responseData) {
    log_console('Integromat done: ');
    log_console(responseData);
    //return responseData;
  }).fail(function (responseData) {
    log_console('Integromat fail');
    log_console(responseData);
    //return responseData;
  });
}


// Update Add Applicatoin Year Select Option
$(document).on('knack-view-render.' + add_application_year_view, function (event, view, data) {
  log_console('View: add_application_year_view ' + view.key);
  log_console(view);
  log_console(data);
  updateAppYearAvail(view.scene);
})

async function updateAppYearAvail(scene) {
  log_console('Function: updateAppYearAvail');
  const search_val = '?filters=[{"field":"' + application_firm_conn_field + '", "operator":"is", "value":"' + scene.scene_id + '"}]';

  const applications_url = 'https://api.knack.com/v1/pages/' + all_applications_scene + '/views/' + all_applications_view + '/records';

  url = applications_url + search_val;

  appResponseData = await getKnackRecord(url);
  log_console(appResponseData);

  var options =
    $("#" + add_application_year_view + '-' + application_year_conn_field + " option").filter(function (e) {
      var selectval = $(this).context.value
      var choiceval = $(this).context.text
      //log_console('selectval: ' + selectval + ' choiceval: ' + choiceval);
      var valid = 1;
      //var fields = $(this).context.text.split(regex);
      for (j = 0; j < appResponseData.total_records; j++) {
        //log_console('Year: ' + appResponseData.records[j][application_year_conn_field_raw][0].id);
        if (selectval == appResponseData.records[j][application_year_conn_field_raw][0].id) {
          valid = 0;
        }

      }
      if (valid == 1) {
        return choiceval;
      }
      //  Return Select Option
      if (selectval == "") {
        return choiceval;
      }
    })
  $("#" + add_application_year_view + '-' + application_year_conn_field).empty();
  $("#" + add_application_year_view + '-' + application_year_conn_field).append(options);
  $("#" + add_application_year_view + '-' + application_year_conn_field).trigger("liszt:updated");

}
const integromatprodapplicationapproveurl = 'https://hook.integromat.com/cg6nksxfkwd3nvd8x4wjus87gfphfpsr';
let integromatapplicationapproveurl = integromatprodapplicationapproveurl;
const application_approval_view = 'view_86';
$(document).on('knack-record-update.' + application_approval_view, function (event, view, record) {
  log_console('Record Update: application_approval_view ' + view.key);
  log_console(record);
  if (record[application_approved_field] == 'Yes') {
    //log_console('Get Excess Invoice id');
    //let search_val = '?filters={"match": "and", "rules": [{"field":"' + inv_app_type_field + '", "operator":"is", "value":"Excess"},{"field":"' + inv_application_connect_field + '", "operator":"is", "value":"'+record.id+'"}]}';
    //const url = 'https://api.knack.com/v1/pages/' + api_data_scene + '/views/' + api_inv_view + '/records' + search_val;
    //const invDataRecord = await getKnackRecord(url);
    //log_console('Reset Invoice Paused Field');
    //var invData = {};
    //invData[inv_invoice_paused_field] = 'No';
    //await updateInvoiceRecord(invDataRecord.records[0].id, invData);

    log_console('Approve Certificates');
    //let dataCert = { 'knackId': invDataRecord.records[0].id, 'approve': 'Yes' };
    let dataCert = { 'knackId': record.id, 'approve': 'Yes' };
    if (test_mode_on == 1) { return; }
    integromat(integromatapplicationapproveurl, dataCert);
    log_console('Send Invoice to User');
    //let data = { 'knackId': invDataRecord.records[0].id };
    //integromat(integromatinvoiceurl, data);
    //approveCertFromApplication(record);
  }
})
/*
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

async function approveCertFromApplication(record) {
  //const vep_search_val = '?view-application-details2_id=' + payment_application_rec_id + '&filters=[{"field":"' + cert_inv_connect_field + '", "operator":"is", "value":"' + knackId + '"}]';

  const vep_search_val = '?view-application-details2_id=' + record.id;

  const certResponseData = await getCertificatebyQuery(vep_search_val);
  log_console(certResponseData);
  for (j = 0; j < certResponseData.total_records; j++) {
    log_console('Update Certs with approval');
    const currDate = new Date();

    //const d = new Date();
    log_console("The current month is " + monthNames[currDate.getMonth()]);
    var data = {};
    data[cert_approved_field] = 'Yes';
    //data[cert_approved_date_field] = record[application_approved_date_field];
    data[cert_approved_date_field] = currDate.getMonth() + 1 + '/' + currDate.getDate() + '/' + currDate.getFullYear() + ' ' + currDate.getHours() + ':' + currDate.getMinutes();

    //data[cert_approved_date_field] = monthNames[currDate.getMonth()] + ' ' + currDate.getDate() + ', ' + currDate.getFullYear() + ' ' + currDate.getHours() + ':' + currDate.getMinutes();
    log_console(data);
    const certificates_url = 'https://api.knack.com/v1/pages/' + coverage_desired_scene + '/views/' + coverage_desired_certificate_view + '/records/' + certResponseData.records[j].id;
    updateResponse = await updateKnackRecord(certificates_url, data);
    log_console(updateResponse);

    //if (certResponseData.records[j][]) {
    //  log_console('Generate Cert for: ' + certResponseData.records[j].id);
    //await integromatCreateCertificate(certResponseData.records[j].id);
    //}
  }
}*/

//const jsurl = 'https://hook.integromat.com/rbxavcn1kd5gvtud1diyyng1pwbe23ot';

const integromatprodquoteurl = 'https://hook.integromat.com/86hoqmn3n2lvdy681omp1q97wret79of';
const integromatdevquoteurl = 'https://hook.integromat.com/rbxavcn1kd5gvtud1diyyng1pwbe23ot';
var quoteurl = integromatprodquoteurl;
if (test_mode_on == 1) {
  quoteurl = integromatdevquoteurl;
}

$(document).on('knack-view-render.' + quote_view, function (event, view, data) {
  log_console('View: quote_view ' + view.key);
  $("#" + quote_view + " .kn-button").on("click", function () {
    log_console('Button: quote_view');
    //if (test_mode_on == 1) { return; }
    //const url = 'https://hook.integromat.com/86hoqmn3n2lvdy681omp1q97wret79of';
    //data = { 'knackId': knackId };
    const result = $.ajax({
      url: quoteurl,
      type: 'POST',
      //data: data,
    }).done(function (responseData) {
      log_console('Integromat Quote done: ');
      log_console(responseData);
      //return responseData;
    }).fail(function (responseData) {
      log_console('Integromat Quote fail');
      log_console(responseData);
      //return responseData;
    });
  });
})

// Set Similatiry Field on Quote Record Create

$(document).on('knack-record-create.' + quote_request_view, function (event, view, record) {
  log_console('Record Create: quote_request_view ' + view.key);
  log_console(record);
  getSimilarityKey(record.id, 'Firm Quote', record[quote_firm_name_field]);
})

// Javascript function to Reset Application for Testing
$(document).on('knack-view-render.' + admin_menu_view, function (event, view, data) {
  log_console('View: admin_menu_view ' + view.key);
  log_console(Knack.getUserAttributes().email);
  log_console(data);
  const userKnackId = Knack.getUserAttributes().email;
  const postdata = { 'userKnackId': userKnackId };
  $('#' + admin_menu_view).append("<button id='addAdminTesting' class='kn-button'>Add Admin Testing</button>&nbsp;&nbsp;");
  document.getElementById('addAdminTesting').addEventListener('click', function () {
    firmName();
  });
  //if (userKnackId == 'julian.swales@gmail.com' || userKnackId == 'sgyorgy@clia.ca') {
  //  $('#'+admin_menu_view).append("<button id='resetCurrentFirm' class='kn-button'>Reset Current Firm</button>&nbsp;&nbsp;");
  //  document.getElementById('resetCurrentFirm').addEventListener('click', function() {
  //    resetCurrentFirm();
  //  });
  //}
  if (test_mode_on != 1) { return; }
  $('#' + admin_menu_view).append("<button id='resetApp' class='kn-button'>Reset Application</button>");
  document.getElementById('resetApp').addEventListener('click', function () {
    log_console('Button Clicked');
    const url = 'https://hook.integromat.com/kiyn72nr0uj0iwtmpe7l7sbwnz9lpeja';
    const result = $.ajax({
      url: url,
      type: 'POST',
      data: postdata,
    }).done(function (responseData) {
      log_console('Integromat Reset Test Application done: ');
      log_console(responseData);
      //return responseData;
    }).fail(function (responseData) {
      log_console('Integromat Reset Test Application fail');
      log_console(responseData);
      //return responseData;
    });
  });
});

// Add Lawyer Invoice Section
$(document).on('knack-view-render.' + add_lawyers_invoice_view, async function (event, view, data) {
  log_console('View: add_lawyers_invoice_view ' + view.key);
  const appData = await getApplicationRecordAdmin(view.scene.scene_id);
  log_console('appData from view');
  log_console(appData);
  //$("#kn-input-" + cert_lawyers_covered_field).on("change", function () {
  //  log_console('In cert lawyers covered change');
  //});
  $("#" + add_lawyers_invoice_view + " .kn-button").on("click", function () {
    log_console('Add Lawyer Invoice Button Clicked');
    if (Number($("#" + cert_lawyers_covered_field).val()) < 0 || $("#" + cert_lawyers_covered_field).val() == "") {
      Swal.fire({
        html: 'Number of Lawyers added must be greater than 0',
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      });
      return false;
    }
    const lawyer_total = Number($("#" + cert_lawyers_covered_field).val()) + appData[application_vep_certificate_lawyer_count_field];
    log_console('lawyer_total: ' + lawyer_total);
    if (lawyer_total > appData[application_count_of_lawyers_field]) {
      Swal.fire({
        html: 'Current Number of Lawyers defined is: ' + appData[application_count_of_lawyers_field] + '<br>Current Number of Lawers on VEP Certificate is: ' + appData[application_vep_certificate_lawyer_count_field] + '<br>Total: ' + lawyer_total + ' is higher. Please fix and resubmit',
        confirmButtonColor: '#af5149',
        confirmButtonAriaLabel: 'Ok'
      });
      return false;
    }
  });
});

// Add Lawyers Invoice Add record will Add Invoice and update record with data and add Cyber Record if existed. 
$(document).on('knack-record-create.' + add_lawyers_invoice_view, function (event, view, record) {
  log_console('Record Create: add_lawyers_invoice_view ' + add_lawyers_invoice_view);
  log_console(record);
  updateAddLawyerRecord(record);
});

// Async Function to process Add Lawyer Invoice Data
async function updateAddLawyerRecord(record) {
  log_console('Function: updateAddLawyerRecord');
  log_console(record[cert_application_connect_field_raw][0].id);
  Knack.showSpinner();
  //const appData = await getApplicationRecordAdmin(record[cert_application_connect_field_raw][0].id);
  //log_console(appData);
  const vep_search_val = '?view-application-details2_id=' + record[cert_application_connect_field_raw][0].id + '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"VEP"}]';
  const vepCertData = await getCertificatebyQuery(vep_search_val);
  log_console(vepCertData);
  const provinceData = await getProvinceRecord(record[cert_prov_connect_field_raw][0].id);
  log_console(provinceData);
  var data = {};
  data[inv_application_connect_field] = [record[cert_application_connect_field_raw][0].id];
  data[inv_year_connect_field] = [record[cert_year_connect_field_raw][0].id];
  data[inv_firm_id_field] = record[cert_firm_id_field];
  data[inv_prov_taxtype_field] = provinceData.records[0][prov_tax_type_field];
  data[inv_admin_testing_field] = record[cert_admin_testing_field];
  data[inv_app_type_field] = 'Excess';
  invoiceData = await addInvoiceRecord(data, record[cert_admin_testing_field]);

  newinv_id = invoiceData.record.id;
  log_console('Invoice Data Rec with id: ' + newinv_id);
  log_console(invoiceData);
  const currDate = new Date();
  var certData = {};
  certData[cert_liability_rate_conn_field] = [vepCertData.records[0][cert_liability_rate_conn_field_raw][0].id];
  certData[cert_prorate_field] = vepCertData.records[0][cert_prorate_field];
  certData[cert_current_rate_field] = vepCertData.records[0][cert_current_rate_field_raw];
  certData[cert_sage_code_field] = vepCertData.records[0][cert_sage_code_field];
  certData[cert_sage_discount_code_field] = vepCertData.records[0][cert_sage_discount_code_field];
  certData[cert_application_date_field] = vepCertData.records[0][cert_application_date_field];
  certData[cert_prov_tax_rate_field] = vepCertData.records[0][cert_prov_tax_rate_field_raw];
  certData[cert_credit_rate_field] = vepCertData.records[0][cert_credit_rate_field_raw];
  certData[cert_approved_field] = 'Yes';
  certData[cert_date_submitted_field] = currDate.getMonth() + 1 + '/' + currDate.getDate() + '/' + currDate.getFullYear() + ' ' + currDate.getHours() + ':' + currDate.getMinutes();
  certData[cert_inv_connect_field] = [newinv_id];
  log_console(certData);
  certUpdate = await updateCertificateRecordTest(record.id, certData);
  log_console(certUpdate);

  // Check to see if Cyber Needs to be added to Invoice. 
  const cyber_search_val = '?view-application-details2_id=' + record[cert_application_connect_field_raw][0].id + '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"Cyber"}]';
  const cyberCertData = await getCertificatebyQuery(cyber_search_val);
  log_console('get Cyber');
  log_console(cyberCertData);
  if (cyberCertData.records.length > 0) {
    var cyberData = {};
    cyberData[cert_application_connect_field] = [cyberCertData.records[0][cert_application_connect_field_raw][0].id];
    cyberData[cert_liability_rate_conn_field] = [cyberCertData.records[0][cert_liability_rate_conn_field_raw][0].id];
    cyberData[cert_prov_connect_field] = [cyberCertData.records[0][cert_prov_connect_field_raw][0].id];
    cyberData[cert_prorate_field] = cyberCertData.records[0][cert_prorate_field];
    cyberData[cert_current_rate_field] = cyberCertData.records[0][cert_current_rate_field_raw];
    cyberData[cert_sage_code_field] = cyberCertData.records[0][cert_sage_code_field];
    cyberData[cert_sage_discount_code_field] = cyberCertData.records[0][cert_sage_discount_code_field];
    cyberData[cert_application_date_field] = cyberCertData.records[0][cert_application_date_field];
    cyberData[cert_prov_tax_rate_field] = cyberCertData.records[0][cert_prov_tax_rate_field_raw];
    cyberData[cert_approved_field] = 'Yes';
    cyberData[cert_date_submitted_field] = currDate.getMonth() + 1 + '/' + currDate.getDate() + '/' + currDate.getFullYear() + ' ' + currDate.getHours() + ':' + currDate.getMinutes();
    cyberData[cert_inv_connect_field] = [newinv_id];
    cyberData[cert_cert_type_field] = 'Add Lawyers Cyber';
    cyberData[cert_year_connect_field] = [cyberCertData.records[0][cert_year_connect_field_raw][0].id];
    cyberData[cert_lawyers_covered_field] = record[cert_lawyers_covered_field];
    cyberData[cert_firm_id_field] = cyberCertData.records[0][cert_firm_id_field];
    cyberData[cert_admin_testing_field] = cyberCertData.records[0][cert_admin_testing_field];
    //cyberData[cert_firm_id_field] = appData[application_firmid_field];
    cyberData[cert_cyber_firewall_field] = cyberCertData.records[0][cert_cyber_firewall_field];
    cyberData[cert_cyber_backup_field] = cyberCertData.records[0][cert_cyber_backup_field];
    cyberData[cert_cyber_virus_field] = cyberCertData.records[0][cert_cyber_virus_field];
    cyberUpdate = await addCertificateRecord(cyberData);
  }
  Knack.hideSpinner();
}


// Call Integromat 
async function integromat(url, data) {
  log_console('Function: integromat');
  const result = await $.ajax({
    url: url,
    type: 'POST',
    data: data,
  }).done(function (responseData) {
    log_console('Integromat response: ');
    log_console(responseData);
    return responseData;
  }).fail(function (responseData) {
    log_console('Integromat Failed');
    log_console(responseData);
    return responseData;
  });
}

const integromatresetcurrentfirmurl = 'https://hook.integromat.com/57iwozrni0289c4ic4jnneeda4irya93';

async function resetCurrentFirm() {
  log_console('Function: resetCurrentFirm');
  Knack.showSpinner();
  const userInfo = await getUserInfo();
  log_console(userInfo);
  const query = '?filters=[{"field":"' + application_firm_conn_field + '", "operator":"is", "value":"' + userInfo.records[0][user_firm_field_raw][0].id + '"}]';
  const url = 'https://api.knack.com/v1/pages/' + api_data_scene + '/views/' + api_applications_view + '/records' + query;
  log_console("url: " + url);
  const appDataRecord = await getKnackRecord(url);
  log_console(appDataRecord);
  log_console(appDataRecord.records[0][application_firmid_field]);
  if (appDataRecord.records[0][application_firmid_field] != "") {
    const data = { 'firmId': appDataRecord.records[0][application_firmid_field] }
    await integromat(integromatresetcurrentfirmurl, data);
    //const integromatData = await integromat(integromatresetcurrentfirmurl, data);
    //log_console(integromatData);
  }
  Knack.hideSpinner();
}

// Request Firm Name and create New Admin Testing Record
async function firmName(userKnackId) {
  log_console('Function: firmName');
  var inputValue = '';
  const { value: firmName } = await Swal.fire({
    title: 'Enter the Firm Name to use for Admin Testing.',
    input: 'text',
    inputLabel: 'Firm Name',
    inputValue: inputValue,
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return 'Firm name is required or Cancel'
      }
    }
  })
  if (firmName) {
    const userInfo = await getUserInfo();
    const userKnackId = userInfo.records[0].id;
    const maxFirmId = await getMaxFirmId();
    log_console(userKnackId);
    log_console(maxFirmId);
    var recMaxId = 50000;
    if (maxFirmId >= recMaxId) {
      recMaxId = Number(maxFirmId) + 1;
    }
    data = { 'userKnackId': userKnackId, 'FirmId': recMaxId, 'FirmName': firmName, 'LawSociety': 'Saskatchewan', 'AdminTest': 'Yes' }
    log_console('Create Firm Sent');
    const integromatprodcreatefirmurl = 'https://hook.integromat.com/vxl36ikrzcai7etm97cbcg3gm88cjhdf';
    const integromatdevcreatefirmurl = 'https://hook.integromat.com/gsrkahayr2iv7y3i28b1tgmgow9h9idp';
    var url = integromatprodcreatefirmurl;
    if (test_mode_on == 1) {
      url = integromatdevcreatefirmurl;
    }
    log_console(data);
    log_console(url);
    integromat(url, data);
    swalMsg = 'Creating Firm ' + firmName + ' with FirmID: ' + recMaxId + ' started.';
    Swal.fire(swalMsg, '', 'success');
    //Swal.fire('Creating Firm started','', 'success');
  } else {
    Swal.fire('Create Admin Testing Firm Cancelled', '', 'info');
  }
}

// Query User Info by logged in email ID.
async function getUserInfo() {
  log_console("Function: getUserInfo");
  const userEmail = Knack.getUserAttributes().email;
  query = '?filters=[{"field":"' + user_email_field + '", "operator":"is", "value":"' + userEmail + '"}]';
  const url = 'https://api.knack.com/v1/pages/' + api_data_scene + '/views/' + api_user_view + '/records' + query;
  log_console("url: " + url);
  return await getKnackRecord(url);
}

// Query Law Firm for Maximum Current Firm Id
async function getMaxFirmId() {
  log_console("Function: getMaxFirmId");
  //query = '?filters=[{"field":"' + firm_firmid_field + '", "operator":"is", "value":"' + userEmail + '"}]';
  const query = '?sort_field=' + firm_firmid_field + '&sort_order=desc';
  const url = 'https://api.knack.com/v1/pages/' + api_data_scene + '/views/' + api_firm_view + '/records' + query;
  log_console("url: " + url);
  const firmData = await getKnackRecord(url);
  const maxFirmId = firmData.records[0][firm_firmid_field];
  return maxFirmId;
}

$(document).on('knack-scene-render.' + admin_scene, function (event, scene) {
  log_console('Scene: admin_scene ' + scene.key);
  localStorage.admin_testing = 'Yes';
})

$(document).on('knack-scene-render.' + sacyber_identification_scene, function (event, scene) {
  log_console('Scene: sacyber_identification_scene ' + scene.key);
  var y = document.getElementById(sacyber_identification_view);
  log_console(y);
  y.style.display = "none";
  currProvName = $("#kn-input-" + application_prov_conn_field + " :checked").closest('label').find('span').html();
  currLSName = $("#kn-input-" + application_ls_conn_field + " :checked").closest('label').find('span').html();
  log_console('currProvName: ' + currProvName + ' currLSName: ' + currLSName);
  $("#kn-input-" + application_prov_conn_field).on("click", function () {
    setProvData(1);
  });
  log_console('currLSName: ' + currLSName + ' curProvName: ' + currProvName);
  $("#kn-input-" + application_ls_conn_field).on("click", function () {
    setLSData(1);
  });
})

$(document).on('knack-view-render.' + sacyber_identification_view, function (event, view, data) {
  log_console('View: sacyber_identification_view ' + view.key);
  Knack.showSpinner();
  log_console('View: sacyber_identification_view ' + view.key);
  log_console(data);
  if (data[application_submitted_field] == "Yes") {
    log_console('matched');
    var pagebutton = document.getElementsByClassName('kn-button');
    log_console(pagebutton);
    Knack.hideSpinner();
    pagebutton[0].click();
  } else {
    var y = document.getElementById(sacyber_identification_view);
    y.style.display = "block";
  }
  $("#" + sacyber_identification_view + " .kn-button").on("click", function () {
    if (currProvName != currLSName) {
      const confirmMsg = 'Law Society: ' + currLSName + ' does not match firm province: ' + currProvName + '. Click Cancel to return and fix or OK to continue.';
      if (!confirm(confirmMsg)) return false;
    }
  });
  Knack.hideSpinner();
})

const sacyber_declaration_view = 'view_1405';
const combined_declaration_view = 'view_1364';
const application_sacyber_declaration_view = 'view_885';
const application_cybersa_forward_field = 'field_1606';
const inv_invoice_paused_field = 'field_1619';
const application_excess_paused_field = 'field_1620';
$(document).on('knack-record-update.' + application_sacyber_declaration_view + ' knack-record-update.' + combined_declaration_view, function (event, view, record) {
  log_console('RecordUpdate: application_sacyber_declaration_view ' + view.key);
  log_console('cybersa_forward: ' + record[application_cybersa_forward_field] + ' excess_paused: ' + record[application_excess_paused_field])

  /* admin_testing = record[application_admin_testing_field];
   var newinv_id = '';
   //if (record[application_cybersa_forward_field] == 'Yes') {
   if (record[application_cybersa_forward_field] == 'Yes' || record[application_excess_paused_field] == 'Yes') {
     Knack.showSpinner();
     if (record[application_sacyber_invoice_field] == record[application_vep_invoice_field]) {
       log_console('Separate Invoices');
       //const provinceData = await getProvinceRecord(record[application_prov_conn_field_raw][0].id);
       //log_console(provinceData);
       var invData = {};
       invData[inv_application_connect_field] = [record.id];
       invData[inv_year_connect_field] = [record[application_year_conn_field_raw][0].id];
       invData[inv_firm_id_field] = record[application_firmid_field];
       //invData[inv_prov_taxtype_field] = provinceData[prov_tax_type_field];
       invData[inv_prov_taxtype_field] = localStorage.prov_tax_type_field;
       invData[inv_admin_testing_field] = record[application_admin_testing_field];
       if (record[application_cybersa_forward_field] == 'Yes' || record[application_cybersa_good_field] != 'Yes') {
         invData[inv_invoice_paused_field] = 'Yes';
       }
       invoiceData = await addInvoiceRecord(invData, record[application_admin_testing_field]);
       newinv_id = invoiceData.record.id;
       log_console('Invoice Data Rec with id: ' + newinv_id);
       log_console(invoiceData);
       log_console('Update SACyber App Invoice Information');
       var appDataUpdate = {};
       appDataUpdate[application_sacyber_invoice_field] = invoiceData.record[inv_invnbr_field]+':'+newinv_id;
       appUpdate = await updateApplicationDataRec(record.id, appDataUpdate);
     } else {
         newinv_id = record[application_sacyber_invoice_field].split(":")[1];
     }
       //search_data = '?filters={"match": "and", "rules": [{"field":"' + liability_rates_year_conn_field + '", "operator":"is", "value":"' + record[application_year_conn_field_raw][0].id + '"},{"field":"' + liability_rates_type_field + '", "operator":"is", "value":"CyberSA"}]}';
     const cyber_search_val = '?view-application-details2_id=' + record.id + '&filters={"match": "or", "rules": [{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"CyberSA"},{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"CyberCE"}]}';
     const cyberCertData = await getCertificatebyQuery(cyber_search_val);
     log_console(cyberCertData);
     for (j = 0; j < cyberCertData.total_records; j++) {
       log_console('Update Inv for Cert: ' + cyberCertData.records[j].id);
       var certData = {};
       certData[cert_inv_connect_field] = [newinv_id];
       //const certificates_url = 'https://api.knack.com/v1/pages/' + api_application_data_scene + '/views/' + api_certificate_view + '/records/' + cyberCertData.records[j].id;
       const certificates_url = 'https://api.knack.com/v1/pages/' + coverage_desired_scene + '/views/' + coverage_desired_certificate_view + '/records/' + cyberCertData.records[j].id;
       await updateKnackRecord(certificates_url, certData);
     }
     Knack.hideSpinner();
     //if (record[application_cybersa_forward_field] != 'Yes' && record[application_cybersa_good_field] == 'Yes' && record[application_ce_good_field] == 'Yes') {
     if (record[application_cybersa_forward_field] != 'Yes' && record[application_cybersa_good_field] == 'Yes' && record[application_ce_good_field] == 'Yes') {
       invRedirect(record.id,view.key);
     }
   } else {*/
  //if (record[application_cybersa_forward_field] != 'Yes' || record[application_cybersa_good_field] == 'Yes') {
  //Knack.showSpinner();
  //sleep(3000).then(() => {})
  //Knack.hideSpinner();
  invRedirect(record.id, view.key);
  //}
  //}
})

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

$(document).on('knack-record-update.' + sacyber_declaration_view, function (event, view, record) {
  log_console('Record Update: sacyber_declaration_view ' + view.key);
  /*if (record[application_cybersa_forward_field] == 'Yes') {
    Knack.showSpinner();
    var invData = {};
    invData[inv_invoice_paused_field] = 'Yes';
    const newinv_id = record[application_sacyber_invoice_field].split(":")[1];
    updateInvoiceRecord(newinv_id, invData);
    Knack.hideSpinner();
  }*/
  log_console('saforward: ' + record[application_cybersa_forward_field] + ' sagood: ' + record[application_cybersa_good_field] + ' cegood: ' + record[application_ce_good_field] + ' ceoption: ' + record[application_ce_option_field]);
  if (record[application_cybersa_forward_field] != 'Yes' && record[application_cybersa_good_field] == 'Yes' && (record[application_ce_good_field] == 'Yes' || (record[application_ce_good_field] != 'Yes' && record[application_ce_option_field] != 'Yes'))) {
    var redirect_url = '#law-offices-details/view-application-details/' + record.id + '/invoice-details2/' + localStorage.application_sacyber_invoice_field;
    window.location.replace(redirect_url);
  }
})

$(document).on('knack-record-update.' + declaration_view + ' knack-record-update.' + declaration2_view + ' knack-record-update.' + retired_declaration_view, function (event, view, record) {
  log_console('Record Update: declaration_view ' + view.key);
  log_console(record);
  if (record[application_excess_paused_field] == 'Yes') {
    //let redirect_url = '#law-offices-details/view-application-details/' + record.id;
    //window.location.replace(redirect_url);
    //Knack.showSpinner();
    //var invData = {};
    //invData[inv_invoice_paused_field] = 'Yes';
    //const newinv_id = record[application_vep_invoice_field].split(":")[1];
    //updateInvoiceRecord(localStorage.application_vep_invoice_field, invData);
    //Knack.hideSpinner();
  } else {
    invNbr = record[application_vep_invoice_field].split(':')[0];
    invRecId = record[application_vep_invoice_field].split(':')[1];
    let redirect_url = '#law-offices-details/view-application-details/' + record.id + '/invoice-details2/' + invRecId;
    window.location.replace(redirect_url);
  }
})

const add_sacyber_part2_view = 'view_1401';
const add_application_sacyber_part2_view = 'view_1347';
// Add Lawyers Invoice Add record will Add Invoice and update record with data and add Cyber Record if existed. 
$(document).on('knack-record-update.' + add_sacyber_part2_view + ' knack-record-update.' + add_application_sacyber_part2_view, async function (event, view, record) {
  log_console('Record Update: add_sacyber_part2_view ' + view.key);
  log_console(record);
  Knack.showSpinner();
  await updateSACyberData(record);
  Knack.hideSpinner();
});

// Update SACyber and CECyber Certificate Record when update occurs in GUI. Changes Rates and attaches Invoice if required.
async function updateSACyberData(record) {
  log_console('Function: updateSACyberData');
  const cyber_search_val = '?view-application-details2_id=' + record.id + '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"CyberSA"}]';
  const cyberCertData = await getCertificatebyQuery(cyber_search_val);
  log_console(cyberCertData);
  let certData = {};
  var saupdate = 0;
  log_console('sa cert rate id: ' + cyberCertData.records[0][cert_liability_rate_conn_field_raw][0].id + ' sa app cert rate id: ' + record[application_cybersa_rate_conn_field_raw][0].id)
  if (cyberCertData.records[0][cert_liability_rate_conn_field_raw][0].id != record[application_cybersa_rate_conn_field_raw][0].id) {
    const query_url = rates_url + "/" + record[application_cybersa_rate_conn_field_raw][0].id;
    log_console('query_url: ' + query_url);
    const saLiabilityData = await getKnackRecord(query_url);
    log_console(saLiabilityData);
    certData[cert_liability_rate_conn_field] = [record[application_cybersa_rate_conn_field_raw][0].id];
    certData[cert_prorate_field] = saLiabilityData[liability_prorate_field];
    certData[cert_current_rate_field] = saLiabilityData[liability_rates_premium_field_raw];
    certData[cert_sage_code_field] = saLiabilityData[liability_rates_sage_code_field];
    saupdate = 1;
  }
  //log_console('saCyber Inv: '+cyberCertData.records[0][cert_inv_connect_field]+' localStorage.application_sacyber_invoice_field: '+localStorage.application_sacyber_invoice_field);
  log_console('saCyber Inv: ' + cyberCertData.records[0][cert_inv_connect_field] + ' record invoice field: ' + record[application_sacyber_invoice_field]);
  if (cyberCertData.records[0][cert_inv_connect_field] == '') {
    const invInfo = record[application_sacyber_invoice_field].split(':');
    log_console('invInfo: ' + invInfo);
    certData[cert_inv_connect_field] = [invInfo[1]];
    saupdate = 1;
  }
  if (saupdate == 1) {
    log_console(certData);
    certUpdate = await updateCertificateRecordTest(cyberCertData.records[0].id, certData);
    log_console(certUpdate);
  }
  if (record[application_ce_option_field] == "Yes" && record[application_ce_good_field] == "Yes") {
    log_console('Updating Crime Extension');
    const ce_search_val = '?view-application-details2_id=' + record.id + '&filters=[{"field":"' + cert_cert_type_field + '", "operator":"is", "value":"CyberCE"}]';
    const ceCertData = await getCertificatebyQuery(ce_search_val);
    log_console(ceCertData);
    if (ceCertData.records.length > 0) {
      log_console('Updating CE Record');
      var ceupdate = 0;
      let ceData = {};
      log_console('ce cert rate id: ' + ceCertData.records[0][cert_liability_rate_conn_field_raw][0].id + ' ce app cert rate id: ' + record[application_cyberce_rate_conn_field_raw][0].id)
      if (ceCertData.records[0][cert_liability_rate_conn_field_raw][0].id != record[application_cyberce_rate_conn_field_raw][0].id) {
        const query_url = rates_url + "/" + record[application_cyberce_rate_conn_field_raw][0].id;
        log_console('query_url: ' + query_url);
        const ceLiabilityData = await getKnackRecord(query_url);
        log_console(ceLiabilityData);
        ceData[cert_liability_rate_conn_field] = [record[application_cyberce_rate_conn_field_raw][0].id];
        ceData[cert_prorate_field] = ceLiabilityData[liability_prorate_field];
        ceData[cert_current_rate_field] = ceLiabilityData[liability_rates_premium_field_raw];
        ceData[cert_sage_code_field] = ceLiabilityData[liability_rates_sage_code_field];
        ceupdate = 1;
      }
      if (ceCertData.records[0][cert_inv_connect_field] == '') {
        const invInfo = record[application_sacyber_invoice_field].split(':');
        log_console('invInfo: ' + invInfo);
        ceData[cert_inv_connect_field] = [invInfo[1]];
        ceupdate = 1;
      }
      if (ceupdate == 1) {
        log_console(ceData);
        ceUpdate = await updateCertificateRecordTest(ceCertData.records[0].id, ceData);
        log_console(ceUpdate);
      }
    }
  }
}

$(document).on('knack-view-render.' + add_sacyber_part2_view + ' knack-view-render.' + add_application_sacyber_part2_view, function (event, view, data) {
  log_console('View: add_sacyber_part2_view ' + view.key);
  //if (typeof data[application_admin_testing_field] === 'undefined') {
  //  log_console('No admin_testing field');
  //} else {
  //  admin_testing = data[application_admin_testing_field];
  //}
  //log_console('admin_testing: '+admin_testing);
  var backup = document.getElementById('kn-input-' + application_cybersa_backup_field);
  log_console(backup);
  var backupInfo = backup.querySelector('.label');
  backupInfo.innerHTML = "<span>1: Please confirm your firm does the following to keep the firm’s systems safe: <br><br>" + backupInfo.innerHTML + "</span>";
  var phishing = document.getElementById('kn-input-' + application_cybersa_phishing_field);
  log_console(phishing);
  var phishingInstructions = phishing.querySelector('.kn-instructions');
  log_console(phishingInstructions);
  //var origdata = phishingInstructions.textContent;
  //var temp_p = document.createElement("p");
  phishingInstructions.innerHTML = "You can get free training for this here: <a href=\"https://admin.wizer-training.com/register?hsCtaTracking=9b1e1106-7ca5-4737-95fe-49eb4c6c9845%7Cd9876dcf-ff78-45a1-b931-7f607167241b\" target=\"_default\">Training</a> which will allow you to meet this requirement. If you can confirm you will have your staff complete this training (or other phishing awareness training) before July 1st, then you can select yes. Note, failure to do so by July 1st might result in coverage denial in the event of a claim.";

  var mfa = document.getElementById('kn-input-' + application_cybersa_mfa_field);
  log_console(mfa);
  var mfaInstructions = mfa.querySelector('.kn-instructions');
  mfaInstructions.innerHTML = "If you use Microsoft 365 or Google for your email, the instructions for turning on this feature are here: <a href=\"https://www.microsoft.com/en-ca/security/business/identity/mfa\" target=\"_default\">Microsoft 365</a> or <a href=\"https://www.google.com/landing/2step\" target=\"_default\">Google</a>. If you can confirm you will have this feature enabled before July 1st, then you can select yes.  Note, failure to do so by July 1st, might result in coverage denial in the event of a claim.";
  //var incident = document.getElementById('kn-input-'+application_cybersa_claim_declaration_field);
  //log_console(incident);
  //var incidentInfo = incident.querySelector('.label');
  //log_console(incidentInfo);
  //incidentInfo.innerHTML = "<span>9: In the past 5 years, have you or your firm had a cyber or network related incident that has:<span class=\"kn-required\">*</span><ul style=\"list-style-type:disc; font-weight:400\"><li>caused your systems to be unavailable for more than on business day</li><li>resulted in unauthorized access to your networks or data</li><li>caused you to notify clients/customers that their information may have been compromised</li><li>been subject to a network extortion event (i.e. been infected with ransomware)</li></ul></span>";
  //temp_p.innerHTML = "You can get free training for this here: <a href=\"https://abc.com\">Training</a> which will allow you to meet this requirement. If you can confirm you will have your staff complete this training (or other phishing awareness training) before July 1st, then you can select yes. Note, failure to do so by July 1st might result in coverage denial in the event of a claim.";
  //var temp_p_after = document.createElement("p");  
  //temp_p_after.textContent = "which will allow you to meet this requirement. If you can confirm you will have your staff complete this training (or other phishing awareness training) before July 1st, then you can select yes. Note, failure to do so by July 1st might result in coverage denial in the event of a claim.";
  //var temp_link = document.createElement("a");
  //temp_link.href = "https://admin.wizer-training.com/register?hsCtaTracking=9b1e1106-7ca5-4737-95fe-49eb4c6c9845%7Cd9876dcf-ff78-45a1-b931-7f607167241b";
  //temp_link.target = '_blank';
  //temp_link.textContent = "Training";
  //temp_p.appendChild(temp_link);
  //temp_p.appendChild(temp_p_after);
  //infoa.appendChild(temp_p);
  //infoa.appendChild(temp_link);
  //var newdata = origdata.replace(/\[LINK\]/,'<a href=\"https://admin.wizer-training.com/register?hsCtaTracking=9b1e1106-7ca5-4737-95fe-49eb4c6c9845%7Cd9876dcf-ff78-45a1-b931-7f607167241b\" target=\"_default\">Video<\/a>');
  //infoa.textContent=newdata;
})

/*$(document).on('knack-view-render.' + declaration_view, function (event, view, data) {
  log_console('View: declaration_view '+view.key);
  log_console(data);
  if (data[application_cybersa_selected_field] == "Yes" && data[application_cybersa_submitted_field] != "Yes") {
    //log_console('change Submit Button');
    //log_console($("#" + declaration_view + " .kn-button"));
    $("#" + declaration_view + " .kn-button")[0].innerHTML = 'Continue to Cyber';
  }
})*/

const pick_application_cyber_info_view = 'view_904';
const pick_application_view = 'view_857';
const pick_application2_view = 'view_1242';
const stand_alone_cyber_open_field = 'field_1689';
// Add Button to Pick Application Screen to show Cyber options.
$(document).on('knack-view-render.' + pick_application2_view, async function (event, view, data) {
  //debug_on=1;
  Knack.showSpinner();
  log_console(data);
  log_console('View: pick_application2_view: ' + view.key);
  const appResponseData = await getApplicationRecord(data.id);
  log_console(appResponseData);
  log_console('stand_alone_cyber_open_field: ' + appResponseData[stand_alone_cyber_open_field]);
  if (appResponseData[stand_alone_cyber_open_field] != 'Yes') {
    var y = document.getElementById('kn-input-' + application_cybersa_selected_field);
    log_console(y);
    y.style.display = "none";
  }

  localStorage.clear();
  //$('#'+pick_application_view+' > form').hide();
  var a = document.getElementById(pick_application_cyber_info_view);
  if (a != null) {
    log_console(a);
    a.style.display = "none";
    if (data['field_1246'] > 2020) {
      $('#' + pick_application2_view).append("<br><br><button id='cyberProduct' class='kn-button is-primary'>Which cyber product is best for you?</button>&nbsp;&nbsp;");
      document.getElementById('cyberProduct').addEventListener('click', function () {
        a.style.display = "block";
      });
    }
  }
  Knack.hideSpinner();
})

/* $(document).on('knack-form-submit.' + pick_application_view, function (event, view, record) {
   log_console('Form Submit: pick_application_view '+view.key);
   log_console(record);
     let redirect_url;
  if (record[application_vep_selected_field] == 'Yes' && record[application_submitted_field] != 'Yes') {
    redirect_url = '#home/create-application/'+record.id;
  }
  if (record[application_cybersa_selected_field] == 'Yes' && record[application_cybersa_submitted_field] != 'Yes') {
    redirect_url = '#home/pick-application-type/'+record.id+'/stand-alone-cyber/'+record.id
  }
  log_console('Trying redirect with: '+redirect_url);
        Knack.showSpinner();
      sleep(3000).then(() => {})
      Knack.hideSpinner();
  window.location.replace(redirect_url);
 })*/

$(document).on('knack-record-update.' + pick_application2_view, function (event, view, record) {
  log_console('Record Update: pick_application2_view ' + view.key);
  log_console('vep_selected: ' + record[application_vep_selected_field] + ' vep_submitted: ' + record[application_submitted_field] + ' sacyber_selected: ' + record[application_cybersa_selected_field] + ' sacyber_submitted: ' + record[application_cybersa_submitted_field]);
  localStorage.admin_testing = 'No';
  if (record[application_admin_testing_field] == 'Yes') {
    localStorage.admin_testing = 'Yes';
  }

  /*let redirect_url;
  if (record[application_cybersa_selected_field] == 'Yes' && record[application_cybersa_submitted_field] != 'Yes') {
    redirect_url = '#home/pick-application-type/'+record.id+'/stand-alone-cyber/'+record.id
  }
  if (record[application_vep_selected_field] == 'Yes' && record[application_submitted_field] != 'Yes') {
    redirect_url = '#home/create-application/'+record.id;
  }
  //if (record[application_vep_selected_field] != 'Yes' && record[application_submitted_field] != 'Yes') {
  //  return;
  //}
  log_console('Trying redirect with: '+redirect_url);
  Knack.showSpinner();
  sleep(2000).then(() => {})
  Knack.hideSpinner();
  window.location.replace(redirect_url);*/
})

//DEV SA Cyber Not Qualify Email URL
const integromatdevcyberdeniedurl = 'https://hook.integromat.com/gggaxef9uel2phanr9dkse3oye86cjut';
//Prod SA Cyber Not Qualify Email URL
const integromatprodcyberdeniedurl = 'https://hook.integromat.com/kqwinhmyde927jmut1nwt2rw5f24soqd';

var integromatcybersadeniedurl = integromatprodcyberdeniedurl;
if (test_mode_on == 1) {
  integromatcybersadeniedurl = integromatdevcyberdeniedurl;
}
// DEV CE Denied Email URL
const integromatdevcybercedeniedurl = 'https://hook.integromat.com/yht8o715earbtn8to1j6cscyvjgrxv9w';
// Prod CE Denied Email URL
const integromatprodcybercedeniedurl = 'https://hook.integromat.com/cw82cr21fbcbf5o1oi6khlsfei7iknbw';

var integromatcybercedeniedurl = integromatprodcybercedeniedurl;
if (test_mode_on == 1) {
  integromatcyberdeniedurl = integromatdevcybercedeniedurl;
}
//DEV Reinsurers Scenario URL
const integromatdevreinsurerurl = 'https://hook.integromat.com/vwumdmoe5g0jyh123vc4b9oeqeaysjio';
//Prod Reinsurers Scenario URL
const integromatprodreinsurerurl = 'https://hook.integromat.com/yx6h8jn879jtfir28nn2xmrf1yksccjb';

var integromatreinsurerurl = integromatprodreinsurerurl;
if (test_mode_on == 1) {
  integromatreinsurerurl = integromatdevreinsurerurl;
}
/*const sacyber_problem_reinsurer_view = 'view_873';
const application_sacyber_problem_reinsurer_view = 'view_887';
$(document).on('knack-view-render.' + sacyber_problem_reinsurer_view + ' knack-view_render.' + application_sacyber_problem_reinsurer_view, function (event, view, data) {
  log_console('View: sacyber_problem_reinsurer_view '+view.key);
  log_console(data);
  log_console(event);
  log_console(view.scene.scene_id);
  data = { 'knackId': view.scene.scene_id };
  integromat(integromatreinsurerurl, data);
})*/
const sacyber_cefailed_view = 'view_876';
const sacyber_safailed_view = 'view_872';
const sacyber_sa10m_view = 'view_873';
const application_sacyber_safailed_view = 'view_886';
const application_sacyber_sa10m_view = 'view_887';
const application_sacyber_cefailed_view = 'view_889';
const sacyber_info_view = 'view_909';
// CE failed message screen Add continue button and email.
$(document).on('knack-view-render.' + sacyber_cefailed_view + ' knack-view-render.' + application_sacyber_safailed_view + ' knack-view-render.' + application_sacyber_sa10m_view + ' knack-view-render.' + application_sacyber_cefailed_view + ' knack-view-render.' + sacyber_safailed_view + ' knack-view-render.' + sacyber_sa10m_view, async function (event, view, data) {
  log_console('View: sacyber_cefailed_view ' + view.key);
  const appResponseData = await getApplicationRecord(view.scene.scene_id);
  log_console(appResponseData);
  //log_console(Knack.models);
  //const data_view_records = Knack.models[sacyber_info_view].changed.toJSON();
  //  const data_view_records = Knack.models[sacyber_info_view].attributes;

  //log_console(data_view_records);
  //log_console(Knack.models[sacyber_info_view].attributes[application_submitted_field]);
  //const abc = Knack.models.view_909.attributes.field_149_raw;
  //log_console('abc: '+abc);

  let urlData = { 'knackId': view.scene.scene_id };
  let button_msg = 'Continue';
  let button_redirect = '#law-offices-details/';
  if (appResponseData[application_submitted_field] != 'Yes' && appResponseData[application_vep_selected_field] == 'Yes') {
    button_msg = 'Continue to Excess Application';
    button_redirect = '#home/create-application/' + appResponseData.id;
  }
  if (appResponseData[application_cybersa_submitted_field] != 'Yes' && appResponseData[application_cybersa_selected_field] == 'Yes') {
    button_msg = 'Continue to Cyber Application';
    button_redirect = '#home/pick-application-type/' + data.id + '/stand-alone-cyber/' + appResponseData.id
  }
  if (appResponseData[application_vep_selected_field] != 'Yes' || appResponseData[application_cybersa_selected_field] != 'Yes') {
    button_msg = 'Continue to Product Selection';
    button_redirect = '#home/pick-application/' + appResponseData.id;
  }
  log_console('saselecte: ' + appResponseData[application_cybersa_selected_field] + ' sagood: ' + appResponseData[application_cybersa_good_field] + ' ceoption: ' + appResponseData[application_ce_option_field] + ' cegood: ' + appResponseData[application_ce_good_field] + ' saforward: ' + appResponseData[application_cybersa_forward_field]);
  if (appResponseData[application_cybersa_selected_field] == 'Yes' && appResponseData[application_cybersa_good_field] == 'Yes' && appResponseData[application_ce_option_field] == 'Yes' && appResponseData[application_ce_good_field] != 'Yes' && appResponseData[application_cybersa_forward_field] != 'Yes') {
    button_msg = 'Continue';
    button_redirect = '#law-offices-details/' + appResponseData.id + '/invoice-details2/' + localStorage.application_sacyber_invoice_field;
  }
  if (view.key == sacyber_cefailed_view || view.key == application_sacyber_cefailed_view) {
    $('#' + view.key).append("<br><br><button id='cyberceFailed' class='kn-button is-primary'>" + button_msg + "</button>&nbsp;&nbsp;");
  }
  if (view.key == application_sacyber_safailed_view || view.key == sacyber_safailed_view) {
    $('#' + view.key).append("<br><br><button id='cyberceFailed' class='kn-button is-primary'>" + button_msg + "</button>&nbsp;&nbsp;");
  }
  if (view.key == application_sacyber_sa10m_view || view.key == sacyber_sa10m_view) {
    $('#' + view.key).append("<br><br><button id='cyberceFailed' class='kn-button is-primary'>" + button_msg + "</button>&nbsp;&nbsp;");
  }
  log_console('button_redirect: ' + button_redirect);
  document.getElementById('cyberceFailed').addEventListener('click', function () {
    log_console(view);
    //invRedirect(view.scene.scene_id,view.key);
    //var redirect_url = '#law-offices-details/view-application-details/' + view.scene.scene_id + '/invoice-details2/' + localStorage.application_sacyber_invoice_field;
    window.location.replace(button_redirect);
  });
  if (view.key == sacyber_cefailed_view || view.key == application_sacyber_cefailed_view) {
    integromat(integromatcybercedeniedurl, urlData);
  }
  if (view.key == sacyber_safailed_view) {
    integromat(integromatcybersadeniedurl, urlData);
  }
  if (view.key == sacyber_sa10m_view) {
    integromat(integromatreinsurerurl, urlData);
  }
});

const application_excess_failed_view = 'view_1331';
const application_cyber_failed_view = 'view_1332';
// CE failed message screen Add continue button and email.
$(document).on('knack-view-render.' + application_excess_failed_view + ' knack-view-render.' + application_cyber_failed_view, async function (event, view, data) {
  log_console('View: application_excess_failed_view ' + view.key);
  const appResponseData = await getApplicationRecord(view.scene.scene_id);
  log_console(appResponseData);

  //let urlData = { 'knackId': view.scene.scene_id };
  let button_msg = 'Continue to Details';
  let button_redirect = '#law-offices-details/';
  //if (appResponseData[application_submitted_field] != 'Yes' && appResponseData[application_vep_selected_field] == 'Yes') {
  //  button_msg = 'Continue to Excess Application';
  //  button_redirect = '#home/create-application/'+data.id;
  //}
  if (appResponseData[application_cybersa_submitted_field] != 'Yes' && appResponseData[application_cybersa_selected_field] == 'Yes') {
    button_msg = 'Continue to Cyber Application';
    button_redirect = '#home/pick-application-type/' + data.id + '/stand-alone-cyber/' + appResponseData.id
  }
  if (appResponseData[application_vep_selected_field] != 'Yes' || appResponseData[application_cybersa_selected_field] != 'Yes') {
    button_msg = 'Continue to Product Selection';
    button_redirect = '#home/pick-application/' + appResponseData.id;
  }
  //if (view.key == sacyber_cefailed_view || view.key == application_sacyber_cefailed_view) {
  //  $('#'+view.key).append("<br><br><button id='cyberceFailed' class='kn-button is-primary'>"+button_msg+"</button>&nbsp;&nbsp;");
  //}
  //if (view.key == application_sacyber_safailed_view || view.key == sacyber_safailed_view) {
  //  $('#'+view.key).append("<br><br><button id='cyberceFailed' class='kn-button is-primary'>"+button_msg+"</button>&nbsp;&nbsp;");
  //}
  if (appResponseData[application_cyber_good_field] == 'No') {
    button_msg = 'Continue';
    button_redirect = '#law-offices-details/' + appResponseData.id + '/invoice-details2/' + localStorage.application_vep_invoice_field;
  }
  log_console('redirect: ' + button_redirect);
  //if (view.key == application_excess_failed_view || view.key == application_cyber_failed_view) {
  $('#' + view.key).append("<br><br><button id='cyberceFailed' class='kn-button is-primary'>" + button_msg + "</button>&nbsp;&nbsp;");
  //} 
  document.getElementById('cyberceFailed').addEventListener('click', function () {
    log_console(view);
    window.location.replace(button_redirect);
  });
});

const all_application_cert_update_view = 'view_1226';
$(document).on('knack-view-render.' + all_application_cert_update_view, async function (event, view, data) {
  log_console('View: all_application_cert_update_view ' + view.key);
  log_console(data);
  log_console(view);
  Knack.showSpinner();
  search_data = '?filters={"match": "and", "rules": [{"field":"' + liability_rates_year_conn_field + '", "operator":"is", "value":"' + data[cert_year_connect_field_raw][0].id + '"},{"field":"' + liability_rates_type_field + '", "operator":"is", "value":"' + data[cert_cert_type_field] + '"}]}';
  const query_url = rates_url + search_data;
  log_console('Get Cyber Liability Record');
  log_console('query_url: ' + query_url);
  responseLiabilityData = await getKnackRecord(query_url);
  log_console(responseLiabilityData);
  var options =
    $("#" + all_application_cert_update_view + "-" + cert_liability_rate_conn_field + " option").filter(function (e) {
      //log_console('this: '+$(this));
      var selectval = $(this).context.value
      var choiceval = $(this).context.text
      // Compare Field against table and any that match Yes on New we return
      for (j = 0; j < responseLiabilityData.total_records; j++) {
        if (responseLiabilityData.records[j].id == selectval) {
          return choiceval;
        }
      }
      //  Return Select Option
      if (selectval == "") {
        return choiceval;
      }
    }).clone();

  // View 30 Coverage Desired Field 113 Liablity Rate in that View        
  $("#" + all_application_cert_update_view + "-" + cert_liability_rate_conn_field).empty();
  $("#" + all_application_cert_update_view + "-" + cert_liability_rate_conn_field).append(options);
  $("#" + all_application_cert_update_view + "-" + cert_liability_rate_conn_field).trigger("liszt:updated");
  Knack.hideSpinner();
});
