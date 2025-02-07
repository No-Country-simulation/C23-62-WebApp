package com.example.starfund.controllers;

import com.example.starfund.domain.model.dto.LoginDto;
import com.example.starfund.service.AuthService;
import com.example.starfund.service.InversionistaServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*")
@RestController
public class AuthController {
    private final AuthService authService;

    private final InversionistaServiceImpl inversionistaService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDto loginDto) {
        String usuario = loginDto.getUsuario();
        String contrasena = loginDto.getContrasena();

        boolean acceso = inversionistaService.buscarPorUsuario(usuario, contrasena);

        if (acceso) {
            return ResponseEntity.status(HttpStatus.OK).body("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }
}