package com.ipem.api.modules.usuario.dto;

import com.ipem.api.modules.usuario.model.enums.Permissao;
import jakarta.validation.constraints.*;

public record UsuarioRequestDTO(
        @NotNull @Min(10000) @Max(99999) Integer id,
        @NotBlank String nome,
        @NotBlank @Email String email,
        @NotBlank @Size(min = 6) String senha,
        @NotNull Permissao permissao
) {}