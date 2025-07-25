#!/bin/bash



# 6. Primer despliegue (opcional)
echo ""
log_info "¿Quieres hacer el primer despliegue ahora? (y/n): "
read -r first_deploy

if [ "$first_deploy" = "y" ] || [ "$first_deploy" = "Y" ]; then
    log_info "Haciendo primer despliegue..."
    
    # Build y deploy inicial
    gcloud builds submit --tag="gcr.io/$PROJECT_ID/cabanas-eden:v1"
    
    gcloud run deploy cabanas-eden-website \
        --image="gcr.io/$PROJECT_ID/cabanas-eden:v1" \
        --region=us-central1 \
        --platform=managed \
        --allow-unauthenticated \
        --port=8080 \
        --memory=512Mi \
        --quiet
    
    # Obtener URL
    SERVICE_URL=$(gcloud run services describe cabanas-eden-website \
        --region=us-central1 --format="value(status.url)")
    
    echo ""
    log_success "🎉 ¡LISTO! Tu sitio está en:"
    echo "🌐 $SERVICE_URL"
else
    log_info "Perfecto. Haz push a main cuando estés listo."
fi

echo ""
echo "📋 RESUMEN:"
echo "  • ✅ APIs habilitadas"
echo "  • ✅ Permisos configurados"  
echo "  • ✅ Trigger creado"
echo "  • 🚀 Push a 'main' = Deploy automático"
echo ""
echo "📂 Archivos necesarios en tu repo:"
echo "  • cloudbuild.yaml"
echo "  • Dockerfile"
echo "  • nginx.conf"
echo "  • .dockerignore"
echo ""
echo "🎯 SÚPER SIMPLE:"
echo "  1. Commit tus cambios"
echo "  2. git push origin main"
echo "  3. ¡Deploy automático en 3-5 minutos!"
echo ""
log_success "Configuración completada 🎉"