<?php

require_once 'customer.class.php';
require_once 'client.class.php';

class discussion {
    public function __construct() {
        $this->_db = db::getInstance();
    }
    
    public function discussionOrderGet($id) {
        $this->_db->where('order_id',$id);
        $data = $this->_db->get('tms_discussion');
        return $data;
    }
    
    public function discussionOrder($data) {
        echo '<pre>'; print_r($_FILES); echo '</pre>';
        echo '<pre>'; print_r($data); echo '</pre>';exit;
        if($data['created_by_current_user'] == 1) 
            $data['created_by_current_user'] = "true";
        else
            $data['created_by_current_user'] = "false";
        if($data['user_has_upvoted'] == 1) 
            $data['user_has_upvoted'] = "true";
        else
            $data['user_has_upvoted'] = "false";
        
        $id = $this->_db->insert('tms_discussion',$data);
        if($id) {
            $result['Status'] = 200;
            $result['msg'] = "Inserted Successfully";
        } else {
            $result['Status'] = 401;
            $result['msg'] = "No Inserted";
        }
        return $result;
    }

    public function discussionOrderDelete($id,$data) {
        $this->_db->where('id',$id);
        $cols = Array ("user_id");
        $getMatch = $this->_db->getOne("tms_discussion", null, $cols);
        if($data == $getMatch['user_id']){
             $this->_db->where('id',$id);
            $del = $this->_db->delete('tms_discussion');
            if($del) {
                $result['Status'] = 200;
                $result['msg'] = "Deleted Successfully";
            } else {
                $result['Status'] = 401;
                $result['msg'] = "No Updated";
            }   
        }else{
            $result['Status'] = 401;
            $result['msg'] = "You can not delete other user post";
        }
        return $result;
    }

    public function discussionOrderUpdate($data,$id) {
        $this->_db->where('id',$id);
        $cols = Array ("user_id");
        $getMatch = $this->_db->getOne("tms_discussion", null, $cols);
        //echo $getMatch['user_id'];exit;
        if($data['login_userid'] == $getMatch['user_id']){
            unset($data['login_userid']);
            if($data['created_by_current_user'] == 1) 
                $data['created_by_current_user'] = "true";
            else
                $data['created_by_current_user'] = "false";
            if($data['user_has_upvoted'] == 1) 
                $data['user_has_upvoted'] = "true";
            else
                $data['user_has_upvoted'] = "false";
            
            $this->_db->where('id',$id);
            $id = $this->_db->update('tms_discussion',$data);
            if($id) {
                $result['Status'] = 200;
                $result['msg'] = "Updated Successfully";
            } else {
                $result['Status'] = 401;
                $result['msg'] = "No Updated";
            }
            
        }else{
            $result['Status'] = 401;
            $result['msg'] = "You can not edit other user post";
        }

        
        return $result;
    }

}
