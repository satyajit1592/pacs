var express = require('express');
var router = express.Router();
var pgdbconnect=require('../database/pgdbconnect');
var moment=require('moment');

router.post('/logintemp',function(req,res){
   res.render('memberModule/memberAddDetails');
});


// router.post('/mem_details',function(req,res){
//     console.log("Hii");

//     //Member details-start//

//     var  mem_typ = req.body.mem_typ;
//     var mem_id = req.body.mem_id;
//     var emp_code = req.body.emp_code;
//     var doj = req.body.doj;
//     var dob = req.body.dob;
//     var dor = req.body.dor;
//     var adm_no = req.body.adm_no;
//     var dept = req.body.dept;
//     var ent_fee = req.body.ent_fee;
//     var crncytyp = req.body.crncytyp;
//     var shr_bal = req.body.shr_bal;
//     var cntr_pay = req.body.cntr_pay;
//     var thrift_dept = req.body.thrift_dept;
//     var dras = req.body.dras;
//     var bnk_acc_no = req.body.bnk_acc_no;
//     var opn_bal = req.body.opn_bal;
//     var cls_bal = req.body.cls_bal;
//     var remarks = req.body.remarks;

//     console.log("Member Details",mem_typ,mem_id,emp_code,doj,dob,dor,adm_no,dept,ent_fee,crncytyp,shr_bal,cntr_pay,thrift_dept,dras,bnk_acc_no,opn_bal,cls_bal,remarks);

//     //Member details-end//

//     /////////////////////////////////////////////////////////////////////////

//     //Personal details-start//


//     var title = req.body.title;
//     var fname = req.body.fname;
//     var mname = req.body.mname;
//     var lname = req.body.lname;
//     var father_name = req.body.father_name;
//     var spouse = req.body.spouse;
//     var selectedop = req.body.selectedop;
//     var sgender = req.body.sgender;
//     var pob = req.body.pob;
//     var mar_status = req.body.mar_status;
//     var religion = req.body.religion;
//     var caste = req.body.caste;
//     var occupation = req.body.occupation;
//     var cust_category = req.body.cust_category;
//     var cust_type = req.body.cust_type;
//     var buss_segment = req.body.buss_segment;
//     var mem_comm = req.body.mem_comm;
//     var guardian = req.body.guardian;
//     var ph_no = req.body.ph_no;
//     var email_id = req.body.email_id;
//     var adhar_no = req.body.adhar_no;
//     var ration_no = req.body.ration_no;
//     var voter_id = req.body.voter_id;
//     var pan_id = req.body.pan_id;
//     var under_poverty = req.body.under_poverty;
//     var fam_members = req.body.fam_members;
//     var dept_no = req.body.dept_no;
//     var minority = req.body.minority;
//     var minority1 = req.body.minority1;
//     var land_owner = req.body.land_owner;
//     var resd_status = req.body.resd_status;
//     var shg_no = req.body.shg_no;
//     var kcc = req.body.kcc;
//     var s_mem = req.body.s_mem;
//     var s_staf = req.body.s_staf;
//     var acc_holder = req.body.acc_holder;
//     var high_edu = req.body.high_edu;

//     console.log("Personal Details",title,fname,mname,lname,father_name,spouse,selectedop,sgender,pob,mar_status,religion,caste,occupation,cust_category,cust_type,buss_segment,mem_comm,guardian,ph_no,email_id,adhar_no,ration_no,voter_id,pan_id,under_poverty,fam_members,dept_no,minority,minority1,land_owner,resd_status,shg_no,kcc,s_mem,s_staf,acc_holder,high_edu);

//     //Personal details-end//

//     ///////////////////////////////////////////////////////////////////////////////

//      //Present address-start//

//     var add_type = req.body.add_type;
//     var add_line = req.body.add_line;
//     var village = req.body.village;
//     var panchayat = req.body.panchayat;
//     var city = req.body.city;
//     var state = req.body.state;
//     var country = req.body.country;
//     var pincode = req.body.pincode;
//     var rsm = req.body.rsm;
//     var rsy = req.body.rsy;

//     console.log("Present Address",add_type,add_line,village,city,state,country,panchayat,pincode,rsm,rsy);

//     //Present address-end//

//     ///////////////////////////////////////////////////////////////////////////////////////

//     //Permanent address-start//

//     var address_type = req.body.address_type;
//     var address_line = req.body.address_line;
//     var vilg = req.body.vilg;
//     var panc = req.body.panc;
//     var citie = req.body.citie;
//     var stat = req.body.stat;
//     var ctry = req.body.ctry;
//     var picd = req.body.picd;
//     var mnth = req.body.mnth;
//     var year = req.body.year;

//     console.log("Permanent Address",address_type,address_line,vilg,panc,citie,stat,ctry,picd,mnth,year);

//     //Permanent address-end//

//     /////////////////////////////////////////////////////////////////////////////////////////////

//     //Loans - start//

//     var e_month = req.body.e_month;
//     var loan_amt = req.body.loan_amt;
//     var amt_used = req.body.amt_used;

//     console.log("Loans",e_month,loan_amt,amt_used);

//     //Loans - end//

//     //////////////////////////////////////////////////////////////////////////////////////////////

//     //Nominee - start//

//     var nominee_type = req.body.nominee_type;
//     var fst_name = req.body.fst_name;
//     var mid_name = req.body.mid_name;
//     var lst_name = req.body.lst_name;
//     var fath_name = req.body.fath_name;
//     var rel = req.body.rel;
//     var gen = req.body.gen;
//     var occup = req.body.occup;
//     var date_ob = req.body.date_ob;
//     var ac_num = req.body.ac_num;
//     var addr_type = req.body.addr_type;
//     var addr_line = req.body.addr_line;
//     var vilge = req.body.vilge;
//     var panch = req.body.panch;
//     var distcity = req.body.distcity;
//     var stat1 = req.body.stat1;
//     var countr = req.body.countr;
//     var pin_cd = req.body.pin_cd;
//     var phone_no = req.body.phone_no;
//     var email = req.body.email;
//     var adh_no = req.body.adh_no;
//     var ism = req.body.ism;

//     console.log("Nominee Address",nominee_type,fst_name,mid_name,lst_name,fath_name,rel,gen,occup,date_ob,ac_num,addr_type,addr_line,vilge,panch,distcity,stat1,countr,pin_cd,phone_no,email,adh_no,ism);

//     pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
//     {
//         if(err) throw err;
//         console.log("result1 is", result1);


//     /*states*/

//     // var state = req.body.state;
//     // console.log(state);
//     pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2)
//     {
//         if(err) throw err;
//         console.log("result2 is", result2);




//     /*country*/

//     // var country = req.body.country;
//     // console.log(country);

//     pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
//     {
//         if(err) throw err;
//         console.log("result3 is", result3);


//     //Nominee - end//

//     /////////////////////////////////////////////////////////////////////////////////////

//     pgdbconnect.query("insert into member_details ( md_ch_member_id, md_ch_member_type_code, md_d_doj, md_d_dor, md_ch_admission_number, md_ch_department, md_n_entrance_fee_amt, md_n_opening_share_balance, md_ch_counter_pay, md_n_thrift_deposit, md_ch_dras, md_ch_bank_account_number, md_n_opening_balance, md_n_closing_balance, md_ch_del_flg,md_n_employee_code,md_ch_entrance_fee_cur) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)",[mem_id,mem_typ,doj,dor,adm_no,dept,ent_fee,shr_bal,cntr_pay,thrift_dept,dras,bnk_acc_no,opn_bal,cls_bal,'N',emp_code,crncytyp],function(err,loginres){
//     if(err) throw err;
//     console.log("Result of Member Details",loginres);

//         pgdbconnect.query("insert into member_personal_details (mpd_ch_member_id, mpd_ch_title, mpd_ch_first_name, mpd_ch_middle_name, mpd_ch_last_name, mpd_ch_gender, mpd_d_dob, mpd_ch_pob, mpd_n_phone_number, mpd_ch_emailid, mpd_ch_father_name, mpd_ch_marital_status, mpd_ch_spouse_name, mpd_ch_spouse_gender, mpd_n_total_family_members, mpd_n_no_of_dependents, mpd_ch_higher_qualification, mpd_ch_religion, mpd_ch_caste, mpd_ch_occupation, mpd_n_aadhar_card_number, mpd_n_pan_card_number, mpd_n_voterid, mpd_n_ration_card_number, mpd_ch_residential_status, mpd_ch_customer_category, mpd_ch_customer_type, mpd_ch_business_segment, mpd_ch_member_community, mpd_ch_guardian, mpd_ch_under_poverty, mpd_ch_minority, mpd_ch_land_owned_by, mpd_ch_shg_member, mpd_ch_kcc_holdercharacter, mpd_ch_is_society_member, mpd_ch_is_society_staff, mpd_ch_is_account_holder, mpd_ch_address_type1, mpd_ch_address_line1, mpd_ch_village1, mpd_ch_panchayat1, mpd_ch_city1, mpd_ch_state1, mpd_ch_country1, mpd_n_pincode1, mpd_d_residing_since_month1, mpd_d_residing_since_year1, mpd_ch_address_type2, mpd_ch_address_line2, mpd_ch_village2, mpd_ch_panchayat2, mpd_ch_city2, mpd_ch_state2, mpd_ch_country2, mpd_n_pincode2, mpd_d_residing_since_month2, mpd_d_residing_since_year2, mpd_ch_del_flg) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53,$54,$55,$56,$57,$58,$59)",[mem_id,title,fname,mname,lname,selectedop,dob,pob,ph_no,email_id,father_name,mar_status,spouse,sgender,fam_members,dept_no,high_edu,religion,caste,occupation,adhar_no,pan_id,voter_id,ration_no,resd_status,cust_category,cust_type,buss_segment,mem_comm,guardian,under_poverty,minority,land_owner,shg_no,kcc,s_mem,s_staf,acc_holder,add_type,add_line,village,panchayat,city,state,country,pincode,rsm,rsy,address_type,address_line,vilg,panc,citie,stat,ctry,picd,mnth,year,'N'],function(err,loginres1){
//         if(err) throw err;
//         console.log("Result of Personal Details",loginres1);

//             pgdbconnect.query("insert into member_loan_details ( mld_ch_member_id, mld_ch_eligible_for_loan, mld_n_total_eligible_loan_amount, mld_n_total_amount_used, mld_n_employee_code,mld_ch_del_flg) values ($1,$2,$3,$4,$5,$6)",[mem_id,e_month,loan_amt,amt_used,emp_code,'N'],function(err,resu){
//             if(err) throw err;
//             console.log("Result of Loan Details",resu);

//                 pgdbconnect.query("insert into member_nominee_details ( mnd_ch_member_id, mnd_ch_title, mnd_ch_first_name, mnd_ch_middle_name, mnd_ch_last_name, mnd_ch_father_name, mnd_ch_relation, mnd_ch_gender, mnd_d_dob, mnd_n_account_num, mnd_ch_address_type, mnd_ch_address_line, mnd_ch_village, mnd_ch_panchayat, mnd_ch_city, mnd_ch_states, mnd_ch_country, mnd_n_pincode, mnd_n_phone_number, mnd_ch_emailid, mnd_ch_aadhar_card_number, mnd_ch_del_flg, mnd_ch_is_society_member) values  ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23)",[mem_id,nominee_type,fst_name,mid_name,lst_name,fath_name,rel,gen,date_ob,ac_num,addr_type,addr_line,vilge,panch,distcity,state,countr,pin_cd,phone_no,email,adh_no,'N',ism],function(err,resul){
//                 if(err) throw err;
//                 console.log("Result of Nominee Details",resul);
//                 });
//             });
//         });
//     });

//     req.flash('success_msg',"Data inserted successfully");
//                    res.locals.message=req.flash();

//     res.render('memberModule/memberAddDetails',{
//         cities:result1.rows,
//         states:result2.rows,
//         countries:result3.rows
//     });
//     });
// });
// });
// });


router.post('/mem_details',function(req,res){
    console.log("Hii");

    //Member details-start//

    var  mem_typ = req.body.mem_typ;
    var mem_id = req.body.mem_id;
    var emp_code = req.body.emp_code;
    var doj = req.body.doj;
    var dob = req.body.dob;
    var dor = req.body.dor;
    var adm_no = req.body.adm_no;
    var dept = req.body.dept;
    var ent_fee = req.body.ent_fee;
    var crncytyp = req.body.crncytyp;
    var shr_bal = req.body.shr_bal;
    var cntr_pay = req.body.cntr_pay;
    var thrift_dept = req.body.thrift_dept;
    var dras = req.body.dras;
    var bnk_acc_no = req.body.bnk_acc_no;
    var opn_bal = req.body.opn_bal;
    var cls_bal = req.body.cls_bal;
    var remarks = req.body.remarks;

    var filename_photo= req.body.uploadDoc_photograph;
    var  filename_sign= req.body.uploadDoc_signature ;                 
    console.log("filenames",filename_photo,filename_sign)
    console.log("Member Details",mem_typ,mem_id,emp_code,doj,dob,dor,adm_no,dept,ent_fee,crncytyp,shr_bal,cntr_pay,thrift_dept,dras,bnk_acc_no,opn_bal,cls_bal,remarks);

    //Member details-end//

    /////////////////////////////////////////////////////////////////////////

    //Personal details-start//


    var title = req.body.title;
    var fname = req.body.fname;
    var mname = req.body.mname;
    var lname = req.body.lname;
    var father_name = req.body.father_name;
    var spouse = req.body.spouse;
    var selectedop = req.body.selectedop;
    var sgender = req.body.sgender;
    var pob = req.body.pob;
    var mar_status = req.body.mar_status;
    var religion = req.body.religion;
    var caste = req.body.caste;
    var occupation = req.body.occupation;
    var cust_category = req.body.cust_category;
    var cust_type = req.body.cust_type;
    var buss_segment = req.body.buss_segment;
    var mem_comm = req.body.mem_comm;
    var guardian = req.body.guardian;
    var ph_no = req.body.ph_no;
    var email_id = req.body.email_id;
    var adhar_no = req.body.adhar_no;
    var ration_no = req.body.ration_no;
    var voter_id = req.body.voter_id;
    var pan_id = req.body.pan_id;
    var under_poverty = req.body.under_poverty;
    var fam_members = req.body.fam_members;
    var dept_no = req.body.dept_no;
    var minority = req.body.minority;
    var minority1 = req.body.minority1;
    var land_owner = req.body.land_owner;
    var resd_status = req.body.resd_status;
    var shg_no = req.body.shg_no;
    var kcc = req.body.kcc;
    var s_mem = req.body.s_mem;
    var s_staf = req.body.s_staf;
    var acc_holder = req.body.acc_holder;
    var high_edu = req.body.high_edu;

    console.log("Personal Details",title,fname,mname,lname,father_name,spouse,selectedop,sgender,pob,mar_status,religion,caste,occupation,cust_category,cust_type,buss_segment,mem_comm,guardian,ph_no,email_id,adhar_no,ration_no,voter_id,pan_id,under_poverty,fam_members,dept_no,minority,minority1,land_owner,resd_status,shg_no,kcc,s_mem,s_staf,acc_holder,high_edu);

    //Personal details-end//

    ///////////////////////////////////////////////////////////////////////////////

     //Present address-start//

    var add_type = req.body.add_type;
    var add_line = req.body.add_line;
    var village = req.body.village;
    var panchayat = req.body.panchayat;
    var city = req.body.city;
    var state = req.body.state;
    var country = req.body.country;
    var pincode = req.body.pincode;
    var rsm = req.body.rsm;
    var rsy = req.body.rsy;

    console.log("Present Address",add_type,add_line,village,city,state,country,panchayat,pincode,rsm,rsy);

    //Present address-end//

    ///////////////////////////////////////////////////////////////////////////////////////

    //Permanent address-start//

    var myCheck = req.body.myCheck;
    var address_line = req.body.address_line;
    var vilg = req.body.vilg;
    var panc = req.body.panc;
    var citie = req.body.citie;
    var stat = req.body.stat;
    var ctry = req.body.ctry;
    var picd = req.body.picd;
    var mnth = req.body.mnth;
    var year = req.body.year;

    console.log("Permanent Address",myCheck,address_line,vilg,panc,citie,stat,ctry,picd,mnth,year);

    //Permanent address-end//

    /////////////////////////////////////////////////////////////////////////////////////////////

    //Loans - start//

    var e_month = req.body.e_month;
    var loan_amt = req.body.loan_amt;
    var amt_used = req.body.amt_used;

    console.log("Loans",e_month,loan_amt,amt_used);

    //Loans - end//

    //////////////////////////////////////////////////////////////////////////////////////////////

    //Nominee - start//

    var nominee_type = req.body.nominee_type;                                     
    var fst_name = req.body.fst_name;                                
    var mid_name = req.body.mid_name;                                
    var lst_name = req.body.lst_name;                                
    var fath_name = req.body.fath_name;                                
    var rel = req.body.rel;                                 
    var gen = req.body.gen_nom;                                 
    var occup = req.body.occup;                                  
    var date_ob = req.body.date_ob;                                
    var ac_num = req.body.ac_num;                                 
    var addr_type = req.body.addr_type;                                 
    var addr_line = req.body.addr_line;                                 
    var vilge = req.body.vilge;                                
    var panch = req.body.panch;                                
    var distcity = req.body.distcity;                                
    var stat1 = req.body.stat1;                                
    var countr = req.body.countr;                                
    var pin_cd = req.body.pin_cd;                                
    var phone_no = req.body.phone_no;                                
    var email = req.body.email;                                
    var adh_no = req.body.adh_no;                                
    var ism = req.body.ism;                                
    
    console.log("Nominee Address",nominee_type,fst_name,mid_name,lst_name,fath_name,rel,gen,occup,date_ob,ac_num,addr_type,addr_line,vilge,panch,distcity,stat1,countr,pin_cd,phone_no,email,adh_no,ism);
    
    pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
    {
        if(err) throw err;
       // console.log("result1 is", result1);


    /*states*/

    // var state = req.body.state;                 
    // console.log(state);
    pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2) 
    {
        if(err) throw err;
        //console.log("result2 is", result2);

    


    /*country*/

    // var country = req.body.country;                 
    // console.log(country);

    pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
    {
        if(err) throw err;
       // console.log("result3 is", result3);


    //Nominee - end//

    /////////////////////////////////////////////////////////////////////////////////////
    console.log("Personal Details",mem_id,title,fname,mname,lname,selectedop,dob,pob,ph_no,email_id,father_name,mar_status,spouse,sgender,fam_members,dept_no,high_edu)
    console.log("Personal Details",religion,caste,occupation,adhar_no,pan_id,voter_id,ration_no,resd_status,cust_category,cust_type)
    console.log("Personal Details",buss_segment,mem_comm,guardian,under_poverty,minority,land_owner,shg_no,kcc,s_mem,s_staf,acc_holder,add_type,add_line,village,panchayat,city,state,country,pincode,rsm,rsy,myCheck,address_line,vilg,panc,citie,stat,ctry,picd,mnth,year,'N',filename_photo,filename_sign)

    pgdbconnect.query("insert into member_details ( md_ch_member_id, md_ch_member_type_code, md_d_doj, md_d_dor, md_ch_admission_number, md_ch_department, md_n_entrance_fee_amt, md_n_opening_share_balance, md_ch_counter_pay, md_n_thrift_deposit, md_ch_dras, md_ch_bank_account_number, md_n_opening_balance, md_n_closing_balance, md_ch_del_flg,md_n_employee_code,md_ch_entrance_fee_cur) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)",[mem_id,mem_typ,doj,dor,adm_no,dept,ent_fee,shr_bal,cntr_pay,thrift_dept,dras,bnk_acc_no,opn_bal,cls_bal,'N',emp_code,crncytyp],function(err,loginres){
    if(err) throw err;
    console.log("Result of Member Details",loginres);

        pgdbconnect.query("insert into member_personal_details (mpd_ch_member_id, mpd_ch_title, mpd_ch_first_name, mpd_ch_middle_name, mpd_ch_last_name, mpd_ch_gender, mpd_d_dob, mpd_ch_pob, mpd_n_phone_number, mpd_ch_emailid, mpd_ch_father_name, mpd_ch_marital_status, mpd_ch_spouse_name, mpd_ch_spouse_gender, mpd_n_total_family_members, mpd_n_no_of_dependents, mpd_ch_higher_qualification, mpd_ch_religion, mpd_ch_caste, mpd_ch_occupation, mpd_n_aadhar_card_number, mpd_n_pan_card_number, mpd_n_voterid, mpd_n_ration_card_number, mpd_ch_residential_status, mpd_ch_customer_category, mpd_ch_customer_type, mpd_ch_business_segment, mpd_ch_member_community, mpd_ch_guardian, mpd_ch_under_poverty, mpd_ch_minority, mpd_ch_land_owned_by, mpd_ch_shg_member, mpd_ch_kcc_holdercharacter, mpd_ch_is_society_member, mpd_ch_is_society_staff, mpd_ch_is_account_holder, mpd_ch_address_type1, mpd_ch_address_line1, mpd_ch_village1, mpd_ch_panchayat1, mpd_ch_city1, mpd_ch_state1, mpd_ch_country1, mpd_n_pincode1, mpd_ch_residing_since_month1, mpd_ch_residing_since_year1, mpd_ch_address_type2, mpd_ch_address_line2, mpd_ch_village2, mpd_ch_panchayat2, mpd_ch_city2, mpd_ch_state2, mpd_ch_country2, mpd_n_pincode2, mpd_ch_residing_since_month2, mpd_ch_residing_since_year2, mpd_ch_del_flg,photo_file_doc_name,signature_file_doc_name) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53,$54,$55,$56,$57,$58,$59,$60,$61)",[mem_id,title,fname,mname,lname,selectedop,dob,pob,ph_no,email_id,father_name,mar_status,spouse,sgender,fam_members,dept_no,high_edu,religion,caste,occupation,adhar_no,pan_id,voter_id,ration_no,resd_status,cust_category,cust_type,buss_segment,mem_comm,guardian,under_poverty,minority,land_owner,shg_no,kcc,s_mem,s_staf,acc_holder,add_type,add_line,village,panchayat,city,state,country,pincode,rsm,rsy,myCheck,address_line,vilg,panc,citie,stat,ctry,picd,mnth,year,'N',filename_photo,filename_sign],function(err,loginres1){
        if(err) throw err;
        console.log("Result of Personal Details",loginres1);

            pgdbconnect.query("insert into member_loan_details ( mld_ch_member_id, mld_ch_eligible_for_loan, mld_n_total_eligible_loan_amount, mld_n_total_amount_used, mld_n_employee_code,mld_ch_del_flg) values ($1,$2,$3,$4,$5,$6)",[mem_id,e_month,loan_amt,amt_used,emp_code,'N'],function(err,resu){
            if(err) throw err;
            console.log("Result of Loan Details",resu);

                pgdbconnect.query("insert into member_nominee_details ( mnd_ch_member_id, mnd_ch_title, mnd_ch_first_name, mnd_ch_middle_name, mnd_ch_last_name, mnd_ch_father_name, mnd_ch_relation, mnd_ch_gender, mnd_d_dob, mnd_n_account_num, mnd_ch_address_type, mnd_ch_address_line, mnd_ch_village, mnd_ch_panchayat, mnd_ch_city, mnd_ch_states, mnd_ch_country, mnd_n_pincode, mnd_n_phone_number, mnd_ch_emailid, mnd_ch_aadhar_card_number, mnd_ch_del_flg, mnd_ch_is_society_member) values  ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23)",[mem_id,nominee_type,fst_name,mid_name,lst_name,fath_name,rel,gen,date_ob,ac_num,addr_type,addr_line,vilge,panch,distcity,state,countr,pin_cd,phone_no,email,adh_no,'N',ism],function(err,resul){
                if(err) throw err;
                console.log("Result of Nominee Details",resul);
                });
            });
        });
    });

    

    req.flash('success_msg',"Data inserted successfully");
                   res.locals.message=req.flash();

    res.render('memberModule/memberAddDetails',{
        cities:result1.rows,
        states:result2.rows,
        countries:result3.rows
    });
    });
});
});
});

router.get('/memberdetails',function(req,res){
   pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
   {
       if(err) throw err;
       console.log("result1 is", result1);

   pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2)
   {
       if(err) throw err;
       console.log("result2 is", result2);

   pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
   {
       if(err) throw err;
       console.log("result3 is", result3);

      // req.flash('success_msg',"Data inserted successfully");
                   //res.locals.message=req.flash();

       res.render('memberModule/memberAddDetails',{
       cities:result1.rows,
        states:result2.rows,
        countries:result3.rows
   });
   });
   });
});
});



// ////////////////////////////////////
// router.get('/memberdetails',function(req,res){

//    pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
//    {
//        if(err) throw err;
//        console.log("result1 is", result1);


//    /*states*/

//    // var state = req.body.state;
//    // console.log(state);
//    pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2)
//    {
//        if(err) throw err;
//        console.log("result2 is", result2);



//    /*country*/

//    // var country = req.body.country;
//    // console.log(country);

//    pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
//    {
//        if(err) throw err;
//        console.log("result3 is", result3);

//     //    req.flash('success_msg',"Data inserted successfully");
//     //                res.locals.message=req.flash();

//        res.render('memberModule/memberAddDetails',{
//        cities:result1.rows,
//         states:result2.rows,
//         countries:result3.rows
//    });
//    });
//    });
// });
// });



/* Farm machinery-start*/

// Members Farm Machinery Page
router.get('/mem_farm_add',function(req,res){
    var divtype=req.query.key;

   pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id",function(err,result2) {
   res.render('memberModule/member_farm_machinery',{
        memberdetails:result2.rows,
        pagetype:divtype
   });
});
});

// Members Farm Machinery Search Page
router.get('/mem_farm_search',function(req,res){

     pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id",function(err,result2) {

         pgdbconnect.query("select * from farm_machinery_details where fmd_ch_del_flg='N'",function(err,result3) {
   res.render('memberModule/member_farm_machinery_search',{
 memberdetails:result2.rows,
 memfarmdetails:result3.rows
   });
     });
     });
});

router.post('/mem_farm_machinery_add',mem_farm_machinery);
    function mem_farm_machinery(req,res){


        var memid=req.body.mem_sel;
        var VechicleName=req.body.vehiclename;
        var VechilceRegisterNumber=req.body.vehicle_reg_num;
        var YearofPurchase=req.body.yearofpurchase;
        var VechicleDescription=req.body.vehicledescription;
        var PurchaseValue=req.body.purchase_value;
        var marketValue=req.body.market_value;
        var farmmachineryid;

console.log('VechicleName',VechicleName);
console.log('VechilceRegisterNumber',VechilceRegisterNumber);
console.log('YearofPurchase',YearofPurchase);
console.log('VechicleDescription',VechicleDescription);

pgdbconnect.query("select * from farm_machinery_details",function(err,result) {
    if(result.rowCount==0){
        farmmachineryid='1'
  pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id",function(err,result2) {

pgdbconnect.query("insert into farm_machinery_details(fmd_n_farm_mach_id,fmd_ch_member_id,fmd_ch_vehicle_name,fmd_n_vehicle_reg_num,fmd_ch_year_of_purchase,fmd_ch_vehicle_description,fmd_ch_purchase_value,fmd_n_market_value,fmd_ch_del_flg)values($1,$2,$3,$4,$5,$6,$7,$8,$9)",[farmmachineryid,memid,VechicleName,VechilceRegisterNumber,YearofPurchase,VechicleDescription,PurchaseValue,PurchaseValue,'N'],function(err,formres){

    if (err)
    {
        console.error('Error with table query', err);
}
else
{
      req.flash('success_msg', 'Record Added successfully');
      res.locals.message=req.flash();
      res.render('memberModule/member_farm_machinery',{
         pagetype:'ADD',
        // memfarmdetails:result2.rows,
         memberdetails:result2.rows
     });
}

});
    });

}
else{
  pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id",function(err,result2) {

     pgdbconnect.query("select max(fmd_n_farm_mach_id) from farm_machinery_details",function(err,result) {
        console.log("max value check",result)
        console.log("max value check",result.rows[0].max)

        farmmachineryid=parseInt(result.rows[0].max)+1;
        console.log("when more rows exxxists",farmmachineryid)

pgdbconnect.query("insert into farm_machinery_details(fmd_n_farm_mach_id,fmd_ch_member_id,fmd_ch_vehicle_name,fmd_n_vehicle_reg_num,fmd_ch_year_of_purchase,fmd_ch_vehicle_description,fmd_ch_purchase_value,fmd_n_market_value,fmd_ch_del_flg)values($1,$2,$3,$4,$5,$6,$7,$8,$9)",[farmmachineryid,memid,VechicleName,VechilceRegisterNumber,YearofPurchase,VechicleDescription,PurchaseValue,PurchaseValue,'N'],function(err,formres){

    if (err)
    {
        console.error('Error with table query', err);
}
else
{
      req.flash('success_msg', 'Record Added successfully');
      res.locals.message=req.flash();
      res.render('memberModule/member_farm_machinery',{
         pagetype:'ADD',
          memberdetails:result2.rows
     });
}

});
     });
});
}
});
    }



    router.post('/edit_data_record_farm_mach',function(req,res){
    console.log("FARM MACHINERY EDIT DATA POPULATE");
    var divtype="EDIT";


    //Bank Branch details-start//
var farmmachinery_id= req.body.farmmachinery_ed_id;
console.log("farm  id to edit",farmmachinery_id)
pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id",function(err,result2) {

            //console.log("Result of Branch", result5);
       pgdbconnect.query("select * from farm_machinery_details where fmd_n_farm_mach_id=$1 ",[farmmachinery_id],function(err,searchres)

            {
                console.log("searchres")
    var member_farm_id = searchres.rows[0].fmd_n_farm_mach_id;
    var memberid= searchres.rows[0].fmd_ch_member_id;
    var vehiclename = searchres.rows[0].fmd_ch_vehicle_name;
    var vehicle_reg_num =  searchres.rows[0].fmd_n_vehicle_reg_num;
    var year_of_purchase =  searchres.rows[0].fmd_ch_year_of_purchase;

    var vehicle_desc = searchres.rows[0].fmd_ch_vehicle_description;
    var purchase_value =  searchres.rows[0].fmd_ch_purchase_value;
    var market_value =  searchres.rows[0].fmd_n_market_value;




    res.render('memberModule/member_farm_machinery',{
        member_farm_id:member_farm_id,
        memberid:memberid,
        vehiclename:vehiclename,
        vehicle_reg_num:vehicle_reg_num,
        year_of_purchase:year_of_purchase,
        vehicle_desc:vehicle_desc,
        purchase_value:purchase_value,
        market_value:market_value,
        pagetype:"EDIT",
        memberdetails:result2.rows
    });
});

 });
    });

router.post('/update_farm_mach_save',update_farm_mach_save)
 function update_farm_mach_save(req,res){

   var member_farm_id=req.body.memfarmid_edit;
   var memberid=req.body.memberid_ed;
   var vehiclename=req.body.vehiclename_ed;
   var vehicle_reg_num=req.body.vehicle_reg_num_ed;
   var year_of_purchase=req.body.yearofpurchase_ed;
   var vehicle_desc=req.body.vehicledescription_ed;
   var purchase_value=req.body.purchase_value_ed;
   var market_value=req.body.market_value_ed;

console.log("Data to update FARM MACHINERY",memberid,vehiclename,vehicle_reg_num,year_of_purchase,vehicle_desc,purchase_value,market_value,member_farm_id);

  pgdbconnect.query("UPDATE farm_machinery_details SET fmd_ch_member_id=$1, fmd_ch_vehicle_name=$2, fmd_n_vehicle_reg_num=$3, fmd_ch_year_of_purchase=$4, fmd_ch_vehicle_description=$5, fmd_ch_purchase_value=$6, fmd_n_market_value=$7,fmd_n_farm_mach_id=$8  WHERE fmd_n_farm_mach_id=$9 ",[memberid,vehiclename,vehicle_reg_num,year_of_purchase,vehicle_desc,purchase_value,market_value,member_farm_id,member_farm_id],function(err,farmmachupdate){

    if (err) throw err;
    console.log("FARM MACHINERY UPDATED RESULT",farmmachupdate)

   pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id",function(err,memberdetails){

         pgdbconnect.query("select * from farm_machinery_details where fmd_ch_del_flg='N' order by fmd_n_farm_mach_id",function(err,farmmachinerydetails){
    req.flash('success_msg', 'Record Updated successfully');
    res.locals.message=req.flash();
   res.render('memberModule/member_farm_machinery_search',{
    memberdetails:memberdetails.rows,
   memfarmdetails: farmmachinerydetails.rows

});
   });

});
  });
 }

 router.post('/view_data_record_farm_mach',function(req,res){
    console.log("FARM MACHINERY EDIT DATA POPULATE");
    var divtype="VIEW";


    //Bank Branch details-start//
var farmmachinery_id= req.body.farmmachinery_vw_id;
console.log("farm  id to view",farmmachinery_id)
pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id",function(err,result2) {

            console.log("VIEWWWWWWWW", result2);
       pgdbconnect.query("select * from farm_machinery_details where fmd_n_farm_mach_id=$1",[farmmachinery_id],function(err,searchres)

            {
                console.log("searchres")
    var member_farm_id = searchres.rows[0].fmd_n_farm_mach_id;
    var memberid= searchres.rows[0].fmd_ch_member_id;
    var vehiclename = searchres.rows[0].fmd_ch_vehicle_name;
    var vehicle_reg_num =  searchres.rows[0].fmd_n_vehicle_reg_num;
    var year_of_purchase =  searchres.rows[0].fmd_ch_year_of_purchase;
    var vehicle_desc = searchres.rows[0].fmd_ch_vehicle_description;
    var purchase_value =  searchres.rows[0].fmd_ch_purchase_value;
    var market_value =  searchres.rows[0].fmd_n_market_value;


    res.render('memberModule/member_farm_machinery',{
        member_farm_id:member_farm_id,
        memberid:memberid,
        vehiclename:vehiclename,
        vehicle_reg_num:vehicle_reg_num,
        year_of_purchase:year_of_purchase,
        vehicle_desc:vehicle_desc,
        purchase_value:purchase_value,
        market_value:market_value,
        pagetype:"VIEW",
        memberdetails:result2.rows
    });
});

 });
    });


router.post('/delete_data_record_farm_mach',delete_data_record_farm_mach)
 function delete_data_record_farm_mach(req,res){

var member_farm_id=req.body.farmmachinery_dl_id;

 pgdbconnect.query("UPDATE farm_machinery_details SET fmd_ch_del_flg='Y' WHERE fmd_n_farm_mach_id=$1 ",[member_farm_id],function(err,farmmachupdate){

    if (err) throw err;
    console.log("FARM MACHINERY UPDATED RESULT",farmmachupdate)

   pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id",function(err,memberdetails){

         pgdbconnect.query("select * from farm_machinery_details where fmd_ch_del_flg='N' order by fmd_n_farm_mach_id",function(err,farmmachinerydetails){
    req.flash('success_msg', 'Record Deleted successfully');
    res.locals.message=req.flash();
   res.render('memberModule/member_farm_machinery_search',{
    memberdetails:memberdetails.rows,
    memfarmdetails: farmmachinerydetails.rows

});
   });
});
 });

}


router.post('/mem_farm_search1',function(req,res){
var farm_mch_id=req.body.mem_sel;
var vehiclename=req.body.vehiclename1;
console.log("Seacrh 222",farm_mch_id,vehiclename)
     pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id ",function(err,result2) {

         pgdbconnect.query("select * from farm_machinery_details where fmd_ch_member_id=$1 and fmd_ch_vehicle_name=$2 and fmd_ch_del_flg='N'",[farm_mch_id,vehiclename],function(err,result3) {
   res.render('memberModule/member_farm_machinery_search',{
 memberdetails:result2.rows,
 memfarmdetails:result3.rows
   });
     });
     });
});
/* Farm machinery-end*/



/*Member Dividend -START*/

router.post('/edit_data_record',function(req,res){
    console.log("populate fields");
    var divtype="EDIT";
  console.log("DIV TYPE on edit populate",divtype);

    //Bank Branch details-start//

var memid= req.body.tempmemberid;
// var memid1= req.body.tempmemberid;

console.log("member id to edit",memid)


            //console.log("Result of Branch", result5);
            pgdbconnect.query("select * from member_dividend where md_n_member_dividend_id=$1",[memid],function(err,searchres)

            {

                pgdbconnect.query("select * from member_details ",function(err,memres){

                console.log("searchres")
    var member_div_id = searchres.rows[0].md_n_member_dividend_id;
    var member_id=searchres.rows[0].md_ch_member_id;
    var shares = searchres.rows[0].md_n_num_shares;
    var share_fee =  searchres.rows[0].md_n_share_fee;
    var divpay =  searchres.rows[0].md_n_dividend_payable;

    var totdivpay = searchres.rows[0].md_n_tot_dividend_payable;
    var finacialyear =  searchres.rows[0].md_ch_financial_year;
    var shareinclude =  searchres.rows[0].md_n_num_shares_included;
    var sharecapital=  searchres.rows[0].md_n_share_capital;
var divdentAmt=  searchres.rows[0].bad_n_dividend_amt;
    var divarr =  searchres.rows[0].md_n_dividend_arrears;
    var income =  searchres.rows[0].md_n_others_income;
    var finalamt =  searchres.rows[0].md_n_final_amt;
   // var folio =  searchres.rows[0].md_n_folio_num;

console.log("edit populate dividend",member_div_id,member_id,shares,share_fee,divpay,totdivpay,finacialyear,shareinclude,sharecapital,divarr,income,finalamt)
    req.flash('success_msg', 'Data can be Editable');
res.locals.message=req.flash();



    pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){


                res.render('memberModule/member_dividend',{

        //bankdetails:searchbrres.rows,
        member_div_id:member_div_id,
        shares:shares,
        share_fee:share_fee,
        divpay:divpay,

        totdivpay:totdivpay,
        finacialyear:finacialyear,
        shareinclude:shareinclude,
        sharecapital:sharecapital,
         divdentAmt:divdentAmt,
        divarr:divarr,
        income:income,
        finalamt:finalamt,
       
        

        pagetype:"EDIT",
        Dividendres:memres.rows,
        member_id:member_id,
       memberdetails:ressearch1.rows

                });

    });
});

            });
 });

 router.post('/viewdata_record',function(req,res){

    var divtype="VIEW";
    console.log("DIV TYPE on edit populate",divtype);

    //Bank Branch details-start//
var memid= req.body.tempmemberid1;
console.log("member id to edit",memid)


pgdbconnect.query("select * from member_dividend where md_n_member_dividend_id=$1",[memid],function(err,searchres)

{
    console.log("searchres")
var member_id = searchres.rows[0].md_n_member_dividend_id;
var member_id1c=searchres.rows[0].md_ch_member_id;
var shares = searchres.rows[0].md_n_num_shares;
var share_fee =  searchres.rows[0].md_n_share_fee;
var divpay =  searchres.rows[0].md_n_dividend_payable;

var totdivpay = searchres.rows[0].md_n_tot_dividend_payable;
var finacialyear =  searchres.rows[0].md_ch_financial_year;
var shareinclude =  searchres.rows[0].md_n_num_shares_included;
var sharecapital=  searchres.rows[0].md_n_share_capital;
var divdentAmt=  searchres.rows[0].bad_n_dividend_amt;
var divarr =  searchres.rows[0].md_n_dividend_arrears;
var income =  searchres.rows[0].md_n_others_income;
var finalamt =  searchres.rows[0].md_n_final_amt;
//var folio =  searchres.rows[0].md_n_folio_num;


console.log("data to edit",member_id,shares,share_fee,divpay,totdivpay);


req.flash('success_msg', 'Data viewing successfully');
res.locals.message=req.flash();
    pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){

    res.render('memberModule/member_dividend',{

//bankdetails:searchbrres.rows,
member_id:member_id,
member_id1c:member_id1c,
shares:shares,
share_fee:share_fee,
divpay:divpay,

divdentAmt:divdentAmt,
totdivpay:totdivpay,
finacialyear:finacialyear,
shareinclude:shareinclude,
sharecapital:sharecapital,

divarr:divarr,
income:income,
finalamt:finalamt,
//folio:folio,


pagetype:"VIEW",
memberdetails:ressearch1.rows


});
});
});


});



router.post('/delete_member_dividend_record',function(req,res){



    var memid= req.body.tempmemberid2;
    console.log("id to delete",memid)
    pgdbconnect.query("update member_dividend set md_ch_del_flg=$1 where md_n_member_dividend_id=$2",['Y',memid],function(err,delres){

        console.log("deleted result",delres);
        pgdbconnect.query("select * from member_dividend where md_ch_del_flg=$1",['N'],function(err,searchres){
                       pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){

    //Bank Branch details-start//
    req.flash('success_msg', 'Record Deleted successfully');
    res.locals.message=req.flash();
        res.render('memberModule/member_div_search',{
            ressearch:searchres.rows,
            memberdetails:ressearch1.rows

    });
                       });
});
});
});



router.get('/mem_div_search',mem_div_search)
function mem_div_search(req,res){
    console.log("MEMBER DIVIDEND SEARCH")


     pgdbconnect.query("select * from member_dividend where md_ch_del_flg='N' ",function(err,ressearch){

         if(err)
         {
            console.log("result1 is", ressearch);
         }
else
{

    var ressearch = ressearch.rows;
                       pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){
res.render('memberModule/member_div_search',{
        ressearch:ressearch,
        memberdetails:ressearch1.rows


    });
                       });
}

});
}

router.post('/mem_dividend_searcher',mem_dividend_searcher)
    function mem_dividend_searcher(req,res)
    {
    console.log("MEMBER SEARCHing");
    var mid=req.body.opn_shr_bal;
    var fyear=req.body.opn_shr_bal1
    console.log('midpppppp',mid);

 console.log('fyear',fyear);

    pgdbconnect.query("select * from member_dividend where md_ch_member_id=$1 and md_ch_financial_year=$2 and md_ch_del_flg=$3",[mid,fyear,'N'],function(err,ressearch1){
        console.log("search result",ressearch1.rows)
        if(err)
        {
           console.log("Error with table query", err);
        }

        else
        {


   pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch){

            res.render('memberModule/member_div_search',{
                ressearch:ressearch1.rows,
                memberdetails:ressearch.rows,

            });
          });
        }


        });
    }


router.get('/mem_div',mem_div)
function mem_div(req,res){

var divtype=req.query.key;
    console.log("page type on member module",divtype)
 pgdbconnect.query("select * from member_details",function(err,Dividendres){
 if (err)
  {
             console.error('Error with table query', err);
 }
 else
 {
             var Dividendres = Dividendres.rows;

            pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){


    res.render('memberModule/member_dividend',
    {
pagetype:"ADD",
    Dividendres:Dividendres,
    memberdetails:ressearch1.rows
  });

});
}
 });
}




 router.post('/mem_div_insert',mem_div_insert)
 function mem_div_insert(req,res){

   var mid=req.body.div_sel;
   var mid1=req.body.opn_shr_bal;
   var share=req.body.ent_fee1;
   var sharesinclude=req.body.no_f_shr_inc;
   var sharefree=req.body.ent_fee2;
   var sharecapital=req.body.opn_shr_bal1;
   var dividendamount=req.body.ent_fee3;
   var DividendArrears=req.body.opn_shr_bal2;
   var DividendPayable=req.body.ent_fee4;
   var OtherIncome=req.body.opn_shr_bal3;
 var TotalDiviodendpayable=req.body.ent_fee5;
   var FinalAmount=req.body.opn_shr_bal4;

console.log('shares',share);
console.log('sharesinclude',sharesinclude);
console.log('sharesinclude',sharesinclude);
console.log('sharefree',sharefree);
console.log('sharecapital',sharecapital);
console.log('dividendamount',dividendamount);
console.log('DividendArrears',DividendArrears);
console.log('DividendPayable',DividendPayable);
console.log('FinalAmount',FinalAmount);
var memberdivid;
pgdbconnect.query("select * from member_dividend",function(err,result) {
    if(result.rowCount==0){
        memberdivid=1;
console.log("dividend details",TotalDiviodendpayable,memberdivid,mid,mid1,share,sharesinclude,sharefree,sharecapital,dividendamount,DividendArrears,DividendPayable,FinalAmount,OtherIncome)
pgdbconnect.query("insert into member_dividend(md_n_member_dividend_id,md_ch_member_id,md_ch_financial_year,md_n_num_shares,md_n_num_shares_included,md_n_share_fee,md_n_share_capital,md_n_dividend_payable,md_n_dividend_arrears,bad_n_dividend_amt,md_n_tot_dividend_payable,md_n_final_amt,md_n_others_income,md_ch_del_flg) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)",[memberdivid,mid,mid1,share,sharesinclude,sharefree,sharecapital,DividendPayable,DividendArrears,dividendamount,TotalDiviodendpayable,FinalAmount,OtherIncome,'N'],function(err,Dividendres1){
            if (err)
            {
                       console.error('Error with table query', err);
           }
           else
         {

           req.flash('success_msg', 'Data inserted successfully');
           res.locals.message=req.flash();

                       pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){
           res.render('memberModule/member_dividend',{
            memberdetails:ressearch1.rows,
            pagetype:"ADD"
        });
           });
         }
        });
    }

    else{

        pgdbconnect.query("select max(md_n_member_dividend_id) from member_dividend",function(err,result) {
            console.log("max value check",result)
            console.log("max value check",result.rows[0].max)

            memberdivid=parseInt(result.rows[0].max)+1;
            console.log("when more rows exxxists",memberdivid)


console.log("dividend details",TotalDiviodendpayable,memberdivid,mid,mid1,share,sharesinclude,sharefree,sharecapital,dividendamount,DividendArrears,DividendPayable,FinalAmount,OtherIncome)

pgdbconnect.query("insert into member_dividend(md_n_member_dividend_id,md_ch_member_id,md_ch_financial_year,md_n_num_shares,md_n_num_shares_included,md_n_share_fee,md_n_share_capital,md_n_dividend_payable,md_n_dividend_arrears,bad_n_dividend_amt,md_n_tot_dividend_payable,md_n_final_amt,md_n_others_income,md_ch_del_flg) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)",[memberdivid,mid,mid1,share,sharesinclude,sharefree,sharecapital,DividendPayable,DividendArrears,dividendamount,TotalDiviodendpayable,FinalAmount,OtherIncome,'N'],function(err,Dividendres1){
    if (err)
    {
               console.error('Error with table query', err);
   }
   else
 {
   // res.redirect('/memberDetailsModule/memberDetails/mem_div');
   //flash messege
   req.flash('success_msg', 'Data inserted successfully');
   res.locals.message=req.flash();

            pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){
           res.render('memberModule/member_dividend',{
            memberdetails:ressearch1.rows,
            pagetype:"ADD"
        });
   });
}
});

});

    }
 });
}

//insert editing data
/////////////////////////////////////////////////////////////////////////352///

router.post('/member_editing',member_editing)
 function member_editing(req,res){
var memdivid=req.body.memdivid_edit;
   var mid=req.body.opn_shr_bal_vw;
   var memberid=req.body.memberid_ed;
   var fyear=req.body.opn_shr_bal_ed11;
   var share=req.body.ent_fee_ed;
   var sharesinclude=req.body.opn_shr_bal_ed;
   var sharefree=req.body.ent_fee_ed1;
   var sharecapital=req.body.opn_shr_bal_ed1;
   var dividendamount=req.body.ent_fee_ed2;
   var DividendArrears=req.body.opn_shr_bal_ed2;
   var DividendPayable=req.body.ent_fee_ed3;
   var OtherIncome=req.body.opn_shr_bal_ed3;
  var TotalDiviodend=req.body.ent_fee_ed4;
   var FinalAmount=req.body.opn_shr_bal_ed4;
 

console.log('middd',mid);
console.log('fyear',fyear);
console.log('sharesinclude',sharesinclude);
console.log("mem div id",memdivid)
console.log("editable data",fyear,share,sharesinclude,sharefree,sharecapital,dividendamount,DividendArrears,DividendPayable,FinalAmount,OtherIncome,memberid,TotalDiviodend,memdivid)
pgdbconnect.query("update member_dividend set md_ch_financial_year=$1,md_n_num_shares=$2,md_n_num_shares_included=$3,md_n_share_fee=$4,md_n_share_capital=$5,bad_n_dividend_amt=$6,md_n_dividend_payable=$7,md_n_dividend_arrears=$8,md_n_final_amt=$9,md_n_others_income=$10,md_ch_member_id=$11,md_n_tot_dividend_payable=$12 where md_n_member_dividend_id=$13",
[fyear,share,sharesinclude,sharefree,sharecapital,dividendamount,DividendPayable,DividendArrears,FinalAmount,OtherIncome,memberid,TotalDiviodend,memdivid],function(err,Dividendedit){
    if (err)
    {
               console.error('Error with table query', err);
   }
   else
 {
   // res.redirect('/memberDetailsModule/memberDetails/mem_div');
   //flash messege
//    req.flash('success_msg', 'Data inserted successfully');
//    res.locals.message=req.flash();

   pgdbconnect.query("select * from member_dividend where md_ch_del_flg='N'",function(err,Dividendupdate){
//     req.flash('success_msg', 'Data inserted successfully');
//     res.locals.message=req.flash();
//    res.render('memberModule/member_div_dividend',{
//     // Dividendupdate:Dividendupdate.rows,
//     //  pagetype:"EDIT"
          pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){

req.flash('success_msg', 'Record updated successfully');
res.locals.message=req.flash();
    res.render('memberModule/member_div_search',{
        ressearch:Dividendupdate.rows,
        memberdetails:ressearch1.rows

 });
   });
   });
 }

});
 }

/*Member Dividend -END*/


/*KCC -START*/
router.get('/kcc_search',function(req,res){

    console.log("Entered Kcc Search");
    pgdbconnect.query("select * from member_card_details where mcd_ch_del_flg='N' order by mcd_ch_member_id",function(err,ressearch){

        if(err)
        {
           console.log("result1 is", ressearch);
        }
 else
 {
    console.log("ressearch",ressearch)
   var ressearch = ressearch.rows;
 }
    res.render('memberModule/member_kcc_search',{
       ressearch:ressearch,
       moment:moment
 
   });
 });
 });


///// Member kcc search
router.post('/mem_kcc_func',function(req,res){

    var mem_name=req.body.mem_name1;
    var card_num=req.body.card_num1;
    console.log("data to search",mem_name,card_num)
    pgdbconnect.query("select * from member_card_details where mcd_ch_member_name=$1 and mcd_ch_card_number=$2",[mem_name,card_num],function(err,ressearch1){
        console.log("search result",ressearch1.rows)
        if(err)
        {
           console.log("Error with table query", err);
        }
        else
        {
                res.render('memberModule/member_kcc_search',{
                ressearch:ressearch1.rows,
                moment:moment
            });
        }
        });
     });



// Members kcc , add card details(ejs)
router.get('/kcc',function(req,res){

    var divtype=req.query.key;
    console.log("page type on member module",divtype);

    pgdbconnect.query("select md_ch_member_id from member_details",function(err,Dividendres){
        if (err)
        {
        console.error('Error with table query', err);
        }
        else
        {
        var Dividendres = Dividendres.rows;
        }

        res.render('memberModule/member_kcc_add',
        {
            pagetype:divtype,
        Dividendres:Dividendres

        });
        });
        });


///// Kcc add details , add card details(ejs)////
router.post('/mem_kcc_add',function(req,res){
    console.log("kccccc");
    var memid= req.body.div_sel_kcc;
    var mem_name=req.body.mem_name;
    var issued_btwn= req.body.kcc_from_date;//
    var issued_btwn_and=req.body.kcc_to_date;
    var card_num= req.body.card_num;
console.log("issued_btwn",issued_btwn,issued_btwn_and)
    var membercardid;

    pgdbconnect.query("select * from member_card_details",function(err,result) {
        if(result.rowCount==0){
            membercardid=1;

                pgdbconnect.query("insert into member_card_details(mcd_ch_member_id, mcd_ch_member_name, mcd_ch_card_number, mcd_d_from_date, mcd_d_to_date,mcd_ch_del_flg,md_n_member_card_id) values($1,$2,$3,$4,$5,$6,$7)",[memid,mem_name,card_num,issued_btwn,issued_btwn_and,'N',membercardid],function(err,result){


            if (err)
                {
                           console.error('Error with table query', err);
               }
               else
             {

                pgdbconnect.query("select md_ch_member_id from member_details",function(err,Dividendres){
                 console.log("sssssssss",result);
                  req.flash('success_msg', 'Record Inserted successfully');
     res.locals.message=req.flash();
                res.render('memberModule/member_kcc_add',
                {
                Dividendres:Dividendres.rows,
                pagetype:"ADD"
                });
                });
             }

              });
            } /////endof result.rowCount

            else{

                pgdbconnect.query("select max(md_n_member_card_id) from member_card_details",function(err,result) {
                    console.log("max value check",result)
                    console.log("max value check",result.rows[0].max)

                    membercardid=parseInt(result.rows[0].max)+1;
                    console.log("when more rows exxxists",membercardid)

                    pgdbconnect.query("insert into member_card_details(mcd_ch_member_id, mcd_ch_member_name, mcd_ch_card_number, mcd_d_from_date, mcd_d_to_date,mcd_ch_del_flg,md_n_member_card_id) values($1,$2,$3,$4,$5,$6,$7)",[memid,mem_name,card_num,issued_btwn,issued_btwn_and,'N',membercardid],function(err,result){
                        if (err)
                        {
                                   console.error('Error with table query', err);
                       }
                       else
                     {
                        pgdbconnect.query("select md_ch_member_id from member_details",function(err,Dividendres){
                         console.log("sssssssss",result);
                          req.flash('success_msg', 'Record Inserted successfully');
     res.locals.message=req.flash();
                        res.render('memberModule/member_kcc_add',
                        {
                        Dividendres:Dividendres.rows,
                        pagetype:"ADD"
                        });
                        });
                     }
                      });
            });
    }
    });
 });


router.post('/mem_kcc_edit',mem_kcc_edit)
function mem_kcc_edit(req,res){

    var member_kcc_id=req.body.kkcidp;
    var div_sel_edit=req.body.memkcc_edit;
    var mem_name_edit=req.body.mem_name2;
    var memberid=req.body.memid_kcc_ed;
    //var date_btw_from_edit=req.body.iss_btwn2;
    var date_btw_from_edit=req.body.kcc_from_date_ed;
  
    //var date_btw_to_edit=req.body.iss_btwn_and2;
    var date_btw_to_edit=req.body.kcc_to_date_ed;
    var card_num_edit=req.body.card_num2;

    console.log('member_kcc_id',member_kcc_id);
    console.log('div_sel_edit',div_sel_edit);
    console.log('mem_name_editar',mem_name_edit);
    console.log('date_btw_from_edit',date_btw_from_edit);
    console.log('date_btw_to_edit',date_btw_to_edit);
    console.log('card_num_edit',card_num_edit);


    pgdbconnect.query("UPDATE member_card_details set mcd_ch_member_name=$1,mcd_ch_card_number=$2,mcd_d_to_date=$3,mcd_d_from_date=$4,mcd_ch_member_id=$5 where md_n_member_card_id=$6 and  mcd_ch_del_flg='N'",[mem_name_edit,card_num_edit,date_btw_to_edit,date_btw_from_edit,memberid,div_sel_edit],function(err,Dividendedit){

    if (err) throw err;
     console.log("KCC UPDATED RESULT",Dividendedit);

//    pgdbconnect.query("select * from member_details where mcd_ch_del_flg='N' order by mcd_ch_member_id",function(err,Dividendupdate){
    pgdbconnect.query("select * from member_card_details where mcd_ch_del_flg='N' order by mcd_ch_member_id",function(err,kccdetails){

     req.flash('success_msg', 'Record Updated successfully');
     res.locals.message=req.flash();

    res.render('memberModule/member_kcc_search',{
        // Dividendres:Dividendupdate.rows,
        ressearch: kccdetails.rows,
        moment:moment
 
 });
    });
    });


// });
}

router.post('/edit_data_populate_kcc',function(req,res){
    console.log("populate fields");
    var divtype="EDIT";
  console.log("DIV TYPE on edit populate",divtype);

    //kcc details-start//
var memid= req.body.tempmemberid_edit_kcc;
console.log("member id to edit",memid)

    //   pgdbconnect.query("select * from member_details where mcd_ch_del_flg='N' order by mcd_ch_member_id",function(err,result2) {


            //console.log("Result of Branch", result5);
            pgdbconnect.query("select * from member_card_details where md_n_member_card_id=$1",[memid],function(err,searchres)
            {

       pgdbconnect.query("select * from member_details",function(err,result2) {


                console.log("searchres");

    var member_n_id = searchres.rows[0].md_n_member_card_id;
     var member_id = searchres.rows[0].mcd_ch_member_id;
    var memberName = searchres.rows[0].mcd_ch_member_name;
    var cardNum =  searchres.rows[0].mcd_ch_card_number;
    var fromDate =  searchres.rows[0].mcd_d_from_date;
    var toDate = searchres.rows[0].mcd_d_to_date;

   console.log("member_n_id",member_n_id);
   console.log("member_id",member_id);
    console.log("data to edit",member_id,memberName,cardNum,fromDate,toDate);



                res.render('memberModule/member_kcc_add',{

        //bankdetails:searchbrres.rows,
        member_id:member_id,
        member_n_id:member_n_id,
        member_Name:memberName,
        card_Num:cardNum,
        from_Date:fromDate,
        to_Date:toDate,
        pagetype:"EDIT",
        Dividendres:result2.rows,
        moment:moment


    });

});
});
 });


 router.post('/viewdata_populate_kcc',function(req,res){

    var divtype="VIEW";
    console.log("DIV TYPE on edit populate",divtype);


var memid= req.body.tempmemberid_view_kcc;
console.log("member id to edit",memid)


pgdbconnect.query("select * from member_card_details where md_n_member_card_id=$1",[memid],function(err,searchres)

{
    console.log("searchres")

    var member_id = searchres.rows[0].md_n_member_card_id;
    var memberName = searchres.rows[0].mcd_ch_member_name;
    var cardNum =  searchres.rows[0].mcd_ch_card_number;
    var fromDate =  searchres.rows[0].mcd_d_from_date;
    var toDate = searchres.rows[0].mcd_d_to_date;

    console.log("data to view",member_id,memberName,cardNum,fromDate,toDate);


                res.render('memberModule/member_kcc_add',{


            member_id:member_id,
            member_Name:memberName,
            card_Num:cardNum,
            from_Date:fromDate,
            to_Date:toDate,
            pagetype:"VIEW",
            Dividendres:searchres.rows,
            moment:moment
           


            });
            });
            });


     router.post('/delete_data_record_kcc',function(req,res){
     console.log('entering to delete');
var member_kcc_id=req.body.kcc_dl_id;
    console.log("id to delete",member_kcc_id)

 pgdbconnect.query("UPDATE member_card_details SET mcd_ch_del_flg=$1 where md_n_member_card_id=$2",['Y',member_kcc_id],function(err,kccupdate){

    if (err) throw err;
    console.log("KCC UPDATED RESULT AFTER DELETE",kccupdate)


         pgdbconnect.query("select * from member_card_details where mcd_ch_del_flg='N' order by mcd_ch_member_id",function(err,kccdetails){
    req.flash('success_msg', 'Record Deleted successfully');
    res.locals.message=req.flash();
   res.render('memberModule/member_kcc_search',{
    // memberdetails:memberdetails.rows,
    ressearch: kccdetails.rows,
    moment:moment

});
   });
});


});
/*KCC -END*/

/* MEMBER SHARE DETAILS- START*/
router.get('/mem_share',mem_share)
function mem_share(req,res){

var divtype=req.query.key;
    console.log("page type on member module",divtype)
 pgdbconnect.query("select * from member_details",function(err,memres){
 if (err)
  {
             console.error('Error with table query', err);
 }
 else
 {
             var memresult = memres.rows;
 }


    res.render('memberModule/member_shares',
    {
pagetype:"ADD",
memberdetails:memresult
  });
});
}







 router.post('/mem_share_details_insert',mem_share_details_insert)
 function mem_share_details_insert(req,res)
 {
    var memid=req.body.div_share;
    // var date=req.body.date;
    // changed by ranjeet
     var date=req.body.shr_date;
    
    // var boardmeeting=req.body.date1;
    var boardmeeting=req.body.do_brd_mtg;
    //  end changes
    var boardmeetingid=req.body.opn_shr_bal;
    var boardmeetingdetails=req.body.meeting_details;
    console.log('memberdetailsinsert',boardmeetingdetails)
    var FolioMember=req.body.ent_fee1;
    var ShareValue=req.body.ent_fee2;
    var CertificateNo=req.body.opn_shr_bal2;
    var DistinctiveNumber=req.body.ent_fee3;
    var ShareRedeemed=req.body.opn_shr_bal3;
    var RedeemedShareValue=req.body.ent_fee4;
    var RedeemedDistinctiveNumber=req.body.opn_shr_bal4;
    var BalanceShares=req.body.ent_fee5;
    var BalanceShareValues=req.body.opn_shr_bal5;
    var CertificateBalanceShares=req.body.ent_fee6;
    var DistinctiveShareBalance=req.body.opn_shr_bal6;
    var Days=req.body.ent_fee7;
    var Product=req.body.Product;
    var shares_allocated=req.body.opn_shr_bal1

   console.log('mid',memid);
   console.log('date',date);
   console.log('boardmeeting',boardmeeting);
   console.log('boardmeetingdetails',boardmeetingdetails);
   console.log('FolioMember',FolioMember);
   console.log('ShareValue',ShareValue);
   console.log('CertificateNo',CertificateNo);
   console.log('DistinctiveNumber',DistinctiveNumber);
   console.log('ShareRedeemed',ShareRedeemed);
   console.log('RedeemedShareValue',RedeemedShareValue);

   var memsearchdetail;
   pgdbconnect.query("select * from member_share_details ",function(err,result) {
       if(result.rowCount==0){
        memsearchdetail=1;


console.log("data to insert member share",memsearchdetail,memid,date,boardmeeting,boardmeetingid,boardmeetingdetails,FolioMember,ShareValue,CertificateNo,DistinctiveNumber,ShareRedeemed,RedeemedShareValue,RedeemedDistinctiveNumber,BalanceShares,BalanceShareValues,CertificateBalanceShares,DistinctiveShareBalance,Days,Product,'N',shares_allocated)
    pgdbconnect.query("insert into member_share_details(msd_n_member_share_id,msd_ch_member_id,msd_d_date, msd_d_board_meeting_date,msd_ch_board_meeting_id,msd_ch_board_meeting_details,msd_n_day_book_folio_num,msd_n_share_value,msd_ch_share_certificate_num,msd_ch_share_distinctive_num,msd_n_redeemed_share_value,msd_n_num_shares_redeemed,msd_ch_redeemed_shares_distinctive,msd_n_bal_share,msd_n_balance_shares_value,msd_n_share_certificate_balance_shares,msd_n_distinctive_shares_balance,msd_n_days,msd_ch_product,msd_ch_del_flg,msd_n_num_shares_allotted)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)",[memsearchdetail,memid,date,boardmeeting,boardmeetingid,boardmeetingdetails,FolioMember,ShareValue,CertificateNo,DistinctiveNumber,ShareRedeemed,RedeemedShareValue,RedeemedDistinctiveNumber,BalanceShares,BalanceShareValues,CertificateBalanceShares,DistinctiveShareBalance,Days,Product,'N',shares_allocated],function(err,Shareres){
        if (err)
        {
            console.error('Error with table query', err);
}
else
{

    req.flash('success_msg', 'Data inserted successfully');
    res.locals.message=req.flash();

pgdbconnect.query("select * from member_details where md_ch_del_flg='N'",function(err,shareres21){
    res.render('memberModule/member_shares',{
        memberdetails:shareres21.rows,
       pagetype:"ADD"
});
    });
}
});
 }

 else{

    pgdbconnect.query("select max(msd_n_member_share_id) from member_share_details",function(err,result) {
        console.log("max value check",result)
        console.log("max value check",result.rows[0].max)

        memberdivid=parseInt(result.rows[0].max)+1;
        console.log("when more rows exxxists",memberdivid)

        pgdbconnect.query("insert into member_share_details(msd_n_member_share_id,msd_ch_member_id,msd_d_date, msd_d_board_meeting_date,msd_ch_board_meeting_id,msd_ch_board_meeting_details,msd_n_day_book_folio_num,msd_n_share_value,msd_ch_share_certificate_num,msd_ch_share_distinctive_num,msd_n_redeemed_share_value,msd_n_num_shares_redeemed,msd_ch_redeemed_shares_distinctive,msd_n_bal_share,msd_n_balance_shares_value,msd_n_share_certificate_balance_shares,msd_n_distinctive_shares_balance,msd_n_days,msd_ch_product,msd_ch_del_flg,msd_n_num_shares_allotted)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)",[memberdivid,memid,date,boardmeeting,boardmeetingid,boardmeetingdetails,FolioMember,ShareValue,CertificateNo,DistinctiveNumber,ShareRedeemed,RedeemedShareValue,RedeemedDistinctiveNumber,BalanceShares,BalanceShareValues,CertificateBalanceShares,DistinctiveShareBalance,Days,Product,'N',shares_allocated],function(err,Shareres){


// pgdbconnect.query("insert into member_share_details(msd_n_member_share_id,md_ch_member_id,md_ch_financial_year,md_n_num_shares,md_n_num_shares_included, md_n_share_fee,md_n_share_capital,md_n_dividend_payable,md_n_dividend_arrears,md_n_tot_dividend_payable,md_n_final_amt,md_n_others_income,md_ch_del_flg) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",[memberdivid,mid,mid1,share,sharesinclude,sharefree,sharecapital,dividendamount,DividendArrears,DividendPayable,FinalAmount,OtherIncome,'N'],function(err,Dividendres1){
if (err)
{
           console.error('Error with table query', err);
}
else
{
// res.redirect('/memberDetailsModule/memberDetails/mem_div');
//flash messege
req.flash('success_msg', 'Data inserted successfully');
res.locals.message=req.flash();

pgdbconnect.query("select * from member_details where md_ch_del_flg='N'",function(err,shareres21){
res.render('memberModule/member_shares',{
    memberdetails:shareres21.rows,
pagetype:"ADD"
});
});
}
});

});
 }
});
 }




 router.get('/mem_share_search',mem_share_search)
 function mem_share_search(req,res){
     console.log("MEMBER DIVIDEND SEARCH 1")

        pgdbconnect.query("select * from member_share_details where msd_ch_del_flg=$1",['N'],function(err,shareressearchs){

//   console.log("membersids",ressearch1)
          if(err)
          {
             console.log("result1 is", err);
          }
 else
 {


           pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){

     res.render('memberModule/member_share_search',{
        shareressearchs:shareressearchs.rows,
        pagetype:"ADD",
        memberdetails:ressearch1.rows,
        moment:moment
 
     });
      });
      }


 });
 }





router.post('/mem_share_detail_searcher',mem_share_detail_searcher)
function mem_share_detail_searcher(req,res)
{
console.log("MEMBER SEARCHing");
var mid=req.body.opn_shr_bal;
var filono=req.body.opn_shr_balshare;
// changed by ranjeet
// var date=req.body.date1;
// var betweendate=req.body.date2;
var date=req.body.shr_sch_frm_date;
var betweendate=req.body.shr_sch_to_date;
// end changes
console.log('midpppppp',mid);
console.log('filono',filono);
console.log('date',date);
console.log('betweendate',betweendate);



pgdbconnect.query("select * from member_share_details where  msd_d_date between $1 and $2 and msd_ch_member_id=$3 and msd_n_day_book_folio_num=$4",[date,betweendate,mid,filono],function(err,shareressearch1){
    // console.log("search result",shareressearch1.rows)
    if(err)
    // select * from member_share_details where  msd_d_date between '2019-04-29' and '2019-04-30'

    {
       console.log("Error with table query", err);
    }

    else
    {
                                   pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch3){

        res.render('memberModule/member_share_search',{
            shareressearchs:shareressearch1.rows,
            memberdetails:ressearch3.rows

        });
                                   });
    }

    });
    }



router.post('/edit_sharedata_record',function(req,res){
    console.log("populate fields");
    var divtype="EDIT";
  console.log("DIV TYPE on edit populate",divtype);

    //Bank Branch details-start//

var memshareid= req.body.tempshareid;
// var memid1= req.body.tempmemberid;

 console.log("member id to edit",memshareid);


            //console.log("Result of Branch", result5);
            pgdbconnect.query("select * from member_share_details where msd_n_member_share_id=$1 and msd_ch_del_flg=$2 ",[memshareid,'N'],function(err,searchres)

            {

                 pgdbconnect.query("select * from member_details",function(err,memshres){

                    var member_id = searchres.rows[0].msd_ch_member_id;
                    var shareid=searchres.rows[0].msd_n_member_share_id;
                    var date=searchres.rows[0].msd_d_date;
                    var meetingid=searchres.rows[0].msd_ch_member_id;


                    var bordmeetingdate=searchres.rows[0].msd_d_board_meeting_date;

                    var meeting_details=searchres.rows[0].msd_ch_board_meeting_details;
                    console.log('meeting details',meeting_details)
                    var folionum=searchres.rows[0].msd_n_day_book_folio_num;

                    var sharevalue=searchres.rows[0].msd_n_share_value;

                    var share_certificate=searchres.rows[0].msd_ch_share_certificate_num;
                    var share_allocate=searchres.rows[0].msd_n_num_shares_allotted;
                    var share_districtive=searchres.rows[0].msd_ch_share_distinctive_num;
                    var shares_redeem=searchres.rows[0].msd_n_num_shares_redeemed;
                    var shareredeem_value =searchres.rows[0].msd_n_redeemed_share_value;

                    var redeem_dist_num=searchres.rows[0].msd_ch_redeemed_shares_distinctive;
                    var share_balance=searchres.rows[0].msd_n_bal_share;
                    var share_balance_value=searchres.rows[0].msd_n_balance_shares_value;
                    var share_balance_certificate=searchres.rows[0].msd_n_share_certificate_balance_shares;
                    var share_dist_balance=searchres.rows[0].msd_n_distinctive_shares_balance;

                    var days=searchres.rows[0].msd_n_days;
                    var product=searchres.rows[0].msd_ch_product;




                    //req.flash('success_msg', 'Data can be editable');
//res.locals.message=req.flash();
    res.render('memberModule/member_shares',{
        member_id:member_id,
        shareid:shareid,
        bordmeetingdate:bordmeetingdate,
        meeting_details:meeting_details,
        meetingid:meetingid,
        date:date,
        folionum:folionum,
        sharevalue:sharevalue,
        share_certificate:share_certificate,
        share_allocate:share_allocate,
        share_districtive:share_districtive,
        shares_redeem:shares_redeem,
        shareredeem_value:shareredeem_value,
        redeem_dist_num:redeem_dist_num,
        share_balance:share_balance,
        share_balance_value:share_balance_value,
        share_balance_certificate:share_balance_certificate,
        share_dist_balance:share_dist_balance,
        days:days,
        product:product,
         pagetype:"EDIT",
         Dividendshare:memshres.rows,
         moment:moment

    });
});
            });

        });

//////////////////////////////////////////////////////////////////////////////////////////////////

        router.post('/view_sharedata_record',function(req,res){
            console.log("populate fields");
            var divtype="EDIT";
          console.log("DIV TYPE on edit populate",divtype);

            //Bank Branch details-start//

        var memshareid= req.body.tempshareid1;
        // var memid1= req.body.tempmemberid;

         console.log("member id to edit",memshareid);


                    //console.log("Result of Branch", result5);
                    pgdbconnect.query("select * from member_share_details where msd_n_member_share_id=$1 and msd_ch_del_flg=$2 ",[memshareid,'N'],function(err,searchres)

                    {

                         pgdbconnect.query("select * from member_share_details ",function(err,memshres){

                            var member_id = searchres.rows[0].msd_ch_member_id;
                            var shareid=searchres.rows[0].msd_n_member_share_id;
                            console.log('shareid dispay',shareid)
                            var date=searchres.rows[0].msd_d_date;

                            var meetingid=searchres.rows[0].msd_ch_member_id;
                            var bordmeetingdate=searchres.rows[0].msd_d_board_meeting_date;
                            var meeting_details=searchres.rows[0].msd_ch_board_meeting_details;
                            console.log('meeetingg details',meeting_details);

                            var folionum=searchres.rows[0].msd_n_day_book_folio_num;

                            var sharevalue=searchres.rows[0].msd_n_share_value;

                            var share_certificate=searchres.rows[0].msd_ch_share_certificate_num;
                            var share_allocate=searchres.rows[0].msd_n_num_shares_allotted;
                            var share_districtive=searchres.rows[0].msd_ch_share_distinctive_num;
                            var shares_redeem=searchres.rows[0].msd_n_num_shares_redeemed;
                            var shareredeem_value =searchres.rows[0].msd_n_redeemed_share_value;

                            var redeem_dist_num=searchres.rows[0].msd_ch_redeemed_shares_distinctive;
                            var share_balance=searchres.rows[0].msd_n_bal_share;
                            var share_balance_value=searchres.rows[0].msd_n_balance_shares_value;
                            var share_balance_certificate=searchres.rows[0].msd_n_share_certificate_balance_shares;
                            var share_dist_balance=searchres.rows[0].msd_n_distinctive_shares_balance;

                            var days=searchres.rows[0].msd_n_days;
                            var product=searchres.rows[0].msd_ch_product;
                            console.log('productiddddddddd',product);
        
                          //  req.flash('success_msg', 'Data viewing successfully');
        //res.locals.message=req.flash();
            res.render('memberModule/member_shares',{
                member_id:member_id,
                shareid:shareid,
                bordmeetingdate:bordmeetingdate,
                meeting_details:meeting_details,
                meetingid:meetingid,
                date:date,
                folionum:folionum,
                sharevalue:sharevalue,
                share_certificate:share_certificate,
                share_allocate:share_allocate,
                share_districtive:share_districtive,
                shares_redeem:shares_redeem,
                shareredeem_value:shareredeem_value,
                redeem_dist_num:redeem_dist_num,
                share_balance:share_balance,
                share_balance_value:share_balance_value,
                share_balance_certificate:share_balance_certificate,
                share_dist_balance:share_dist_balance,
                days:days,
                product:product,
                 pagetype:"VIEW",
                 Dividendshare:memshres.rows,
                 moment:moment
        
            });
        });
                    });

                });

        //delete share
                router.post('/delete_sharedata_record',delete_sharedata_record)
                function delete_sharedata_record(req,res){



                    var memid= req.body.tempshareid2;
                    console.log("id to delete",memid)
                    pgdbconnect.query("update member_share_details set msd_ch_del_flg=$1 where msd_n_member_share_id=$2",['Y',memid],function(err,delres){

                        console.log("deleted result",delres);
                        pgdbconnect.query("select * from member_share_details where msd_ch_del_flg=$1",['N'],function(err,searchres){
                                   pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){

                    //Bank Branch details-start//
                    req.flash('success_msg', 'Record Deleted successfully');
                    res.locals.message=req.flash();
                        res.render('memberModule/member_share_search',{
                            shareressearchs:searchres.rows,
                             memberdetails:ressearch1.rows

                    });
                                   });
                });
                });
                };


                router.post('/member_sharedata_upedating',member_sharedata_upedating);
                function member_sharedata_upedating(req,res){

                    var member_id = req.body.divmemid_ed;
                    console.log("member shared EDITTTTTTTTTT",member_id)
                    var shareid=req.body.shared_edit;
                    // changed by ranjeet
                    // var date=req.body.ed_date;
                    // var bordmeetingdate=req.body.ed_date1;
                    var date=req.body.shr_date_ed;
                    var bordmeetingdate=req.body.do_brd_mtg_ed;
                    // end changes

                    var meetingid=req.body.opn_shr_bal_ed;
                    
                    var meeting_details=req.body.meeting_details_ed;

                    var folionum=req.body.ent_fee1_ed2;

                    var sharevalue=req.body.ent_fee2_ed3;

                    var share_certificate=req.body.opn_shr_bal2_ed3;
                    var share_allocate=req.body.opn_shr_bal1_ed2;
                    var share_districtive=req.body.ent_fee3_ed;
                    var shares_redeem=req.body.opn_shr_bal3_ed;
                    var shareredeem_value =req.body.ent_fee4_ed;

                    var redeem_dist_num=req.body.opn_shr_bal4_ed;
                    var share_balance=req.body.ent_fee5_ed;
                    var share_balance_value=req.body.opn_shr_bal5_ed;
                    var share_balance_certificate=req.body.ent_fee6_ed;
                    var share_dist_balance=req.body.opn_shr_bal6_ed;

                    var days=req.body.ent_fee7_ed;
                    var product=req.body.Product;

                    console.log('member_id',member_id);
                    console.log('shareid',shareid);
                    console.log('date',date);

console.log("data to update member shares",date,bordmeetingdate,meetingid,meeting_details,folionum,sharevalue,share_certificate,share_districtive,shareredeem_value,shares_redeem,redeem_dist_num,share_balance,share_balance_value,share_balance_certificate,share_dist_balance,days,product,share_allocate,member_id,shareid)

                    pgdbconnect.query("update member_share_details set msd_d_date=$1, msd_d_board_meeting_date=$2,msd_ch_board_meeting_id=$3,msd_ch_board_meeting_details=$4,msd_n_day_book_folio_num=$5,msd_n_share_value=$6,msd_ch_share_certificate_num=$7,msd_ch_share_distinctive_num=$8,msd_n_redeemed_share_value=$9,msd_n_num_shares_redeemed=$10,msd_ch_redeemed_shares_distinctive=$11,msd_n_bal_share=$12,msd_n_balance_shares_value=$13,msd_n_share_certificate_balance_shares=$14,msd_n_distinctive_shares_balance=$15,msd_n_days=$16,msd_ch_product=$17,msd_n_num_shares_allotted=$18,msd_ch_member_id=$19 where msd_n_member_share_id=$20",[date,bordmeetingdate,meetingid,meeting_details,folionum,sharevalue,share_certificate,share_districtive,shareredeem_value,shares_redeem,redeem_dist_num,share_balance,share_balance_value,share_balance_certificate,share_dist_balance,days,product,share_allocate,member_id,shareid],function(err,upsearchres){

                        if (err)
                        {
                                   console.error('Error with table query', err);
                       }
                       else
                     {

                       pgdbconnect.query("select * from member_share_details where msd_ch_del_flg='N'",function(err,shareupdate){
                   pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){
                    req.flash('success_msg', 'Record updated successfully');
                    res.locals.message=req.flash();
                        res.render('memberModule/member_share_search',{
                            shareressearchs:shareupdate.rows,
                            memberdetails:ressearch1.rows

                     });
                       });
                       });
                     }

                    });
                     }
/* MEMBER SHARE DETAILS- END*/


/* MEMBER HOUSE DETAILS- START*/

router.get('/mem_hse_det',function(req,res){

    pgdbconnect.query("select * from member_details",function(err,resu)
    {
        if(err) throw err;


    pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,resu1)
    {
        if(err) throw err;


        pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,resu2)
    {
        if(err) throw err;

    res.render('memberModule/member_house_details',{
        member:resu.rows,
       cities:resu1.rows,
       states:resu2.rows,
       pagetype:'ADD'

    });

});
    });

});

});
router.post('/mem_hse_det_add',function(req,res){
     var divtype="ADD";
     console.log("DIV TYPE",divtype);

  var house_id;
    var selt_mem = req.body.selt_mem;
    var house_num = req.body.house_num;
    var add_line = req.body.add_line;
    var vill_town = req.body.vill_town;
    var mem_city = req.body.mem_city;
    var house_state = req.body.house_state;
    var pincode = req.body.pincode;
    var description = req.body.description;
    var area_sqft = req.body.area_sqft;
    var market_value = req.body.market_value;
    console.log("House Details",selt_mem,house_num,add_line,vill_town,mem_city,house_state,pincode,description,area_sqft,market_value);


    pgdbconnect.query("select * from member_house_details",function(err,result) {
        if(result.rowCount==0){
            house_id=1;

    // console.log("House Details",selt_mem,house_num,add_line,vill_town,mem_city,house_state,pincode,description,area_sqft,market_value);
    pgdbconnect.query( "insert into member_house_details(mhd_ch_member_id,mhd_ch_house_number,mhd_ch_address_line1,mhd_ch_village,mhd_ch_city,mhd_ch_state,mhd_n_pincode,mhd_ch_description,mhd_n_builtup_area_sqft,mhd_n_market_value,mhd_ch_del_flg,mhd_ch_house_mem_id)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",[selt_mem,house_num,add_line,vill_town,mem_city,house_state,pincode,description,area_sqft,market_value,'N',house_id] ,function(err,res1){

        if(err) throw err;
        console.log("member house details",res1);

    pgdbconnect.query("select * from member_details where md_ch_member_id='N'",function(err,resu)
   {
       if(err) throw err;

       pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,resu1)
   {
       if(err) throw err;

       pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,resu2)
   {
       if(err) throw err;

     req.flash('success_msg',"Data inserted successfully");
     res.locals.message=req.flash();

   res.render('memberModule/member_house_details',{
       member:resu.rows,
       cities:resu1.rows,
       states:resu2.rows,
       pagetype:divtype
   });
});
});
});
});

}
else{
    pgdbconnect.query("select max(mhd_ch_house_mem_id) from member_house_details",function(err,result) {
       // console.log("max value check",result)
      //  console.log("max value check",result.rows[0].max)

      house_id=parseInt(result.rows[0].max)+1;
      //  console.log("when more rows exxxists",bank_id)



// console.log("House Details",selt_mem,house_num,add_line,vill_town,mem_city,house_state,pincode,description,area_sqft,market_value);
pgdbconnect.query( "INSERT INTO member_house_details(mhd_ch_member_id, mhd_ch_house_number, mhd_ch_address_line1, mhd_ch_village, mhd_ch_city, mhd_ch_state, mhd_n_pincode, mhd_ch_description, mhd_n_builtup_area_sqft, mhd_n_market_value, mhd_ch_del_flg, mhd_ch_house_mem_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",[selt_mem,house_num,add_line,vill_town,mem_city,house_state,pincode,description,area_sqft,market_value,'N',house_id] ,function(err,res1){
    if(err) throw err;
    console.log("member house details",res1);

pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,resu)
{
   if(err) throw err;

   pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,resu1)
{
   if(err) throw err;

   pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,resu2)
{
   if(err) throw err;

     req.flash('success_msg',"Data inserted successfully");
     res.locals.message=req.flash();


res.render('memberModule/member_house_details',{
   member:resu.rows,
   cities:resu1.rows,
   states:resu2.rows,
   pagetype:divtype
});
});
});
});
});
    });
}

});})





router.get('/mem_hse_det_ser',function(req,res){

    pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,memres){
    pgdbconnect.query("select * from member_house_details where mhd_ch_del_flg=$1",['N'],function(err,houseres){

        if(err) throw err;
   res.render('memberModule/member_house_details_search',{
   houseresults:houseres.rows,
   memberdetails:memres.rows
});
                                       });
});
});




router.post('/search_particular_house_rec', function(req,res){
    console.log("search particular record");

    var search_sel_mem = req.body.search_sel_mem;


    pgdbconnect.query("select * from member_house_details where mhd_ch_member_id=$1",[search_sel_mem],function(err,searchres)
    {
        if(err) throw err;
       // console.log("searchres is", searchres.rows);
        pgdbconnect.query("select * from member_house_details where mhd_ch_del_flg=$1",['N'],function(err,memres){

        res.render('memberModule/member_house_details_search',{

            houseresults:searchres.rows,
            memberdetails:memres.rows
});

        });
    });
     });

     router.post('/edit_data_populate',function(req,res){
        console.log("populate fields");
        var divtype="EDIT";
      console.log("DIV TYPE on edit populate",divtype);

        //Member House details-start//
    var houseid= req.body.temphouseid;
    console.log("House id to edit",houseid)
    pgdbconnect.query("select * from member_house_details where mhd_ch_del_flg=$1",['N'],function(err,result1)
    {
        if(err) throw err;

        pgdbconnect.query("select * from common_code_tbl where code_id='CTY'limit 50",function(err,result2)
        {
            if(err) throw err;
           // console.log("result2 is", result2);

            pgdbconnect.query("select * from common_code_tbl where code_id='STA' limit 50",function(err,result4)
            {
                if(err) throw err;
               // console.log("Result of Member House", result4);

                pgdbconnect.query("select * from member_house_details where mhd_ch_house_mem_id=$1",[houseid],function(err,searchres)

                {
           pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,memberres)
{
                    console.log("searchres",memberres);
        var house_edit_id =  searchres.rows[0].mhd_ch_house_mem_id;
        var selt_mem = searchres.rows[0].mhd_ch_member_id;
        var house_num = searchres.rows[0].mhd_ch_house_number;
        var add_line1 = searchres.rows[0].mhd_ch_address_line1;
        var village =  searchres.rows[0].mhd_ch_village;
        var city = searchres.rows[0].mhd_ch_city;
        var state =  searchres.rows[0].mhd_ch_state;
        console.log("city state",state,city)
        var pincode =  searchres.rows[0].mhd_n_pincode;
        var desc =  searchres.rows[0].mhd_ch_description;
        var area =  searchres.rows[0].mhd_n_builtup_area_sqft;
        var market_value =  searchres.rows[0].mhd_n_market_value;

                    res.render('memberModule/member_house_details',{
                        selt_mem:selt_mem,
            house_edit_id:house_edit_id,
            house_num:house_num,
            add_line1:add_line1,
            village:village,
            city:city,
            state:state,
            pincode:pincode,
            desc:desc,
            area:area,
            market_value:market_value,
            pagetype:divtype,

            states:result4.rows,
            cities:result2.rows,
            member:result1.rows,
            memberdetails:memberres.rows

        });
    });
    });
    });
        });
    });
    });

  ///////member house details edit records//////
router.get('/member_house_edit',function(req,res){
    var divtype=req.query.key;

console.log("DIV TYPE",divtype);

pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,result1)
{
    if(err) throw err;

    pgdbconnect.query("select * from common_code_tbl where code_id='CTY'limit 50",function(err,result2)
    {
        if(err) throw err;
       // console.log("result2 is", result2);

        pgdbconnect.query("select * from common_code_tbl where code_id='STA' limit 50",function(err,result4)
        {
            if(err) throw err;
       // console.log("Bank code details is", reslt);
        pgdbconnect.query("select * from member_house_details  where mhd_ch_del_flg=$1",['N'],function(err,houseres){

            if(err) throw err;


    res.render('memberModule/member_house_details',{
        states:result4.rows,
        cities:result2.rows,
        member:result1.rows,
        pagetype:divtype,
        houseresults:houseres.rows

    });
});
});
});
});
});


router.post('/update_member_house_edit',function(req,res){
    console.log("Welcome");

    var mem_ed = req.body.mem_ed;
    console.log("id to update",mem_ed)
    var house_num_ed = req.body.house_num_ed;
    var add_line1_ed = req.body.add_line1_ed;
    var village_ed = req.body.village_ed;
    var city_ed = req.body.city_ed;
    var hsestate_ed = req.body.hsestate_ed;
    var pincode_ed = req.body.pincode_ed;
    var desc_ed = req.body.desc_ed;
    var area_ed = req.body.area_ed;
    var market_value_ed = req.body.market_value_ed;
    var house_edit_id =  req.body.house_edit_id;

    console.log("edit details",mem_ed,house_num_ed,add_line1_ed,village_ed,city_ed,hsestate_ed,pincode_ed,desc_ed,area_ed,market_value_ed,house_edit_id);
    pgdbconnect.query('update member_house_details set mhd_ch_member_id=$1,mhd_ch_house_number=$2, mhd_ch_address_line1=$3,mhd_ch_village=$4,mhd_ch_city=$5,mhd_ch_state=$6,mhd_n_pincode=$7,mhd_ch_description=$8,mhd_n_builtup_area_sqft=$9,mhd_n_market_value=$10 where mhd_ch_house_mem_id=$11',[mem_ed,house_num_ed,add_line1_ed,village_ed,city_ed,hsestate_ed,pincode_ed,desc_ed,area_ed,market_value_ed,house_edit_id],function(err,result){

            if(err) throw err;

   //      console.log("result12:",result);
            pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,memres){

   pgdbconnect.query("select * from member_house_details  where mhd_ch_del_flg=$1",['N'],function(err,houseres){

    if(err) throw err;
               // console.log("result:",loginres);
   //flash messege
   req.flash('success_msg', 'Data updated successfully');
   res.locals.message=req.flash();

            res.render('memberModule/member_house_details_search',{
                houseresults:houseres.rows,
                memberdetails:memres.rows

            });
        });
            });

        });


    });


    router.post('/view_data_populate',function(req,res){
        console.log("populate fields");
        var divtype="VIEW";
      console.log("DIV TYPE on view data",divtype);

        //Bank Branch details-start//
    var houseid= req.body.temphouseid1;
    console.log("house id to view",houseid)



                pgdbconnect.query("select * from member_house_details where mhd_ch_house_mem_id=$1",[houseid],function(err,searchres)
                {
                    console.log("searchres",searchres);
        var house_edit_id =  searchres.rows[0].mhd_ch_house_mem_id;
        var selt_mem = searchres.rows[0].selt_mem;
        var house_num = searchres.rows[0].mhd_ch_house_number;
        var add_line1 = searchres.rows[0].mhd_ch_address_line1;
        var village =  searchres.rows[0].mhd_ch_village;
        var city = searchres.rows[0].mhd_ch_city;
        var state =  searchres.rows[0].mhd_ch_state;
        var pincode =  searchres.rows[0].mhd_n_pincode;
        var desc =  searchres.rows[0].mhd_ch_description;
        var area =  searchres.rows[0].mhd_n_builtup_area_sqft;
        var market_value =  searchres.rows[0].mhd_n_market_value;

        res.render('memberModule/member_house_details',{
            selt_mem:selt_mem,
            house_edit_id:house_edit_id,
            house_num:house_num,
            add_line1:add_line1,
            village:village,
            city:city,
            state:state,
            pincode:pincode,
            desc:desc,
            area:area,
            market_value:market_value,
            pagetype:divtype,
            pagetype:"VIEW"

        });
    });

        });


router.post('/delete_data_populate',function(req,res){

    console.log("delete");

            var delid= req.body.temphouseid2;
            console.log("id to delete",delid)
            pgdbconnect.query("update member_house_details set mhd_ch_del_flg=$1 where mhd_ch_house_mem_id=$2",['Y',delid],function(err,delres){

                console.log("deleted result",delres);
          pgdbconnect.query("select * from member_house_details where mhd_ch_del_flg=$1",['N'],function(err,memres){

                pgdbconnect.query("select * from member_house_details where mhd_ch_del_flg=$1",['N'],function(err,searchres){
                   // console.log("deleted result11",searchres);
            //house delete details-start//
             req.flash('success_msg', 'Record Deleted successfully');
             res.locals.message=req.flash();
                res.render('memberModule/member_house_details_search',{

                    houseresults:searchres.rows,
                    memberdetails:memres.rows
              });

            });
        });
        });
        });

/* MEMBER HOUSE DETAILS- END*/
module.exports = router;