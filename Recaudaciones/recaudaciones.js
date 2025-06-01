const recaudacionesData = [
            {
                decada: "1961-1970",
                talleres: 2,
                belgrano: 0,
                instituto: 1,
            },
            {
                decada: "1970-1980",
                talleres: 2,
                belgrano: 0,
                instituto: 1,
            },
            {
                decada: "1982-1990",
                talleres: 78089,
                belgrano: 52402,
                instituto: 42470,
            },
            {
                decada: "1990-1999",
                talleres: 121005,
                belgrano: 85008,
                instituto: 39960,
            },
        ];

        function formatCurrency(amount) {
            return new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(amount);
        }

        function getHighestAndLowest(talleres, belgrano, instituto) {
            const values = [
                { club: "talleres", value: talleres },
                { club: "belgrano", value: belgrano },
                { club: "instituto", value: instituto },
            ];

            const sorted = values.sort((a, b) => b.value - a.value);
            const highest = sorted[0].club;
            const lowest = sorted[sorted.length - 1].club;

            return { highest, lowest };
        }

        function createDecadeCard(data) {
            const { highest, lowest } = getHighestAndLowest(data.talleres, data.belgrano, data.instituto);

            return `
                <div class="decade-card">
                    <div class="decade-header">
                        <h2>Década ${data.decada}</h2>
                    </div>
                    <div class="decade-content">
                        <div class="clubs-grid">
                            <div class="club-card talleres">
                                <h3 class="club-name">Club Atlético Talleres</h3>
                                <p class="club-amount ${highest === 'talleres' ? 'highest' : lowest === 'talleres' ? 'lowest' : ''}">${formatCurrency(data.talleres)}</p>
                                ${highest === 'talleres' ? '<span class="badge highest">Mayor Recaudación</span>' : ''}
                                ${lowest === 'talleres' ? '<span class="badge lowest">Menor Recaudación</span>' : ''}
                            </div>
                            <div class="club-card belgrano">
                                <h3 class="club-name">Club Atlético Belgrano</h3>
                                <p class="club-amount ${highest === 'belgrano' ? 'highest' : lowest === 'belgrano' ? 'lowest' : ''}">${formatCurrency(data.belgrano)}</p>
                                ${highest === 'belgrano' ? '<span class="badge highest">Mayor Recaudación</span>' : ''}
                                ${lowest === 'belgrano' ? '<span class="badge lowest">Menor Recaudación</span>' : ''}
                            </div>
                            <div class="club-card instituto">
                                <h3 class="club-name">Instituto A.C. Córdoba</h3>
                                <p class="club-amount ${highest === 'instituto' ? 'highest' : lowest === 'instituto' ? 'lowest' : ''}">${formatCurrency(data.instituto)}</p>
                                ${highest === 'instituto' ? '<span class="badge highest">Mayor Recaudación</span>' : ''}
                                ${lowest === 'instituto' ? '<span class="badge lowest">Menor Recaudación</span>' : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderDecades() {
            const container = document.getElementById('decades-container');
            container.innerHTML = recaudacionesData.map(data => createDecadeCard(data)).join('');
        }

        function renderTotals() {
            const totalTalleres = recaudacionesData.reduce((sum, data) => sum + data.talleres, 0);
            const totalBelgrano = recaudacionesData.reduce((sum, data) => sum + data.belgrano, 0);
            const totalInstituto = recaudacionesData.reduce((sum, data) => sum + data.instituto, 0);

            const totalComparison = getHighestAndLowest(totalTalleres, totalBelgrano, totalInstituto);

            const totalGrid = document.getElementById('total-grid');
            totalGrid.innerHTML = `
                <div class="total-club-card talleres">
                    <h3 class="total-club-name" style="color: #04162B;">Club Atlético Talleres</h3>
                    <p class="total-amount ${totalComparison.highest === 'talleres' ? 'highest' : totalComparison.lowest === 'talleres' ? 'lowest' : ''}">${formatCurrency(totalTalleres)}</p>
                    ${totalComparison.highest === 'talleres' ? '<span class="total-badge highest">Mayor Recaudación Histórica</span>' : ''}
                    ${totalComparison.lowest === 'talleres' ? '<span class="total-badge lowest">Menor Recaudación Histórica</span>' : ''}
                </div>
                <div class="total-club-card belgrano">
                    <h3 class="total-club-name" style="color: #0ea5e9;">Club Atlético Belgrano</h3>
                    <p class="total-amount ${totalComparison.highest === 'belgrano' ? 'highest' : totalComparison.lowest === 'belgrano' ? 'lowest' : ''}">${formatCurrency(totalBelgrano)}</p>
                    ${totalComparison.highest === 'belgrano' ? '<span class="total-badge highest">Mayor Recaudación Histórica</span>' : ''}
                    ${totalComparison.lowest === 'belgrano' ? '<span class="total-badge lowest">Menor Recaudación Histórica</span>' : ''}
                </div>
                <div class="total-club-card instituto">
                    <h3 class="total-club-name" style="color: #dc2626;">Instituto A.C. Córdoba</h3>
                    <p class="total-amount ${totalComparison.highest === 'instituto' ? 'highest' : totalComparison.lowest === 'instituto' ? 'lowest' : ''}">${formatCurrency(totalInstituto)}</p>
                    ${totalComparison.highest === 'instituto' ? '<span class="total-badge highest">Mayor Recaudación Histórica</span>' : ''}
                    ${totalComparison.lowest === 'instituto' ? '<span class="total-badge lowest">Menor Recaudación Histórica</span>' : ''}
                </div>
            `;
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderDecades();
            renderTotals();
        });