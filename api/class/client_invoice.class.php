<?php
require_once 'users.class.php';
require_once 'client.class.php';
class Client_invoice {

	public function __construct() {
		$this->_db = db::getInstance ();
	}

	public function getAll($field, $id, $table) {
		$this->_db->where($field, $id);
		return $this->_db->get($table);
	}

	public function get($table) {
        return $this->_db->get($table);
    }

    public function getInvoiceNumber() {
		$invoiceData = self::get('tms_invoice');
        return $invoiceData;
	}

	//invoice serach data get
	public function invoiceCreate($data1) {
		$infoD = array();
		$paymentDue = self::getAll('invoice_due_id',1,'tms_invoice_due_period');
		foreach ($data1['id'] as $k => $v) {
			$this->_db->where('job_summmeryId', $v['id']);
			$this->_db->join('tms_users tu', 'tu.iUserId=tsv.resource', 'LEFT');
			$this->_db->join('tms_general tg','tg.order_id = tsv.order_id', 'INNER');
			$this->_db->join('tms_customer tcu','tcu.order_id = tsv.order_id', 'INNER');
			$this->_db->join('tms_client tci', 'tci.iClientId=tcu.client', 'LEFT');
			$data = $this->_db->getOne('tms_summmery_view tsv', 'tsv.job_summmeryId AS jobId,tsv.item_id AS item_number, tsv.order_id AS orderId, tsv.po_number AS poNumber, tci.iClientId AS clientId, tci.vAddress1 AS companyAddress, tci.vEmailAddress  AS companyEmail, tci.vPhone AS companyPhone, tu.iUserId AS freelanceId, tu.vUserName AS freelanceName, tu.vEmailAddress AS freelanceEmail, tu.vAddress1 AS freelanceAddress, tu.vProfilePic AS freelancePic, tu.iMobile AS freelancePhone, tg.company_code, tsv.job_code AS jobCode');
			$companyName = self::getAll('abbrivation',substr($data['company_code'],0,-2),'tms_centers');

			$data['companyName'] = $companyName[0]['name'];

			//payment due date number of day
			$data['number_of_days'] = $paymentDue[0]['number_of_days'];

			//invoiceNumber Count
			$data['invoiceCount'] = count(self::get('tms_invoice'));
            //echo '<pre>'; print_r($data); echo '</pre>';exit;

			if(isset($data['orderId'])) {
				//$info = self::getAll('order_id',$data['orderId'],'tms_items');
                $this->_db->where('item_number',$data['item_number']);
                $this->_db->where('order_id',$data['orderId']);
                $info = $this->_db->getOne('tms_items');
                $data['item'] = [];
				if($info){
                    if($info['price']){
                        foreach (json_decode($info['price']) as $field => $val) {
                            $data['item'][] = (array) $val;
                        }
                    }
                }
                /*foreach ($info as $key => $value) {
                    echo '<pre>'; print_r($value); echo '</pre>';exit;
                    if($value['price']){
                        foreach (json_decode($value['price']) as $field => $val) {
    						$data['item'][] = (array) $val;
    					}
                    }
				}*/
			}
			$infoD[$k] = $data;
		}
        return $infoD;
	}
	
	//invoice and draft save
    public function saveInvoice($data) {
        $invoiceAlreadyAdded = false;
        if($data['job_id']){
            $invoiceRecords = $this->_db->get('tms_invoice');

            foreach ($invoiceRecords as $k => $v) {
                foreach (json_decode($v['job_id'],true) as $ke => $val) {
                    $existedJobId = $val['id'];
                    foreach (json_decode($data['job_id'],true) as $k1 => $v1) {
                        $postedJobId = $v1['id'];
                        if($postedJobId == $existedJobId){
                            $invoiceAlreadyAdded = true;
                        }
                    }
                }
            }
        }
        
        if(!$invoiceAlreadyAdded){
            $data['created_date'] = date('Y-m-d');
        	$data['modified_date'] = date('Y-m-d');
        	$data['value_date'] = date('Y-m-d');
        	$data['invoice_date'] = date('Y-m-d');
        	$id = $this->_db->insert('tms_invoice', $data);
        	if($id) {
        		$result['status'] = 200;
        		$result['msg'] = "Successfully saved";
        	} else {
        		$result['status'] = 401;
        		$result['msg'] = "Not saved";
        	}
        	return $result;
        }else{
            $result['status'] = 422;
            $result['msg'] = "Invoice already added for this job";
            return $result;
        }

    }
    
    //display invoice
    public function viewAllClientInvoice($type,$userId) {
        $this->_db->join('tms_users tu', 'tu.iUserId=tmInvoice.freelance_id','LEFT');
		$this->_db->join('tms_client tc', 'tc.iClientId=tmInvoice.customer_id','LEFT');
		$this->_db->join('tms_items ti', 'ti.itemId=tmInvoice.scoop_id','LEFT');
        $this->_db->orderBy('tmInvoice.invoice_id', 'asc');
    	$this->_db->where('tmInvoice.invoice_type', $type);
    	//$this->_db->where('tu.iUserId', $userId);
    	$data = $this->_db->get('tms_invoice_client tmInvoice', null,'ti.itemId AS itemId, ti.order_id AS orderId, tc.iClientId AS clientId,tc.vUserName AS clientCompanyName, tc.vAddress1 AS companyAddress, tc.vEmailAddress  AS companyEmail, tc.vPhone AS companyPhone, tc.vCodeRights AS company_code, tu.iUserId AS freelanceId, tu.vUserName AS freelanceName, tu.vEmailAddress AS freelanceEmail, tu.vAddress1 AS freelanceAddress, tu.vProfilePic AS freelancePic, tu.iMobile AS freelancePhone, tmInvoice.invoice_number, tmInvoice.invoice_id, tmInvoice.invoice_status, tmInvoice.Invoice_cost, tmInvoice.paid_amount,tmInvoice.invoice_date,tmInvoice.created_date,tmInvoice.reminder_sent');

        if($data){
        	// $companyName = self::getAll('abbrivation',substr($value['company_code'],0,-2),'tms_centers');
    		// $data[$key]['companyName'] = isset($companyName[0]['name'])?$companyName[0]['name']:'';	
    	}
    	return $data;
    }
    public function viewAllInvoice1($type) {
		$this->_db->join('tms_users tu', 'tu.iUserId=tmInvoice.freelance_id','LEFT');
		$this->_db->join('tms_client tc', 'tc.iClientId=tmInvoice.customer_id','LEFT');
		$this->_db->join('tms_summmery_view tsv', 'tsv.job_summmeryId=tmInvoice.job_id','LEFT');
		$this->_db->orderBy('tmInvoice.invoice_id', 'asc');
    	$this->_db->where('tmInvoice.invoice_type', $type);
    	$data = $this->_db->get('tms_invoice tmInvoice', null,'tsv.job_summmeryId AS jobId, tsv.order_id AS orderId, tsv.po_number AS poNumber, tc.iClientId AS clientId, tc.vAddress1 AS companyAddress, tc.vEmailAddress  AS companyEmail, tc.vPhone AS companyPhone, tc.vCodeRights AS company_code, tu.iUserId AS freelanceId, tu.vUserName AS freelanceName, tu.vEmailAddress AS freelanceEmail, tu.vAddress1 AS freelanceAddress, tu.vProfilePic AS freelancePic, tu.iMobile AS freelancePhone, tsv.job_code AS jobCode, tmInvoice.invoice_number, tmInvoice.invoice_id, tmInvoice.invoice_status, tmInvoice.Invoice_cost, tmInvoice.paid_amount');
    	foreach ($data as $key => $value) {
    		$companyName = self::getAll('abbrivation',substr($value['company_code'],0,-2),'tms_centers');
    		$data[$key]['companyName'] = isset($companyName[0]['name'])?$companyName[0]['name']:'';	
    	}
    	
    	return $data;
    }
    
    //display one invoice
    public function clientInvoiceViewOne($id) {
        //print_r($id);
    	$id1 = self::getAll('invoice_id',$id,'tms_invoice_client');
        $paymentDue = self::getAll('invoice_due_id',1,'tms_invoice_due_period');

    		foreach (json_decode($id1[0]['scoop_id']) as $k => $v) {
                $this->_db->where('ti.itemId', $v->id);
                $this->_db->join('tms_users tu', 'tu.iUserId=ti.contact_person', 'LEFT');
                $this->_db->join('tms_general gen', 'gen.order_id=ti.order_id', 'LEFT');
                $this->_db->join('tms_customer tcu','tcu.order_id = ti.order_id', 'INNER');
                $this->_db->join('tms_client tci', 'tci.iClientId=tcu.client', 'LEFT');
                $this->_db->join('tms_client_contact tcc','tcc.iClientId = tci.iClientId', 'INNER');
                $data = $this->_db->getOne('tms_items ti', 'ti.itemId AS itemId,ti.item_number, ti.order_id AS orderId, ti.price as scoopPrice, gen.heads_up, gen.order_no AS orderNumber, tci.iClientId AS clientId, tci.vUserName as clientCompanyName, tci.vAddress1 AS companyAddress, tci.vEmailAddress  AS companyEmail, tci.vPhone AS companyPhone, tcc.vEmail as companycontactEmail, tu.iUserId AS freelanceId, tu.vUserName AS freelanceName, tu.vEmailAddress AS freelanceEmail, tu.vAddress1 AS freelanceAddress, tu.vProfilePic AS freelancePic, tu.iMobile AS freelancePhone');
                
                //$companyName = self::getAll('abbrivation',substr($data['company_code'],0,-2),'tms_centers');
    
                //$data['companyName'] = 'test';                

                //payment due date number of day
                $data['number_of_days'] = $paymentDue[0]['number_of_days'];

                //invoiceNumber Count
                $data['invoiceCount'] = count(self::get('tms_invoice_client'));
                $this->_db->where('item_number',$data['item_number']);
                $this->_db->where('order_id',$data['orderId']);
                $info = $this->_db->getOne('tms_items');
                
                if($info){
                    if($info['price']){
                        foreach (json_decode($info['price']) as $field => $val) {
                            $data['item'][] = (array) $val;
                        }
                    }
                }

                if($data){
                    if($data['scoopPrice']){
                        foreach (json_decode($data['scoopPrice']) as $field => $val) {
                            $data['jobpriceList'][] = (array) $val;
                        }
                    }
                    
                    $data['vBankInfo'] = self::getDefaultbankDetails();
                }
				$infoD[$k] = array_merge($data, $id1[0]);
	    	}
	    	return $infoD;
    }

    //update invoice
    public function invoiceUpdate($id) {
    	$data['value_date'] = date('Y-m-d');
    	$data['invoice_type'] = "save";
    	$this->_db->where('invoice_id', $id);
    	$id = $this->_db->update('tms_invoice_client',$data);
    	return $id;
    }

    public function invoiceStatusChange($data, $id) {
        /* Insert Part paid invoice payment detail in database START */
        
        if(isset($data['partPaid'])){
            $partPaidAmount = array();
            $partPaidAmount['invoice_id']                   = $id;
            $partPaidAmount['invoice_partial_paid_amount']  = $data['partPaid'];
            $partPaidAmount['created_date']                 = date('Y-m-d H:i:s');
            
            $partPaymentInsert = $this->_db->insert('tms_invoice_client_payments', $partPaidAmount);
        }    
        /* Insert Part paid invoice payment detail in database END */

        unset($data['partPaid']);
        $data['modified_date'] = date('Y-m-d');
    	$this->_db->where('invoice_id', $id);
    	$idd = $this->_db->update('tms_invoice_client', $data);
    	
        if($idd && isset($partPaymentInsert)) {
    		$request['status'] = 200;
    		$request['msg'] = "Successfully updated";
    	} else {
    		$request['status'] = 401;
    		$request['msg'] = "Not updated";
    	}

    	return $request;
    }
    public function invoiceStatusIrrecoverable($data, $id) {
        $data['modified_date'] = date('Y-m-d');
    	$this->_db->where('invoice_id', $id);
    	$idd = $this->_db->update('tms_invoice_client', $data);
    	
        if($idd) {
    		$request['status'] = 200;
    		$request['msg'] = "Successfully updated";
    	} else {
    		$request['status'] = 401;
    		$request['msg'] = "Not updated";
    	}

    	return $request;
    }


    public function updateJobSummeryItemStatus($data, $id) {
    	$this->_db->where('job_summmeryId', $id);
    	$idd = $this->_db->update('tms_summmery_view', $data);
    	if($idd) {
    		$request['status'] = 200;
    		$request['msg'] = "Successfully updated";
    	} else {
    		$request['status'] = 401;
    		$request['msg'] = "Not updated";
    	}

    	return $request;
    }
    public function getFreelanceStatement($id){
         
        $data = $this->_db->rawQuery("SELECT tu.vUserName,tmInvoice.invoice_number AS InvoiceNo,tmInvoice.paid_date As Date,tmInvoice.Invoice_cost As Amount,tmInvoice.paid_amount,tmInvoice.freelance_id,tmInvoice.customer_id,tmInvoice.value_date,tmInvoice.invoice_type,tmInvoice.invoice_status,tmInvoice.created_date FROM tms_users AS tu INNER JOIN tms_invoice AS tmInvoice ON tu.iUserId = tmInvoice.freelance_id WHERE tu.iUserId = $id");
        return $data;
    }
    public function filterStatement($filterParams){
        //echo '<pre>'; print_r($filterParams); echo '</pre>';
        $this->_db->join('tms_users tu', 'tu.iUserId=tmInvoice.freelance_id','INNER');
        if(isset($filterParams['dueDateFrom']) && isset($filterParams['dueDateTo'])){

            $Frm = $filterParams['dueDateFrom'].' '.'00:00:00';
            $To = $filterParams['dueDateTo'].' '.'00:00:00';
            $this->_db->where('tmInvoice.created_date', Array ($Frm,$To),'BETWEEN');
        }
        
        if(isset($filterParams['comapanyCode'])){
            $cCode = $filterParams['comapanyCode'];
            $this->_db->where('tmInvoice.invoice_number','%'.$cCode.'%', 'like');
        }

        if(isset($filterParams['resource'])){
            $this->_db->where('tmInvoice.freelance_id', $filterParams['resource']);
        }
        if(isset($filterParams['invoiceStatus'])){
            $this->_db->where('tmInvoice.invoice_status', $filterParams['invoiceStatus']);
        }
        if(isset($filterParams['invoiceNumber'])){
            $this->_db->where('tmInvoice.invoice_number', $filterParams['invoiceNumber']);
        }
        
        $data = $this->_db->get('tms_invoice tmInvoice', null,' tu.vUserName,tmInvoice.invoice_number AS InvoiceNo,tmInvoice.paid_date As Date,tmInvoice.Invoice_cost As Amount,tmInvoice.paid_amount,tmInvoice.freelance_id,tmInvoice.customer_id,tmInvoice.value_date,tmInvoice.invoice_type,tmInvoice.invoice_status,tmInvoice.created_date');
        return $data;
    }

    /* Get All save invoice BY FreelancerId/UserId */
    public function getAllInvoiceByUserId($type,$userId) {
        //echo $userId;exit;
        $this->_db->join('tms_users tu', 'tu.iUserId=tmInvoice.freelance_id','LEFT');
        $this->_db->join('tms_client tc', 'tc.iClientId=tmInvoice.customer_id','LEFT');
        $this->_db->join('tms_summmery_view tsv', 'tsv.job_summmeryId=tmInvoice.job_id','LEFT');
        $this->_db->orderBy('tmInvoice.invoice_id', 'asc');
        $this->_db->where('tmInvoice.invoice_type', $type);
        $this->_db->where('tmInvoice.freelance_id',$userId);
        $data = $this->_db->get('tms_invoice tmInvoice', null,'tsv.job_summmeryId AS jobId, tsv.order_id AS orderId, tsv.po_number AS poNumber, tc.iClientId AS clientId, tc.vAddress1 AS companyAddress, tc.vEmailAddress  AS companyEmail, tc.vPhone AS companyPhone, tc.vCodeRights AS company_code, tu.iUserId AS freelanceId, tu.vUserName AS freelanceName, tu.vEmailAddress AS freelanceEmail, tu.vAddress1 AS freelanceAddress, tu.vProfilePic AS freelancePic, tu.iMobile AS freelancePhone, tsv.job_code AS jobCode, tmInvoice.invoice_number, tmInvoice.invoice_id, tmInvoice.invoice_status, tmInvoice.Invoice_cost, tmInvoice.paid_amount');
        foreach ($data as $key => $value) {
            $companyName = self::getAll('abbrivation',substr($value['company_code'],0,-2),'tms_centers');
            $data[$key]['companyName'] = isset($companyName[0]['name'])?$companyName[0]['name']:''; 
        }
        
        return $data;
    }


    // getInvoicePartPayments
    public function getClientInvoicePartPayments($id) {
        $this->_db->where('invoice_id', $id);
        $data = $this->_db->get('tms_invoice_client_payments');
        return $data;
    }

    public function sendInvoiceMail($data) {
        $pdf_content = explode("base64,",$data['pdfData']);
        $bin = base64_decode($pdf_content[1], true);
        // if (strpos($bin, '%PDF') !== 0) {
        //     throw new Exception('Missing the PDF file ');
        // }
        $path = '../../uploads/invoice/';
        // if ( !file_exists($dir) ) {
        //     mkdir ($dir, 0755);
        // }
        $pdfFile = $path.$data['invoiceno'].'.pdf';

        // Start Email Config
        $body = "<p> Hi ".$data['clientCompanyName']." </p>";
        $body .= "<p>Please see attached invoice number : <b>" .$data['invoiceno']. "</b> </p>";
        $body .= "<p> From :TMS </p>";
        $body .= "Email: " .$data['freelanceEmail']. "</p>";
        
        $subject = ($data['outstanding_reminder']==1) ? "Outstanding Invoice" : 'Invoice';

        $to = $data['companycontactEmail'];
        //$to = 'anil.kanhasoft@gmail.com';
        //$from = $data['data']['vEmailAddress'];
        $this->_mailer = new PHPMailer();
        // $this->_mailer = 'ISO-8859-1';
        $this->_mailer->IsSMTP();
        $this->_mailer->Host = "ssl://smtp.gmail.com";
        $this->_mailer->SMTPAuth = "true";
        $this->_mailer->Port = "465";
        $this->_mailer->Username = "ChrisGilesItWorks@gmail.com";
        $this->_mailer->Password = "Knh@Admin@123";

        $this->_mailer->From = "TMS";
        $this->_mailer->SetFrom = 'tmsadmin@tms.com';
        $this->_mailer->FromName = $data['freelanceName'];
            
        $this->_mailer->Subject = $subject;

        $this->_mailer->Body = $body;
        $this->_mailer->WordWrap = 100;
        $this->_mailer->AddAddress($to);
        //$this->_mailer->AddEmbeddedImage($emailImageData, 'logo_2u');
        $this->_mailer->IsHTML(true);
        // End email config
        // Write the PDF contents to a local file
        
        if(file_put_contents($pdfFile, $bin)){
            if ($pdfFile != '') {
                $this->_mailer->AddAttachment($pdfFile);
            }
            if ($this->_mailer->Send()) { //output success or failure messages
                if(isset($data['outstanding_reminder'])){
                    if($data['outstanding_reminder']==1)
                    $upData['reminder_sent'] = 1;
                }
                $upData['modified_date'] = date('Y-m-d');
                $upData['is_invoice_sent'] = 1;
                $this->_db->where('invoice_id', $data['invoice_id']);
                $this->_db->update('tms_invoice_client',$upData);

                $result['status'] = 200;
                $result['msg'] = 'Thank you for your email';
                $path = "../../uploads/attatchment/";
                $pdfFiles = glob($pdfFile);
                if($pdfFiles){
                    unlink($pdfFile);
                }
                return $result;
            } else {
                $result['status'] = 422;
                $result['msg'] = 'Could not send mail!';
                return $result;
            }
        }else{
            return $result['status'] = 422;
        }


    }

	// Client invoice serach data get
	public function clientInvoiceCreate($data1) {
		$infoD = array();
		$paymentDue = self::getAll('invoice_due_id',1,'tms_invoice_due_period');
		foreach ($data1['id'] as $k => $v) {
			$this->_db->where('itemId', $v['id']);
			$this->_db->join('tms_users tu', 'tu.iUserId=ti.contact_person', 'LEFT');
			$this->_db->join('tms_general gen', 'gen.order_id=ti.order_id', 'LEFT');
			$this->_db->join('tms_customer tcu','tcu.order_id = ti.order_id', 'INNER');
			$this->_db->join('tms_client tci', 'tci.iClientId=tcu.client', 'LEFT');
			//$data = $this->_db->getOne('tms_summmery_view tsv', 'tsv.job_summmeryId AS jobId,tsv.item_id AS item_number, tsv.order_id AS orderId, tsv.po_number AS poNumber, tci.iClientId AS clientId, tci.vAddress1 AS companyAddress, tci.vEmailAddress  AS companyEmail, tci.vPhone AS companyPhone, tu.iUserId AS freelanceId, tu.vUserName AS freelanceName, tu.vEmailAddress AS freelanceEmail, tu.vAddress1 AS freelanceAddress, tu.vProfilePic AS freelancePic, tu.iMobile AS freelancePhone, tg.company_code, tsv.job_code AS jobCode');
			$data = $this->_db->getOne('tms_items ti', 'ti.itemId AS itemId,ti.item_number, ti.order_id AS orderId, gen.heads_up, gen.order_no AS orderNumber, tci.iClientId AS clientId, tci.vUserName as clientCompanyName, tci.vAddress1 AS companyAddress, tci.vEmailAddress  AS companyEmail, tci.vPhone AS companyPhone, tu.iUserId AS freelanceId, tu.vUserName AS freelanceName, tu.vEmailAddress AS freelanceEmail, tu.vAddress1 AS freelanceAddress, tu.vProfilePic AS freelancePic, tu.iMobile AS freelancePhone');

            //echo $this->_db->getLastQuery();
            //$companyName = self::getAll('abbrivation',substr($data['company_code'],0,-2),'tms_centers');

			$data['companyName'] = 'test';

			//payment due date number of day
			$data['number_of_days'] = $paymentDue[0]['number_of_days'];

			//invoiceNumber Count
			$data['invoiceCount'] = count(self::get('tms_invoice_client'));
            //echo '<pre>'; print_r($data); echo '</pre>';exit;

			if(isset($data['orderId'])) {
				//$info = self::getAll('order_id',$data['orderId'],'tms_items');
                $this->_db->where('item_number',$data['item_number']);
                $this->_db->where('order_id',$data['orderId']);
                $info = $this->_db->getOne('tms_items');
                $data['item'] = [];
				if($info){
                    if($info['price']){
                        foreach (json_decode($info['price']) as $field => $val) {
                            $data['item'][] = (array) $val;
                        }
                    }
                }

                $data['vBankInfo'] = self::getDefaultbankDetails();
			}
			$infoD[$k] = $data;
		}
        return $infoD;
	}

    //invoice and draft save
    public function saveclientInvoice($data) {
        $invoiceAlreadyAdded = false;
        if($data['scoop_id']){
            $invoiceRecords = $this->_db->get('tms_invoice_client');

            foreach ($invoiceRecords as $k => $v) {
                foreach (json_decode($v['scoop_id'],true) as $ke => $val) {
                    $existedJobId = $val['id'];
                    foreach (json_decode($data['scoop_id'],true) as $k1 => $v1) {
                        $postedJobId = $v1['id'];
                        if($postedJobId == $existedJobId){
                            $invoiceAlreadyAdded = true;
                        }
                    }
                }
            }
        }
        
        if(!$invoiceAlreadyAdded){
            $data['created_date'] = date('Y-m-d');
            $data['modified_date'] = date('Y-m-d');
            $data['value_date'] = date('Y-m-d');
            $data['invoice_date'] = date('Y-m-d');
            $id = $this->_db->insert('tms_invoice_client', $data);
            if($id) {
                $result['status'] = 200;
                $result['msg'] = "Successfully saved";
            } else {
                $result['status'] = 401;
                $result['msg'] = "Not saved";
            }
            return $result;
        }else{
            $result['status'] = 422;
            $result['msg'] = "Invoice already added for this Project / scoop";
            return $result;
        }

    }
    
    /* Get All client invoice */
    public function getAllInvoiceClient($type,$userId) {
        //echo $userId;exit;
        $this->_db->join('tms_users tu', 'tu.iUserId=tmInvoice.freelance_id','LEFT');
        $this->_db->join('tms_client tc', 'tc.iClientId=tmInvoice.customer_id','LEFT');
        $this->_db->join('tms_items ti', 'ti.itemId=tmInvoice.scoop_id','LEFT');
        $this->_db->orderBy('tmInvoice.invoice_id', 'asc');
        $this->_db->where('tmInvoice.invoice_type', $type);
        //$this->_db->where('tmInvoice.freelance_id',$userId);
        $data = $this->_db->get('tms_invoice_client tmInvoice', null,'ti.itemId AS jobId, ti.order_id AS orderId, tc.iClientId AS clientId, tc.vUserName as clientCompanyName, tc.vAddress1 AS companyAddress, tc.vEmailAddress  AS companyEmail, tc.vPhone AS companyPhone, tc.vCodeRights AS company_code, tu.iUserId AS freelanceId, tu.vUserName AS freelanceName, tu.vEmailAddress AS freelanceEmail, tu.vAddress1 AS freelanceAddress, tu.vProfilePic AS freelancePic, tu.iMobile AS freelancePhone, tmInvoice.invoice_number, tmInvoice.invoice_id, tmInvoice.invoice_status, tmInvoice.Invoice_cost, tmInvoice.paid_amount');
        //echo $this->_db->getLastQuery();
        foreach ($data as $key => $value) {
            $data[$key]['companyName'] = ''; 
        }
        
        return $data;
    }

    // get Default Bank Details
    public function getDefaultbankDetails() {
        $this->_db->where('is_default', 1);
        $data = $this->_db->get('tms_banking_info');
        return $data;
    }

}