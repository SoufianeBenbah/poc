package com.foot.poc.controller;

import com.foot.poc.model.RegistrationRequest;
import com.foot.poc.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "/registration")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @PostMapping
    public String register(@RequestBody RegistrationRequest request){
        return registrationService.register(request);
    }

}