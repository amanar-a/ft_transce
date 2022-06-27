import React, { useState } from "react";
import { Modal, Button, Text, Input, Row, Radio } from "@nextui-org/react";
import Link from "next/link";

export default function Settings(props:any) {
    const [setting, changeSetting] = useState("default")
    const [values, changeValues] = useState({
        speed:"5",
        ballSize:"12"
    })
  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={props.visible}
        onClose={props.closeHandler}
      >
        <Modal.Header>
            <Text b size={18}>
              NextUI
            </Text>
        </Modal.Header>
        <Modal.Body>
          <Radio.Group defaultValue="default">
            <Row justify="space-evenly">
                <Radio checked={setting == "default" ? true : false} value="default" onChange={() =>changeSetting("default")}>Default </Radio>
                <Radio checked={setting == "advanced" ? true : false} value="advanced" onChange={() =>changeSetting("advanced")}>Advanced</Radio>
            </Row>
          </Radio.Group>
            { setting == "advanced" ?
                <div style={{display:"flex",flexFlow:"column",alignItems:"center"}}>
                    <Input
                        value={values.speed}
                        width="250px" 
                        label="Speed" 
                        type="number"
                        onChange={(e) =>{
                            if (parseInt(e.target.value) > 0 && parseInt(e.target.value) < 11)
                                changeValues((oldValues) =>({...oldValues,speed:e.target.value}))
                        }}
                    />
                    <Input 
                        value={values.ballSize}
                        width="250px" 
                        label="Ball Size" 
                        type="number"
                        onChange={(e) =>{
                            if (parseInt(e.target.value) > 3 && parseInt(e.target.value) < 41)
                                changeValues((oldValues) =>({...oldValues,ballSize:e.target.value}))
                        }}
                    />
                </div>
                :
                ""
            }
        </Modal.Body>
        <Modal.Footer justify="space-evenly">
          <Button auto flat color="error" onClick={props.closeHandler}>
            Close
          </Button>
          <Link href={`/game?speed=${values.speed}&ballSize=${values.ballSize}`}><Button auto onClick={props.closeHandler}>
            Play
          </Button></Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}