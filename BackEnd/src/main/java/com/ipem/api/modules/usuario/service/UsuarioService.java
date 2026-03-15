package com.ipem.api.modules.usuario.service;

import com.ipem.api.modules.usuario.dto.UsuarioRequestDTO;
import com.ipem.api.modules.usuario.dto.UsuarioResponseDTO;
import com.ipem.api.modules.usuario.model.Usuario;
import com.ipem.api.modules.usuario.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor; // Gera o construtor para campos final 🧩
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository repository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public UsuarioResponseDTO cadastrar(UsuarioRequestDTO dto) {
        Usuario novoUsuario = Usuario.builder()
                .id(dto.id())
                .nome(dto.nome())
                .email(dto.email())
                .permissao(dto.permissao())
                .senha(passwordEncoder.encode(dto.senha()))
                .build();

        repository.save(novoUsuario);
        return new UsuarioResponseDTO(novoUsuario.getId(), novoUsuario.getNome(), novoUsuario.getEmail(), novoUsuario.getPermissao());
    }
}