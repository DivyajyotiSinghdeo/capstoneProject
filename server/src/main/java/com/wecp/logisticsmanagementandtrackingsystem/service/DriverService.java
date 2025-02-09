package com.wecp.logisticsmanagementandtrackingsystem.service;

import com.wecp.logisticsmanagementandtrackingsystem.entity.Cargo;
import com.wecp.logisticsmanagementandtrackingsystem.entity.Driver;
import com.wecp.logisticsmanagementandtrackingsystem.repository.CargoRepository;
import com.wecp.logisticsmanagementandtrackingsystem.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class DriverService {
    @Autowired
    private DriverRepository driverRepository;

    @Autowired
    private CargoRepository cargoRepository;

    public Driver createDriver(Driver driver){
        return driverRepository.save(driver);
    }

    public List<Driver> getAllDrivers(){
        return driverRepository.findAll();
    }

    public List<Cargo> viewDriverCargos(Long driverId){
        Driver driver = driverRepository.findById(driverId).orElse(null);
        if (driver == null) {
            throw new EntityNotFoundException("Driver not found with ID: " + driverId);
        }
        return driver.getAssignedCargos();
    }

    public boolean updateCargoStatus(Long cargoId, String newStatus){
        Cargo cargo = cargoRepository.findById(cargoId).orElse(null);
        if (cargo == null) {
            return false; 
        }
        cargo.setStatus(newStatus);
        cargoRepository.save(cargo);
        return true;
    }

}
