package com.wecp.logisticsmanagementandtrackingsystem.Controller;


import com.wecp.logisticsmanagementandtrackingsystem.dto.CargoStatusResponse;
import com.wecp.logisticsmanagementandtrackingsystem.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/api/customer/cargo-status")
    public ResponseEntity<CargoStatusResponse> viewCargoStatus(@RequestParam Long cargoId) {
        CargoStatusResponse cargoStatusResponse=customerService.viewCargoStatus(cargoId);
        if(cargoStatusResponse!=null){
            return new ResponseEntity<>(cargoStatusResponse, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(cargoStatusResponse, HttpStatus.NOT_FOUND);
        }

        // get cargo status and return it with status code 200

        // if cargo status is not found, return 404 status code
    }

}
