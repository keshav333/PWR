package com.spe.PWR.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/producer")
public class ProducerController {

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public void registerProducer(){

    }

}
