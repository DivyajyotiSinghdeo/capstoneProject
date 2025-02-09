package com.wecp.logisticsmanagementandtrackingsystem.Controller;


import com.wecp.logisticsmanagementandtrackingsystem.entity.Cargo;
import com.wecp.logisticsmanagementandtrackingsystem.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/driver")
public class DriverController {

    @Autowired
    private DriverService driverService;

    @GetMapping("/api/driver/cargo")
    public ResponseEntity<List<Cargo>> viewAssignedCargos(@RequestParam Long driverId) {
        return new ResponseEntity<>(driverService.viewDriverCargos(driverId),HttpStatus.OK);
    }

    @PutMapping("/update-cargo-status")
    public ResponseEntity<String> updateCargoStatus(@RequestParam Long cargoId, @RequestParam String newStatus) {
        boolean updateStatus = driverService.updateCargoStatus(cargoId, newStatus);
        if (updateStatus) {
            return new ResponseEntity<>("{\"message\": \"Cargo status updated successfully.\"}", HttpStatus.OK);
        } 
        else {
            return new ResponseEntity<>("{\"message\": \"Failed to update cargo status.\"}", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    }

