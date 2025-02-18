export default function ComparisonTable() {
    return (
      <div className="overflow-x-auto bg-white">
        <table className="w-full text-left text-gray-800">
          {/* Encabezados */}
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-6 text-xl font-bold bg-white"></th>
              <th className="p-6 text-xl font-bold bg-white">CPX</th>
              <th className="p-6 text-xl font-bold bg-white">VS1</th>
              <th className="p-6 text-xl font-bold bg-white">VS3</th>
            </tr>
          </thead>
  
          {/* Cuerpo de la tabla */}
          <tbody>
            {[
              { label: "Cargo fijo mensual", values: ["15 UF", "15 UF", "15 UF"] },
              { label: "Cargo variable por km", values: ["0.001 UF/km", "0.001 UF/km", "0.001 UF/km"] },
              { label: "Velocidad máxima", values: ["105 km/h", "90 km/h (limit 45 km/h)", "45 km/h"] },
              { label: "Motor", values: ["7 kW (max. 8 kW)", "4 kW (max. 5.4 kW)", "2.5 kW (max. 3.3 kW)"] },
              { label: "Capacidad de la batería", values: ["74 V 45 Ah | 2 x 3.3 kWh", "75 V 45 Ah | 2 x 3.3 kWh", "76 V 45 Ah | 2 x 3.3 kWh"] },
              { label: "Autonomía", values: ["130 km", "110 km", "110 km"] },
              { label: "Peso del vehículo", values: ["107 kg", "109 kg", "164 kg"] },
              { label: "Despeje", values: ["154 mm", "155 mm", "154 mm"] },
              { label: "Altura del asiento", values: ["780 mm", "781 mm", "780 mm"] },
              { label: "Neumático frontal", values: ["100/80-16", "100/80-16", "100/80-16"] },
              { label: "Neumático trasero", values: ["110/80-14", "110/80-14", "125/65-12"] },
              { label: "Capacidad de carga", values: ["150 kg (incluido conductor)", "151 kg (incluido conductor)", "275 kg"] },
            ].map((row, index) => (
              <tr key={index} className="border-b border-gray-300 bg-white">
                <td className="p-6 text-gray-600 font-medium">{row.label}</td>
                {row.values.map((value, i) => (
                  <td key={i} className="p-6 text-gray-800">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  