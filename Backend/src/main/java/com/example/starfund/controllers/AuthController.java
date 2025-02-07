package com.example.starfund.controllers;

import com.example.starfund.domain.model.dto.LoginDto;
import com.example.starfund.service.AuthService;
import com.example.starfund.service.InversionistaServiceImpl;
import lombok.AllArgsConstructor;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*")
@RestController
public class AuthController {
 

    private final InversionistaServiceImpl inversionistaService;

    @PostMapping("/login")
    public ResponseEntity<Map<String,String>> login(@RequestBody LoginDto loginDto) {
        String usuario = loginDto.getUsuario();
        String contrasena = loginDto.getContrasena();

        boolean acceso = inversionistaService.buscarPorUsuario(usuario, contrasena);
        Map <String, String> response = new HashMap<String, String>();
        if (acceso) {
            response.put("mensaje","Login successful");
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } else {
            response.put("mensaje","Invalid username or password");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
}