package com.wecp.logisticsmanagementandtrackingsystem.Controller;


import com.wecp.logisticsmanagementandtrackingsystem.entity.Cargo;
import com.wecp.logisticsmanagementandtrackingsystem.entity.Driver;
import com.wecp.logisticsmanagementandtrackingsystem.service.CargoService;
import com.wecp.logisticsmanagementandtrackingsystem.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.List;

@RestController
public class BusinessController {

    @Autowired
    private DriverService driverService;

    @Autowired
    private CargoService cargoService;

    @PostMapping("/api/business/cargo")
    public ResponseEntity<Cargo> addCargo(@RequestBody Cargo cargo) {
        return new ResponseEntity<>(cargoService.addCargo(cargo),HttpStatus.OK);
        
    }

    @GetMapping("/api/business/drivers")
    public ResponseEntity<List<Driver>> getAllDrivers() {
        return new ResponseEntity<>(driverService.getAllDrivers(),HttpStatus.OK);
    }

    @GetMapping("/api/business/cargo")
    public ResponseEntity<List<Cargo>> viewAllCargos() {
        return new ResponseEntity<>(cargoService.viewAllCargos(),HttpStatus.OK);
    }

    @PostMapping("/api/business/assign-cargo")
    public ResponseEntity<String> assignCargoToDriver(@RequestParam Long cargoId, @RequestParam Long driverId) {
        boolean isAssigned = cargoService.assignCargoToDriver(cargoId, driverId);
        if (isAssigned) {
            return new ResponseEntity<>("{\"message\": \"Cargo assigned successfully\"}", HttpStatus.OK);
        } 
        else {
            return new ResponseEntity<>("{\"message\": \"Failed to assign cargo\"}", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
