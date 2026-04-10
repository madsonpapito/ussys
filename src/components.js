/**
 * Componentes Reutilizáveis do USA System
 * Injeta Sidebar e Header para manter o "Modelamento" consistente entre 17 páginas.
 */

function injectSidebar() {
    const target = document.getElementById('sidebar-target');
    if (!target) return;

    const currentPath = window.location.pathname;

    target.innerHTML = `
    <aside class="sidebar">
        <div class="logo" style="margin-bottom: var(--spacing-lg);">
            <div class="logo-icon">
                <i class="fas fa-flag-usa"></i>
            </div>
            <span>USA <span class="gradient-text">System</span></span>
        </div>

        <nav style="flex: 1;">
            <a href="/hub.html" class="sidebar-link ${currentPath.includes('hub') ? 'active' : ''}">
                <i class="fas fa-th-large"></i> Dashboard
            </a>
            <a href="/step-by-step-training.html" class="sidebar-link ${currentPath.includes('step-by-step') ? 'active' : ''}">
                <i class="fas fa-graduation-cap"></i> Treinamento
            </a>
            <div style="margin: 1.5rem 0 0.5rem 1rem; font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;">Guias e Programas</div>
            <a href="/american-refunds.html" class="sidebar-link ${currentPath.includes('american-refunds') ? 'active' : ''}">
                <i class="fas fa-dollar-sign"></i> American Refunds
            </a>
            <a href="/banking-benefits-guide.html" class="sidebar-link ${currentPath.includes('banking') ? 'active' : ''}">
                <i class="fas fa-university"></i> Banking Benefits
            </a>
            <a href="/housing-assistance-guide.html" class="sidebar-link ${currentPath.includes('housing') ? 'active' : ''}">
                <i class="fas fa-home"></i> Housing Assistance
            </a>
            <a href="/snap-food-stamps-guide.html" class="sidebar-link ${currentPath.includes('snap') ? 'active' : ''}">
                <i class="fas fa-utensils"></i> SNAP Food Stamps
            </a>
            <a href="/amazon-tax-recovery.html" class="sidebar-link ${currentPath.includes('amazon') ? 'active' : ''}">
                <i class="fab fa-amazon"></i> Amazon Tax Recovery
            </a>
        </nav>

        <a href="/" class="sidebar-link" style="margin-top: auto;">
            <i class="fas fa-sign-out-alt"></i> Sair
        </a>
    </aside>
    `;
}

// Executa ao carregar
document.addEventListener('DOMContentLoaded', () => {
    injectSidebar();
});
