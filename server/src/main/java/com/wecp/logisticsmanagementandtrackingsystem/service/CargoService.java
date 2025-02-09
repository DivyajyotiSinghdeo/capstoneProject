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
public class CargoService {
    @Autowired
    private CargoRepository cargoRepository;
    
    @Autowired
    private DriverRepository driverRepository;

    public Cargo addCargo(Cargo cargo){
        return cargoRepository.save(cargo);
    }

    public List<Cargo> viewAllCargos(){
        return cargoRepository.findAll();
    }

    public boolean assignCargoToDriver(Long cargoId, Long driverId){
        Cargo cargoOpt=cargoRepository.findById(cargoId).orElse(null);
        Driver driverOpt=driverRepository.findById(driverId).orElse(null);
        if(cargoOpt==null || driverOpt==null){
            return false;
        }
        cargoOpt.setDriver(driverOpt);
        cargoRepository.save(cargoOpt);
        return true;
    }
}
