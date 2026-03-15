package com.ipem.api.modules.usuario.dto;

import com.ipem.api.modules.usuario.model.enums.Permissao;

public record UsuarioResponseDTO(
        Integer id,
        String nome,
        String email,
        Permissao permissao
) {}