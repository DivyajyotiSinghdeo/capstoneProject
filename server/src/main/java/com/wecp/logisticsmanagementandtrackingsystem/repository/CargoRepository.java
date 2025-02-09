package com.wecp.logisticsmanagementandtrackingsystem.repository;


import com.wecp.logisticsmanagementandtrackingsystem.entity.Cargo;
import com.wecp.logisticsmanagementandtrackingsystem.entity.Driver;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CargoRepository extends JpaRepository<Cargo,Long> {
    // extend jpa repository to add custom query methods if needed

    @Query("SELECT c FROM Cargo c WHERE c.business.id=:businessID")
    List<Cargo> findByBusinessId(Long id);

    @Query("SELECT c FROM Cargo c WHERE c.driver.id=:driverID")
    List<Driver> findByDriverId(Long id);

}
