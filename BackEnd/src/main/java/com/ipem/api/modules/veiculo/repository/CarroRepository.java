package com.ipem.api.modules.veiculo.repository;

import com.ipem.api.modules.veiculo.model.Carro;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarroRepository extends JpaRepository<Carro, String> {
    List<Carro> findByDisponivelTrue();
}
